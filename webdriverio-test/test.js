var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.hacktiv8.com')
    .setValue('.signup-name-field', 'BBB CCC')
    .setValue('.signup-email-field', 'aa@acda.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .getValue('.signup-name-field').then(function(name) {
        console.log('name' + name);
    })
    .end();
