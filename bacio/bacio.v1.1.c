/* Fortran-callable routines to read and write characther (bacio) and */
/*   numeric (banio) data byte addressably                            */
/* Robert Grumbine  16 March 1998 */
/*  v1.1: Put diagnostic output under control of define VERBOSE or QUIET */
/*        Add option of non-seeking read/write                           */
/*        Return code for fewer data read/written than requested */

#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <malloc.h>
#include <ctype.h>
#include <string.h>

/* Include the C library file for definition/control */
/* Things that might be changed for new systems are there. */
/* This source file should not (need to) be edited, merely recompiled */
#include "clib.h"


/* Return Codes:  */
/*  0    All was well                                   */
/* -1    Tried to open read only _and_ write only       */
/* -2    Tried to read and write in the same call       */
/* -3    Internal failure in name processing            */
/* -4    Failure in opening file                        */
/* -5    Tried to read on a write-only file             */ 
/* -6    Failed in read to find the 'start' location    */
/* -7    Tried to write to a read only file             */
/* -8    Failed in write to find the 'start' location   */
/* -9    Error in close                                 */
/* -10   Read or wrote fewer data than requested        */

/* Note: In your Fortran code, call bacio, not bacio_.  */
/*int bacio_(int * mode, int * start, int * size, int * no, int * nactual,   */ 
/*          int * fdes, const char *fname, char *data, int  namelen,         */ 
/*          int  datanamelen)                                                */
/* Arguments: */
/* Mode is the integer specifying operations to be performed                 */
/*    see the clib.inc file for the values.  Mode is obtained                */
/*    by adding together the values corresponding to the operations          */
/*    The best method is to include the clib.inc file and refer to the       */
/*    names for the operations rather than rely on hard-coded values         */
/* Start is the byte number to start your operation from.  0 is the first    */
/*    byte in the file, not 1.                                               */
/* Newpos is the position in the file after a read or write has been         */
/*    performed.  You'll need this if you're doing 'seeking' read/write      */
/* Size is the size of the objects you are trying to read.  Rely on the      */
/*    values in the locale.inc file.  Types are CHARACTER, INTEGER, REAL,    */
/*    COMPLEX.  Specify the correct value by using SIZEOF_type, where type   */
/*    is one of these.  (After having included the locale.inc file)          */
/* no is the number of things to read or write (characters, integers,        */
/*                                                              whatever)    */
/* nactual is the number of things actually read or written.  Check that     */
/*    you got what you wanted.                                               */
/* fdes is an integer 'file descriptor'.  This is not a Fortran Unit Number  */
/*    You can use it, however, to refer to files you've previously opened.   */
/* fname is the name of the file.  This only needs to be defined when you    */
/*    are opening a file.  It must be (on the Fortran side) declared as      */
/*    CHARACTER*N, where N is a length greater than or equal to the length   */
/*    of the file name.  CHARACTER*1 fname[80] (for example) will fail.      */
/* data is the name of the entity (variable, vector, array) that you want    */
/*    to write data out from or read it in to.  The fact that C is declaring */
/*    it to be a char * does not affect your fortran.                        */
/* namelen - Do NOT specify this.  It is created automagically by the        */
/*    Fortran compiler                                                       */
/* datanamelen - Ditto                                                       */ 


/* What is going on here is that although the Fortran caller will always */
/*   be calling bacio, the called C routine name will change from system */
/*   to system. */
#ifdef HP
  int bacio
#endif
#ifdef SGI
  int bacio_
#endif
#ifdef LINUX
  int bacio_
