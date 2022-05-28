
## initialize
$ npx tsc --init

$ yarn init

OR [for zero install](https://yarnpkg.com/getting-started/install#initializing-your-project)

$ yarn init -2 

### error

for `Required package: src (via "src/app.ts")` error

add 
```
"dependencies": {
    "src": "link:./src"
  },
```
to package.json file.

and run 
$ yarn

## run
after adding dev script to package.json file as
```
"scripts": {
    "dev": "ts-node-dev src/app.ts"
  }
```

$ yarn dev

to avoid exiting the server everytime and on transpiling add these keyword to dev script 

```
 "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
```