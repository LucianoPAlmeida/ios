
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg)
}

page.open('contentblocking_test_suite.html', function(status) {
    page.render('contentblocking_test_suite.png')
    phantom.exit()
})
