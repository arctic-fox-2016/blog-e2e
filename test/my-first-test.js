describe('Form Functionality', function() {
    it('should allow the user to search for a news', function() {
        browser
            .url('/')
            .setValue('#UHSearchBox', 'pembunuhan')
            .click('#UHSearchWeb')

            var url = browser.getUrl();
            console.log('url is: ' + url);
    })
})
