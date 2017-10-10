import React, { Component } from 'react';

class QueryEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: props.query,
      originalQuery: null,
      notModified: true,
      validated: false,
      valid: true,
      errorMessages: [],
      assembledQuery: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({ query: Object.assign({}, props.selected), originalQuery: props.selected, notModified: true })
  }

  handleChange(prop, val) {
    if (this.state.notModified) {
      this.setState({ notModified: false, validated: false })
    }

    var queryCopy = Object.assign({}, this.state.query)
    queryCopy[prop] = val
    queryCopy.updateField(prop, val)
    this.setState({ query: queryCopy })
  }

  submit() {
    let results = this.state.query.validateFields(this.props.fields)
    this.setState({ originalQuery: Object.assign({}, this.state.query), notModified: true, validated: true, valid: results.valid, errorMessages: results.errorMessages, assembledQuery: results.assembledQuery })
  }

  cancel() {
    this.setState({ query: Object.assign({}, this.state.originalQuery), notModified: true, validated: true })
    this.setState({ employee: Object.assign({}, this.state.originalQuery), notModified: true })
  }

  render() {
    let inputs = this.props.fields.map(field => {
      return <div>
        <span className="placeholderText"> {field.name} </span><br />
        <input className="materialInput" value={this.state.query[field.code]||''} onChange={(e) => { this.handleChange(field.code, e.target.value) }}></input>
      </div>
    })
    let errors = this.state.valid ? '' : this.state.errorMessages.map(error => {
      return error !== '' ? <li className="errorMessage">{error}</li> : ''
    })
    return (
      <div>
        {
          this.state.query
            ?
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      {inputs}
                    </td>

                    <td>
                      <p id="employeeTitle"> {this.state.validated ? (this.state.valid ? 'Valid' : 'Errors Received:') : (errors===''?'': 'Errors Received:')} </p>
                      <list>{errors}</list>
                      <br />
                      <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={this.submit}> Submit </button>
                      <button className="neutralButton" disabled={this.state.notModified} onClick={this.cancel}> Undo </button>
                      <br />
                      <span className="placeholderText"> {this.state.validated ? (this.state.valid ? 'Assembled Query:' : 'No results generated due to error.') : 'Submit query for validation.'} </span>
                      <span className="placeholderText"> {(this.state.validated && this.state.valid) ? this.state.assembledQuery : ''} </span>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            :
            <p id="noEmployee"> No Query Exists </p>
        }
        <p id="noEmployee"> Version 1.5 </p>

      </div>
    )
  }
}

export default QueryEditor;