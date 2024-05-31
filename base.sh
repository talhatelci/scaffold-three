#!/bin/bash

project_name=$1
script_folder="$HOME/Talha/Bash/scaffold-three"

npx create-vite@latest $project_name --template vanilla

cd $project_name
npm install
npm install three vite-plugin-glsl
npm install -D tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss

rm -rf "./public"
rm -f "main.js" "counter.js" "vite.config.js"
rm -f "index.html" "style.css" "javascript.svg" "README.md"

cp -r "$script_folder/template/." "./"

pascal_case=$($script_folder/kebab-to-pascal.sh $project_name)
$script_folder/replace-words.sh "./" "PASCAL_CASE_NAME" $pascal_case
$script_folder/replace-words.sh "./" "KEBAB_CASE_NAME" $project_name

git init .
git add .
git commit -m "initial commit"

code .
npm run dev
