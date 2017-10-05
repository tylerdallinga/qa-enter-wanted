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
        if(this.alpha && !this.numeric && !this.special)
            regex = '^[a-zA-Z]+$'
        else if(!this.alpha && this.numeric && !this.special)
            regex = '^[0-9]+$'
        else if(this.alpha && !this.numeric && this.special)
            regex = '^([^0-9]*)+$'
        else if(this.alpha && this.numeric && !this.special)
            regex = '^[a-zA-Z0-9]+$'
        else if(!this.alpha && this.numeric && this.special)
            regex = '^([^a-zA-Z]*)+$'

        let valid = true
        let errorMessage = ''
        if(regex !== ''){
            let regexp = new RegExp(regex)
            valid = regexp.test(value)
            if(!valid)       
                errorMessage += 'The "' + this.name + '" should contain ' + (this.alpha? '': 'no') + ' letters, ' + (this.numeric?'':'no') + ' numbers, and ' + (this.special?'':'no') + 'special characters.\n'   
        }
        if(value.length < this.min|| value.length > this.max){
            valid = false
            errorMessage += 'The "' + this.name + '" should be between ' + this.min + ' and ' + this.max + ' characters long.\n'
        }
        return {valid: valid, errorMessage: errorMessage}
    }
}