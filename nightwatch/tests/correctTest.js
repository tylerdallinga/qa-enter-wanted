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
    'I can put min data in required fields and license and generate a result' : browser => {
        //set the transaction from your data file
    let transaction = data.transactions.requiredAndLicenseShort
        //send the fields & data to input
    functions.inputSet(selectors.fields, transaction.fields, browser)
    browser
        //submit
        .click(selectors.buttons.submit)
        .pause(100)
        //expect header to be right
        .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        //expect error list to be empty
    browser.expect.element(selectors.messages.errorList).text.to.equal('')
        //expect query title to be right
    browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        //expect assembled query to be right
    browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
},
'I can put in medium data in required fields and license and generate a result' : browser => {
    //set the transaction from your data file
let transaction = data.transactions.requiredAndLicenseMiddle
    //send the fields & data to input
functions.inputSet(selectors.fields, transaction.fields, browser)
browser
    //submit
    .click(selectors.buttons.submit)
    .pause(100)
    //expect header to be right
    .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
    //expect error list to be empty
browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //expect query title to be right
browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //expect assembled query to be right
browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
},
'I can put in maximum data in required fields and license and generate a result' : browser => {
    //set the transaction from your data file
let transaction = data.transactions.requiredAndLicenseMax
    //send the fields & data to input
functions.inputSet(selectors.fields, transaction.fields, browser)
browser
    //submit
    .click(selectors.buttons.submit)
    .pause(100)
    //expect header to be right
    .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
    //expect error list to be empty
browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //expect query title to be right
browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //expect assembled query to be right
browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
},
'I can put in short minimum data in required fields' : browser => {
    //set the transaction from your data file
let transaction = data.transactions.minimumShortData
    //send the fields & data to input
functions.inputSet(selectors.fields, transaction.fields, browser)
browser
    //submit
    .click(selectors.buttons.submit)
    .pause(100)
    //expect header to be right
    .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
    //expect error list to be empty
browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //expect query title to be right
browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //expect assembled query to be right
browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
},
'I can put in medium minimum data in required fields' : browser => {
    //set the transaction from your data file
let transaction = data.transactions.minimumMiddleData
    //send the fields & data to input
functions.inputSet(selectors.fields, transaction.fields, browser)
browser
    //submit
    .click(selectors.buttons.submit)
    .pause(100)
    //expect header to be right
    .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
    //expect error list to be empty
browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //expect query title to be right
browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //expect assembled query to be right
browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
},
'I can put in max minimum data in required fields' : browser => {
    //set the transaction from your data file
let transaction = data.transactions.minimumMaxData
    //send the fields & data to input
functions.inputSet(selectors.fields, transaction.fields, browser)
browser
    //submit
    .click(selectors.buttons.submit)
    .pause(100)
    //expect header to be right
    .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
    //expect error list to be empty
browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //expect query title to be right
browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //expect assembled query to be right
browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
},
}