describe('Form Functionality', function(){
  it('should allow the user to submit an email', function(){
    browser
        .url('/')
        .setValue('#mce-EMAIL', 'test@test.com')
        .submitForm('#mc-embedded-subscribe-form');

        var url = browser.getUrl();
        console.log('Url is: ' + url);
  })
})
