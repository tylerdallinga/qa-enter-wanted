export default class Query {
  constructor() {
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
    this.optionalFieldGroups = [
      {
        error: 'If Operator\'s License Number, DL State, or DL Expiration Year are present, all three must be present.\n',
        list: [
          'oln',
          'oly',
          'ols'
        ]
      },
      {
        error: 'If License Plate, License State, or License Year are present, all three must be present.\n',
        list: [
          'lis',
          'liy',
          'lic'
        ]
      }
    ]
    this.valid = true
    this.assembledQuery = ''

    this.validateFields = this.validateFields.bind(this)
    this.updateField = this.updateField.bind(this)
  }

  updateField(code, val) {
    this[code] = val;
  }

  validateFields(fields) {
    let errorMessage = ''
    fields.map(field => {
      if (this.mandatoryFields.includes(field.code) && this[field.code] === '') {
        this.valid = false
        errorMessage += 'The field named "' + field.name + '" must be included.\n'
      }
      if (this[field.code] === '')
        return false
      let results = field.validate(this[field.code])
      if (!results.valid)
        this.valid = false
      errorMessage += results.errorMessage
      return true
    })
    console.log('after mandatory fields, is ' + (this.valid ? 'valid' : 'invalid'))
    errorMessage += this.optionalFieldGroups.map(group => {
      console.log(errorMessage)
      let fieldsEntered = 0
      for (let i = 0; i < group.list.length; i++) {
        if (this[group.list[i]] !== '')
          fieldsEntered++ //adds 1 for every field in the group that has been populated
      }
      return (fieldsEntered < group.list.length && fieldsEntered > 0) ? group.error : '' //if there is at least one, but not an entry for each field, will return error message
    })
    console.log('after optional fields, is ' + (this.valid ? 'valid' : 'invalid'))
    if (this.valid)
      this.assembledQuery = this.hdr + '.' + this.mke + '.' + this.ori + '/' + this.nam + '.' + this.sex + '.' + this.rac + '.' + this.hgt + ',' + this.wgt + '.' + this.off + '.' + this.hair + '.' + this.dow + '.' + this.oln + '.' + this.ols + this.oly + '.' + this.lic + '.' + this.lis + '.' + this.liy

    console.log(this.valid)
    return ({ valid: this.valid, errorMessage: errorMessage, assembledQuery: this.assembledQuery })
  }
}