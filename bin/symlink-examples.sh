#!/usr/bin/env bash

chapters=$(ls . | grep chapter-)

for chapter in $chapters; do
  if [ -d "node_modules/nodebook.$chapter" ]; then
    rm -f "$chapter/examples"
    ln -s "$(pwd)/node_modules/nodebook.$chapter" "$chapter/examples"
  fi
done
