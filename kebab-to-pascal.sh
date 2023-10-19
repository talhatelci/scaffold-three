#!/bin/bash

kebab_case=$1

# Convert kebab-case to PascalCase
pascal_case=""
next_uppercase=true

for (( i=0; i<${#kebab_case}; i++ )); do
    char="${kebab_case:i:1}"
    if [[ $char == "-" ]]; then
        next_uppercase=true
    else
        if [[ $next_uppercase == true ]]; then
            pascal_case+="${char^^}"
            next_uppercase=false
        else
            pascal_case+="$char"
        fi
    fi
done

echo "$pascal_case"
