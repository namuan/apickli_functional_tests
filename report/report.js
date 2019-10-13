var reporter = require('cucumber-html-reporter');

var env = process.env.NODE_ENV;
var options = {
    theme: 'bootstrap',
    jsonFile: './report/cucumber-report.json',
    output: './report/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "Environment": env
    }
};

reporter.generate(options);