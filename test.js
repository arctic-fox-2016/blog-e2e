var Nightmare = require('nightmare');
var nightmare = Nightmare({
    show: true
})

nightmare
// .goto('https://yahoo.com/')
// .type('form[action*="/search"] [name=p]', 'github nightmare')
// .click('form[action*="/search"] [type=submit]')
// .wait('#main')
// .evaluate(function () {
//     return document.querySelector('#main .searchCenterMiddle li a').href
// })
    .goto('https://wordpress.com/')
    .click('.login-link')
    .type('#user_login', 'sahbanalo@gmail.com')
    .type('#user_pass', 'wordpressg01d')
    .click('#rememberme')
    .click('#wp-submit')
    .wait('span.masterbar__item-content')
    .click('span.masterbar__item-content')
    .wait('a.sidebar__button')
    .click('li.posts:first-child')
    .evaluate(function () {
        return document.querySelector('li.posts')
    })
    .end()
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });
