var apiResults = require('./api');
var app = function () {
    console.log(apiResults('jackson', 'BIO23', 72, ['santos', 'barbara', 'miso']));
};
app();
