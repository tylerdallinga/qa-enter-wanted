export default class Field {
    constructor(name, code, alpha, numeric, special, min, max){
        this.name = name
        this.code = code
        this.alpha = alpha
        this.numeric = numeric
        this.special = special
        this.min = min
        this.max = max
    }

    validate(value){
        let regex = ''
        let errorMessage = 'The "' + this.name + '" field allows '
        if(this.alpha && !this.numeric && !this.special){
            regex = '^[a-zA-Z]+$'
            errorMessage += 'only letters.'
        }
        else if(!this.alpha && this.numeric && !this.special){
            regex = '^[0-9]+$'
            errorMessage += 'only numberic values.' //should read "numbers"
        }
        else if(this.alpha && !this.numeric && this.special){
            regex = '^([^0-9]*)+$'
            errorMessage += 'letters and special characters, no numbers.'
        }
        else if(this.alpha && this.numeric && !this.special){
            regex = '^[a-zA-Z0-9]+$'
            errorMessage += 'letters and numbers, no special characters.'
        }
        else if(!this.alpha && this.numeric && this.special){
            regex = '^([^a-zA-Z]*)+$'
            errorMessage += 'numbers and special characters, no letters.'
        }
        errorMessage += '\n'

        let valid = true

        if(regex !== ''){
            let regexp = new RegExp(regex)
            valid = regexp.test(value)
            if(valid)
                errorMessage = ''
        }
        if(value.length < this.min|| value.length > this.max){
            valid = false
            errorMessage += 'The "' + this.name + '" should be between ' + this.min + ' and ' + this.max + ' characters long.\n'
        }
        return {valid: valid, errorMessage: errorMessage}
    }
}