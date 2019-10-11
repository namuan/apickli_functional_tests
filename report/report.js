var reporter = require('cucumber-html-reporter');

var env = process.env.NODE_ENV;
var options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: 'cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "Environment": env
    }
};

reporter.generate(options);