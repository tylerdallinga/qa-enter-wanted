const dataTypes = {
    date: {
        regex: new RegExp('^(0[0-9]|1[0-2])(0[1-9]|[1-3][0-9])(19|20)([0-9][0-9])$'),
        error: 'must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today\'s date.\n'
    },
    year: {
        regex: new RegExp('^(19|20)([0-9][0-9])'),
        error: 'must be entered as a 4 digit year, YYYY, no earlier than 1900 and no later than this year.\n'
    },
    sex: {
        regex: new RegExp('^(M|F|U|m|f|u)$'),
        error: 'must be entered in as a single character, M for male, F for female, U for unknown.\n'
    },
    alpha: {
        regex: new RegExp('^[a-zA-Z]+$'),
        error: 'can only include characters from the English Alphabet.\n'
    },
    numeric: {
        regex: new RegExp('^[0-9]+$'),
        error: 'can only include numeric characters.\n'
    },
    alphanumeric: {
        regex: new RegExp('^[a-zA-Z0-9]+$'),
        error: 'can only include characters from the English Alphabet or numeric characters.\n'
    },
    alphaspecial: {
        regex: new RegExp('^([^0-9]*)+$'),
        error: 'can only include characters from the English Alphabet or special characters.\n'
    },
    numericspecial: {
        regex: new RegExp('^([^a-zA-Z]*)+$'),
        error: 'can only include numeric or special characters.\n'
    }
}

export default class Field {
    constructor(name, code, alpha, numeric, special, custom, min, max) {
        this.name = name
        this.code = code
        this.alpha = alpha
        this.numeric = numeric
        this.special = special
        this.custom = custom
        this.min = min
        this.max = max
    }

    validate(value) {
        let regex = ''
        let errorMessage = 'The "' + this.name + '" field '
        switch (this.custom) {
            case 'date':
                regex = dataTypes.date.regex
                errorMessage += dataTypes.date.error
                break;
            case 'year':
                regex = dataTypes.year.regex
                errorMessage += dataTypes.year.error
                break;
            case 'sex':
                regex = dataTypes.sex.regex
                errorMessage += dataTypes.sex.error
                break;
            default:
                if (this.alpha && !this.numeric && !this.special) {
                    regex = dataTypes.alpha.regex
                    errorMessage += dataTypes.alpha.error
                }
                else if (!this.alpha && this.numeric && !this.special) {
                    regex = dataTypes.numeric.regex
                    errorMessage += dataTypes.numeric.error
                }
                else if (this.alpha && !this.numeric && this.special) {
                    regex = dataTypes.alphaspecial.regex
                    errorMessage += dataTypes.alphaspecial.error
                }
                else if (this.alpha && this.numeric && !this.special) {
                    regex = dataTypes.alphanumeric.regex
                    errorMessage += dataTypes.alphanumeric.error
                }
                else if (!this.alpha && this.numeric && this.special) {
                    regex = dataTypes.numericspecial.regex
                    errorMessage += dataTypes.numericspecial.error
                }
                break;
        }

        let valid = true

        if (regex !== '') {
            valid = regex.test(value)
            if (this.custom === 'date' && valid) {
                let date = new Date()
                let today = ''
                today += date.getFullYear() //formatting date YYYYMMDD allows for direct >< comparison for earlier/later dates
                let month = date.getMonth() + 1
                today += month < 10 ? '0' + month : month //adds leading 0 for months before october (10)
                let day = date.getDate() + 1 //to account for differences in time zones, will allow one day past current date
                today += day < 10 ? '0' + day : day //adds leading 0 for days before the 10th of the month
                let dateToCompare = value.slice(4,8) + value.slice(0,2) + value.slice(2,4) //changes entered date to YYYYMMDD for direct comparison
                valid = parseInt(dateToCompare, 10) < parseInt(today, 10) ? true : false //returns true if date entered is less than today
            }
            else if (this.custom === 'year' && valid) {
                let date = new Date()
                valid = parseInt(value,10) <= date.getFullYear() ? true : false //returns true if the year is less than or equal to this year
            }
        }
        if (valid)
            errorMessage = ''
        if (value.length < this.min || value.length > this.max) {
            valid = false
            errorMessage += 'The "' + this.name + '" should be between ' + this.min + ' and ' + this.max + ' characters long.\n'
        }
        return { valid: valid, errorMessage: errorMessage }
    }
}