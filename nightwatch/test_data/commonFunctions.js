const input = (selector, value, browser) => {
    browser
        .clearValue(selector)
        .setValue(selector, value)
        .expect.element(selector).to.have.value.that.equals(value)
}

const inputSet = (selector_set, value_set, browser) => {
    for (let field in selector_set) {
        if (selector_set.hasOwnProperty(field)) {
            let selector = selector_set[field];
            let value = value_set[field];
            input(selector, value, browser)
        }
    }
}

module.exports = {
    //a function to input values into an input text field
    //and check that the value input is accurate before
    //returning
    input: input,
    //will take a set of selectors and values and input all
    //of them, assuming that the key for the selector is the
    //same key as the value
    inputSet: inputSet
}