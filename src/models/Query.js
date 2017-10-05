export default class Query {
  constructor(){
      this.hdr = ''
      this.mke = ''
      this.ori = ''
      this.nam = ''
      this.sex = ''
      this.rac = ''
      this.hgt = ''
      this.wgt = ''
      this.hai = ''
      this.off = ''
      this.dow = ''
      this.oln = ''
      this.ols = ''
      this.oly = ''
      this.lic = ''
      this.lis = ''
      this.liy = ''

    this.mandatoryFields = [
      'hdr',
      'mke',
      'ori',
      'nam',
      'sex',
      'rac',
      'hgt',
      'wgt',
      'hai',
      'off',
      'dow'
    ]
    this.optionalFields = [
      'oln',
      'oly',
      'ols',
      'lis',
      'liy',
      'lic',
      'lis'
    ]
    this.valid = true
    this.assembledQuery = ''

    this.validateFields = this.validateFields.bind(this)
    this.updateField = this.updateField.bind(this)
  }

  updateField(code, val){
    this[code] = val;
  }

  validateFields(fields){
    let errorMessage = ''
    console.log(fields);
    console.log(this.state)
    if(this.oln!==''||this.ols!==''||this.oly!==''){
      if(this.oln===''||this.ols===''||this.oly===''){
        this.valid = false
        this.errorMessage += 'If Operator\'s License Number, State or Year are present, all three must be present.\n'
      }
    }
    if(this.lic!==''||this.lis!==''||this.liy!==''){
      if(this.lic===''||this.lis===''){
        this.valid = false
        this.errorMessage += 'If Operator\'s License Number, State or Year are present, all three must be present.\n'
      }
    }
    fields.map(field =>{
      if(this.mandatoryFields.includes(field.code)&&this[field.code]===''){
        this.valid = false
        errorMessage += 'The field named "' + field.name + '" must be included.\n'
      }
      if(this[field.code]==='')
        return false
      console.log(field.code + ' ' + this[field.code])
      let results = field.validate(this[field.code])
      if(!results.valid)
        this.valid = false
      errorMessage += results.errorMessage
      return true
    })
    if(this.valid)
      this.assembledQuery = this.hdr + '.' + this.mke + '.' + this.ori + '/' + this.nam + '.' + this.sex + '.' + this.rac + '.' + this.hgt + ',' + this.wgt + '.' + this.off + '.' + this.hair + '.' + this.dow + '.' + this.oln + '.' + this.ols + this.oly + '.' + this.lic + '.' + this.lis + '.' + this.liy

    return({ valid: this.valid, errorMessage: errorMessage, assembledQuery: this.assembledQuery })
  }
}