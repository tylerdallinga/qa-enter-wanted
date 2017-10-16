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
    'I can put only data into the licence Plate field and get an error message': browser => {
        //set the transaction from your data file
        let transaction = data.transactions.licOnly
        //send the fields & data to input
        functions.inputSet(selectors.fields, data.transactions.licOnly.fields, browser)
        browser
            //submit
            .click(selectors.buttons.submit)
            .pause(100)
            //expect header to be right
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        //expect error list to contain all the right errors
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        //expect query title to be right
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        //expect assembled query to be right
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'I can put good data in to all feilds and only license plate state and get an error': browser => {
        //set the transaction from your data file
        let transaction = data.transactions.lisOnly
        //send the fields & data to input
        functions.inputSet(selectors.fields, data.transactions.lisOnly.fields, browser)
        browser
            //submit
            .click(selectors.buttons.submit)
            .pause(100)
            //expect header to be right
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        //expect error list to contain all the right errors
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        //expect query title to be right
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        //expect assembled query to be right
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'I can put good data in to all feilds and only license plate year and get an error': browser => {
        //set the transaction from your data file
        let transaction = data.transactions.liyOnly
        //send the fields & data to input
        functions.inputSet(selectors.fields, data.transactions.liyOnly.fields, browser)
        browser
            //submit
            .click(selectors.buttons.submit)
            .pause(100)
            //expect header to be right
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        //expect error list to contain all the right errors
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        //expect query title to be right
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        //expect assembled query to be right
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    // 'I can put bad short data in and get the right error message': browser => {
    //     //set the transaction from your data file
    //     let transaction = data.transactions.errorMessageShort
    //     //send the fields & data to input
    //     functions.inputSet(selectors.fields, data.transactions.errorMessageShort.fields, browser)
    //     browser
    //         //submit
    //         .click(selectors.buttons.submit)
    //         .pause(100)
    //         //expect header to be right
    //         .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
    //     //expect error list to contain all the right errors
    //     functions.messagesCheck(selectors.messages.errorList.all, transaction.results.errorList, browser)
    //     //expect query title to be right
    //     browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //     //expect assembled query to be right
    //     browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    // },
}