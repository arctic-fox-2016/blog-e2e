var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://hacktiv8.com')
  .type('[name=fullname]', 'BBB CCC')
  .type('[name=email]', 'iniivan')
  //.click('form[action*="/search"] [type=submit]')
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
