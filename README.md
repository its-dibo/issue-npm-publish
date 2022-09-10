# issue

the published package includes ./dist dir instead of putting its content into the package's root

## steps for reproduction
1- install the dependencies `npm i`
2- run `npm start`
3- open the generated .tgz file, it should contains the compiled files directly in its root instead of dist/*
