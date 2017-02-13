#!/usr/bin/env bash

echo $@ # <1>

for ARG in $@; do
  echo "Argument $ARG"; # <2>
done
