#!/bin/bash

if [[ $1 && $2 ]]; then
	echo $1
	echo $2
else
	echo "No arguments supplied"
fi

if [ $3 ]; then
	echo $3
fi
