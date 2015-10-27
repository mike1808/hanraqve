#!/bin/bash

url=http://www.police.am/Hanraqve/_hi_/_hi___low_.xls


start=$1
end=$2

: ${start:=1}
: ${end:=41}

echo $start $end

for i in $(seq $start $end); do
    for j in $(seq -f "%02g" 1 99); do
        echo "Downloading $i $j"
        wget -q ${${url//_hi_/$i}//_low_/$j} || break
    done
done
