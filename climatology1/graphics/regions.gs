'open regions.ctl'
'set gxout grfill'
'clear'
'set display color white'
'set mpdset hires'
'set lon 30 390'
'set mproj nps'
'set lat   35 90'
'set lon -350 10'
#
'set grads off'
'set strsiz 0.2'
'draw string 4.00 7.75 Numbers -- r >= 0.5'
'set clevs -2 0 1 2 3 4 5 6 7 8 9 10'
#'d maskout(maskout(num,num-27),-(num-27))'
'd num'
'run cbarn'
'printim nh_regions.gif'
'clear'
#
'set mproj sps'
'set lat -90 -50'
'set lon -240 120'
'set grads off'
'set strsiz 0.2'
'draw string 4.00 7.75 Numbers -- r >= 0.5'
'set clevs -2 0 1 2 3 4 5 6 7 8 9 10'
'd num'
'run cbarn'
'printim sh_regions.gif'
'clear'
#
'quit'
