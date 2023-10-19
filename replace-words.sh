#!/bin/bash

folder=$1
old_word=$2
new_word=$3

# Replace the word in files within the main folder
find "$folder" -type f -exec sed -i "s/$old_word/$new_word/g" {} +

# Replace the word in files within subfolders
find "$folder" -type f -execdir sed -i "s/$old_word/$new_word/g" {} +

