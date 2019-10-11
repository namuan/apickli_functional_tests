### Apickli Functional Tests Template

A sample project for running BDD tests with [apickli](https://github.com/apickli/apickli) framework.

#### Running the tests

Make sure you have nodejs and npm installed.

Run the following command from the root directory

```
## Install dependencies
npm i

## There are couple of helper commands to run specific tags
## See package.json -> scripts for the full syntax
## npm run <tag-name>

npm run all # should run all tests with @all tag
npm run travel # should run all tests with @Travel tag
```

The report file in json format is generated in the report folder.

To view the report in html format

```
cd report
node report.js
```

which should start up a server to host the report in html format.