#endif
         (int * mode, int * start, int *newpos, int * size, int * no, 
          int * nactual, int * fdes, const char *fname, char *data, 
          int  namelen, int  datanamelen) {
  int i, j, jret, seekret;
  char *realname, *tempchar, blank=' ';
  int tcharval;
/* These are the special (i.e., other than alphanumeric) characters which */
/*   are permissable in file names */
  char slash='/', dash='-', period='.', underscore='_';

/* Initialization(s) */
  *nactual = 0;

/* Check for illegal combinations of options */
  if (( BAOPEN_RONLY & *mode) && (BAOPEN_WONLY & *mode) ) {
     #ifdef VERBOSE
       printf("illegal -- trying to open both read only and write only\n");
     #endif
     return -1;
  }
  if ( (BAREAD & *mode ) && (BAWRITE & *mode) ) {
     #ifdef VERBOSE
       printf("illegal -- trying to both read and write in the same call\n");
     #endif
     return -2;
  }

/* This section handles Fortran to C translation of strings so as to */
/*   be able to open the files Fortran is expecting to be opened.    */
  if ( (BAOPEN_RONLY & *mode) | (BAOPEN_WONLY & *mode) | 
       (BAOPEN_RW & *mode) ) {
    #ifdef VERBOSE
      printf("Will be opening a file %d\n", namelen); fflush(stdout);
    #endif
    realname = (char *) malloc( namelen * sizeof(char) ) ;
    if (realname == NULL) { 
      #ifdef VERBOSE
        printf("failed to mallocate realname %d = namelen\n", namelen);
        fflush(stdout);
      #endif
      return -3;
    }
    tempchar = (char *) malloc(sizeof(char) * 1 ) ;
    i = 0;
    j = 0;
    *tempchar = fname[i];
    tcharval = *tempchar;
    while (i < namelen ) {
       fflush(stdout); 
       if ( strcmp(tempchar, &blank) > 0 && (isalnum(tcharval) || 
               strcmp(tempchar, &period) || 
               strcmp(tempchar, &dash) || 
               strcmp(tempchar, &slash) || 
               strcmp(tempchar, &underscore) ) ) {
         realname[j] = fname[i];
         j += 1;
       }
       i += 1;
       *tempchar = fname[i];
       tcharval = *tempchar;
    }
    #ifdef VERBOSE
      printf("i,j = %d %d\n",i,j); fflush(stdout);
    #endif
    realname[j] = '\0';
  } 
   
/* Open files with correct read/write and file permission. */
  if (BAOPEN_RONLY & *mode) {
    #ifdef VERBOSE
      printf("open read only %s\n", realname);
    #endif
     *fdes = open(realname, O_RDONLY | O_CREAT , S_IRWXU | S_IRWXG | S_IRWXO );
  }
  else if (BAOPEN_WONLY & *mode ) {
    #ifdef VERBOSE
      printf("open write only %s\n", realname);
    #endif
     *fdes = open(realname, O_WRONLY | O_CREAT , S_IRWXU | S_IRWXG | S_IRWXO );
  }
  else if (BAOPEN_RW & *mode) {
    #ifdef VERBOSE
      printf("open read-write %s\n", realname);
    #endif
     *fdes = open(realname, O_RDWR | O_CREAT , S_IRWXU | S_IRWXG | S_IRWXO );
  }
  else {
    #ifdef VERBOSE
      printf("no openings\n");
    #endif
  }
  if (*fdes < 0) {
    #ifdef VERBOSE
      printf("error in file descriptor! *fdes %d\n", *fdes);
    #endif
    return -4;
  }
  else {
    #ifdef VERBOSE
      printf("file descriptor = %d\n",*fdes );
    #endif
  }


/* Read data as requested */
  if (BAREAD & *mode && (BAOPEN_WONLY & *mode) ) {
    #ifdef VERBOSE
      printf("Error, trying to read while in write only mode!\n");
    #endif
    return -5;
  }
  else if (BAREAD & *mode ) {
  /* Read in some data */
    if (! (*mode && NOSEEK) ) {
      seekret = lseek(*fdes, *start, SEEK_SET);
      if (seekret == -1) {
        #ifdef VERBOSE
          printf("error in seeking to %d\n",*start);
        #endif
        return -6;
      }
    }
    jret = read(*fdes, data, *no);
    if (jret != *no) {
      #ifdef VERBOSE
        printf("did not read in the requested number of bytes\n");
        printf("read in %d bytes of %d \n",jret, *no);
      #endif
      *nactual = jret;
      *newpos = *start + jret;
    }  
    #ifdef VERBOSE
      printf("read in %d bytes instead\n", jret);
    #endif
    *nactual = jret;
    *newpos = *start + jret;
  }
/* Done with reading */
 
/* See if we should be writing */
  if ( BAWRITE & *mode && BAOPEN_RONLY & *mode ) {
    #ifdef VERBOSE
      printf("Trying to write on a read only file \n");
    #endif
     return -7;
  }
  else if ( BAWRITE & *mode ) {
    if (! (*mode && NOSEEK) ) {
      seekret = lseek(*fdes, *start, SEEK_SET);
      if (seekret == -1) {
      #ifdef VERBOSE
        printf("error in seeking to %d\n",*start);
      #endif
        return -8;
      }
    }
     jret = write(*fdes, data, *no);
     if (jret != *no) {
     #ifdef VERBOSE
       printf("did not write out the requested number of bytes\n");
       printf("wrote %d bytes instead\n", jret);
     #endif
       *nactual = jret;
       *newpos = *start + jret;
     }
     else {
     #ifdef VERBOSE
        printf("wrote %d bytes \n", jret);
     #endif
        *nactual = jret;
        *newpos = *start + jret;
     }
  }
/* Done with writing */
    

/* Close file if requested */
  if (BACLOSE & *mode ) {
    jret = close(*fdes);
    if (jret != 0) { 
    #ifdef VERBOSE
      printf("close failed! jret = %d\n",jret);
    #endif
      return -9;
    }
  }
/* Done closing */

/* Check that if we were reading or writing, that we actually got what */
/*  we expected, else return a -10.  Return 0 (success) if we're here  */
/*  and weren't reading or writing */
  if ( (*mode && BAREAD || *mode && BAWRITE) && (*nactual != *no) ) {
    return -10;
  }
  else {
    return 0;
  }
} 

