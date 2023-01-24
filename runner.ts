// custom runner for mocha that allows to include a custom reporter
// which is not packed into an npm module
import path from 'path';
import glob from 'glob';
import Mocha from 'mocha';
import "source-map-support/register";


const mocha = new Mocha({
  timeout: 25000,
  
  reporter: "mocha-multi-reporters",
  reporterOptions: {
    reporterEnabled: "allure-mocha, mocha-junit-reporter",
    allureMochaReporterOptions: {
      resultsDir: path.resolve(__dirname, "./allure-results"),
      parallel: true,
      jobs: 2,
    },
  }  ,
  grep: "submitUserData"
});
glob.sync("src/tests/**/*test.ts").forEach((file) => {
  mocha.addFile(file)
});
mocha.run((failures) => process.exit(failures === 0 ? 0 : 1));