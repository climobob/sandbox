#!/bin/sh

tag=20100213
while [ $tag -le 20110214 ]
do
  yy=`echo $tag | cut -c1-4`
  rest=`echo $tag | cut -c5-8`
  ./runamsr3.sh $yy $rest > out3.$tag
  tag=`expr $tag + 1`
  tag=`/u/wx21rg/bin/dtgfix3 $tag`
done
