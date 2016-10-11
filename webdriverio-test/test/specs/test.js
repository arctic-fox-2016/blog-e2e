describe('Form Functionality', function() {

    it('Should allow to user to submitt email', function() {
        console.log("test")
        browser
            .url('/')
            .setValue('#email', 'BBB CCC')
            .setValue('#pass', 'aa@acda.com')
            .click('#u_0_l')
        var url = browser.getUrl()
        console.log('URL Baru ' + url);
    })
})