#ifdef HP
  int banio
#endif
#ifdef SGI
  int banio_
#endif
#ifdef LINUX
  int banio_
#endif
         (int * mode, int * start, int *newpos, int * size, int * no, 
          int * nactual, int * fdes, const char *fname, char *data, 
          int  namelen ) {
  int i, j, jret, seekret;
  char *realname, *tempchar, blank=' ';
  int tcharval;
/* These are the special (i.e., other than alphanumeric) characters which */
/*   are permissable in file names */
  char slash='/', dash='-', period='.', underscore='_';


/* Check for illegal combinations of options */
  if (( BAOPEN_RONLY & *mode) && (BAOPEN_WONLY & *mode) ) {
    #ifdef VERBOSE
     printf("illegal -- trying to open both read only and write only\n");
    #endif
     return -1;
  }
  if ( (BAREAD & *mode ) && (BAWRITE & *mode) ) {
    #ifdef VERBOSE
     printf("illegal -- trying to both read and write in the same call\n");
    #endif
     return -2;
  }

/* This section handles Fortran to C translation of strings so as to */
/*   be able to open the files Fortran is expecting to be opened.    */
  if ( (BAOPEN_RONLY & *mode) | (BAOPEN_WONLY & *mode) | (BAOPEN_RW & *mode) ) {
    #ifdef VERBOSE
      printf("Will be opening a file %d\n", namelen); fflush(stdout);
    #endif
    realname = (char *) malloc( namelen * sizeof(char) ) ;
    if (realname == NULL) { 
      #ifdef VERBOSE
        printf("failed to mallocate realname %d = namelen\n", namelen);
      #endif
      fflush(stdout);
      return -3;
    }
    tempchar = (char *) malloc(sizeof(char) * 1 ) ;
    i = 0;
    j = 0;
    *tempchar = fname[i];
    tcharval = *tempchar;
    while (i < namelen ) {
       fflush(stdout); 
       if ( strcmp(tempchar, &blank) > 0 && (isalnum(tcharval) || 
               strcmp(tempchar, &period) || 
               strcmp(tempchar, &dash) || 
               strcmp(tempchar, &slash) || 
               strcmp(tempchar, &underscore) ) ) {
         realname[j] = fname[i];
         j += 1;
       }
       i += 1;
       *tempchar = fname[i];
       tcharval = *tempchar;
    }
    #ifdef VERBOSE
      printf("i,j = %d %d\n",i,j); fflush(stdout);
    #endif
    realname[j] = '\0';
  } 
   
/* Open files with correct read/write and file permission. */
  if (BAOPEN_RONLY & *mode) {
    #ifdef VERBOSE
      printf("open read only %s\n", realname);
    #endif
     *fdes = open(realname, O_RDONLY | O_CREAT , S_IRWXU | S_IRWXG | S_IRWXO );
  }
  else if (BAOPEN_WONLY & *mode ) {
    #ifdef VERBOSE
      printf("open write only %s\n", realname);
    #endif
     *fdes = open(realname, O_WRONLY | O_CREAT , S_IRWXU | S_IRWXG | S_IRWXO );
  }
  else if (BAOPEN_RW & *mode) {
    #ifdef VERBOSE
     printf("open read-write %s\n", realname);
    #endif
     *fdes = open(realname, O_RDWR | O_CREAT , S_IRWXU | S_IRWXG | S_IRWXO );
  }
  else {
    #ifdef VERBOSE
     printf("no openings\n");
    #endif
  }
  if (*fdes < 0) {
    #ifdef VERBOSE
     printf("error in file descriptor! *fdes %d\n", *fdes);
    #endif
    return -4;
  }
  else {
    #ifdef VERBOSE
     printf("file descriptor = %d\n",*fdes );
    #endif
  }


/* Read data as requested */
  if (BAREAD & *mode && (BAOPEN_WONLY & *mode) ) {
    #ifdef VERBOSE
     printf("Error, trying to read while in write only mode!\n");
    #endif
    return -5;
  }
  else if (BAREAD & *mode ) {
  /* Read in some data */
    if (! (*mode && NOSEEK) ) {
      seekret = lseek(*fdes, *start, SEEK_SET);
      if (seekret == -1) {
      #ifdef VERBOSE
         printf("error in seeking to %d\n",*start);
      #endif
         return -6;
      }
    }
    #ifdef VERBOSE
      printf("about to read %d data values of size %d\n",*no, *size);
      fflush(stdout);
    #endif
    jret = read(*fdes, data, *no*(*size) );
    if (jret != *no*(*size) ) {
    #ifdef VERBOSE
      printf("did not read in the requested number of items\n");
      printf("read in %d items of %d \n",jret/(*size), *no);
    #endif
      *nactual = jret/(*size);
      *newpos = *start + jret;
    }  
    #ifdef VERBOSE
     printf("read in %d items \n", jret/(*size));
    #endif
    *nactual = jret/(*size);
    *newpos = *start + jret;
  }
/* Done with reading */
 
/* See if we should be writing */
  if ( BAWRITE & *mode && BAOPEN_RONLY & *mode ) {
    #ifdef VERBOSE
     printf("Trying to write on a read only file \n");
    #endif
     return -7;
  }
  else if ( BAWRITE & *mode ) {
    if (! (*mode && NOSEEK) ) {
      seekret = lseek(*fdes, *start, SEEK_SET);
      if (seekret == -1) {
       #ifdef VERBOSE
         printf("error in seeking to %d\n",*start);
       #endif
        return -8;
       }
    }
     jret = write(*fdes, data, *no*(*size));
     if (jret != *no*(*size)) {
     #ifdef VERBOSE
       printf("did not write out the requested number of items\n");
       printf("wrote %d bytes instead\n", jret/(*size) );
     #endif
       *nactual = jret/(*size) ;
       *newpos = *start + jret;
     }
     else {
     #ifdef VERBOSE
        printf("wrote %d items \n", jret/(*size) );
     #endif
        *nactual = jret/(*size) ;
        *newpos = *start + jret;
     }
  }
/* Done with writing */
    

/* Close file if requested */
  if (BACLOSE & *mode ) {
    jret = close(*fdes);
    if (jret != 0) { 
    #ifdef VERBOSE
      printf("close failed! jret = %d\n",jret);
    #endif
      return -9;
    }
    else {
      #ifdef VERBOSE
       printf("Close succeeded\n");
      #endif
    }
  }
/* Done closing */

/* Check that if we were reading or writing, that we actually got what */
/*  we expected, else return a -10.  Return 0 (success) if we're here  */
/*  and weren't reading or writing */
  if ( (*mode & BAREAD || *mode & BAWRITE) && (*nactual != *no) ) {
    return -10;
  }
  else {
    return 0;
  }

} 
