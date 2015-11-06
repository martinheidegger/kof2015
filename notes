# Node.js at Kansai Open Forum 2015



## node cli

### Start simple: make sure you have a recent version.

```
$ node -v
```

### With the -e option we can run JavaScript right as a command

```
$ node -e "console.log(\"Hello World\")"
```

### With -p its possible to directly print the value

```
$ node -p "'Hello World'"
```

### Of course other operations work as well

```
$ node -p "1 + 1"
```

### REPL
``
$ node
> 1 + 1

Note: Repl is a module! https://nodejs.org/api/repl.html

### Piping

$ echo "1 + 1" | node -p

### As a file

$ echo "console.log(1 + 1)" > 01-cli/script.js
  node 01-cli/script.js

### As a script 

```bash

$ chmod +x 01-cli/bin; 01-cli/bin
```

#### Windows

Command lineにこのコマンドで.binがつかられます。

```PowerShell
> notepad 01-cli/bin.cmd 
```

Enter the following code

```
@node "%~dp0bin" %*
```

## Process details

### Run forever using setInterval

By default node shuts down immediately. To run forever we need to give it something to do:

```
$ node 02-process/01-forever.js
```

### Run forever by adding event listener

You can also just keep the stdin open and we will wait and wait.

```
$ node 02-process/02-resume.js
```

### It is furthermore possible that a native module keeps the thread alive.

```
$ node 02-process/03-native-module.js
```

### An error stops the process

```
$ node 02-process/04-error.js
```

It doesn't matter if the error is accidental or deliberate

```
$ node 02-process/05-deliberate-error.js
```

### You can catch those errors

```
$ node 02-process/06-catch-error.js
```

## NPM

### Install a global package

```
$ npm install coffee-script g
```

### Install a local package

```
$ npm install async
```

### Semver

[semver is important](http://semver.org/lang/ja/)

```
^1.1.0
~1.1.0
1.x
1.2.x
```

[try here](http://semver.npmjs.com/)


### Look at the package.json

```
```


### Edit the global package using EDITOR

### create a own package.json

### reference to module using 

### install a package by defining a dependency

... add ...

```
"dependency": {
	"async": "1.x"
}
```


## Packages


## require

```
$ require('async')
```

## require local

```
$ 
```

### express

### leveldb

## Debugging

### console log

### Error stack

### node debug

### node inspector

## NPM ++

### Specify scripts

### Publishing

## CLI ++

