const functions = require('../test_data/commonFunctions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can put data in the fields and generate a result' : (browser) => {
        functions.inputSet(selectors.fields, data.transactions.minimumEntry.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(data.transactions.minimumEntry.results.header)
        browser    
            .expect.element(selectors.messages.assembledQuery).text.to.equal(data.transactions.minimumEntry.results.assembledQuery)
    }
}