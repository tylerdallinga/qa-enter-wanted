import React, { Component } from 'react'

import Query from './models/Query'
import Field from './models/Field'

import QueryEditor from './components/QueryEditor'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: new Query(),
      fields: [
        new Field('Header', 'hdr', true, true, true, 9, 19),
        new Field('MKE', 'mke', true, false, true, 2, 4),
        new Field('Originating Agency Identifier', 'ori', true, true, false, 9, 9),
        new Field('Name', 'nam', true, false, true, 3, 30), //should allow numeric
        new Field('Sex', 'sex', true, false, false, 1, 1),
        new Field('Race', 'rac', true, false, false, 1, 5), //should only allow 1 character
        new Field('Height', 'hgt', false, true, false, 3, 3),
        new Field('Weight', 'wgt', false, true, false, 3, 3),
        new Field('Hair', 'hai', true, true, false, 1, 10), //should only allow 3-10 alpha
        new Field('Offense', 'off', true, true, true, 5, 15),
        new Field('Date of Warrant/Violation', 'dow', false, true, false, 8, 8), //should only allow numeric (in date format)
        new Field('Drivers License', 'oln', true, true, true, 1, 20),
        new Field('DL State', 'ols', true, false, true, 2, 2), //should only allow alpha
        new Field('DL Expiration Year', 'oly', false, true, false, 3, 3), //should only allow 4 numeric for year
        new Field('License Plate', 'lic', true, true, false, 5, 8),
        new Field('License State', 'lis', false, true, false, 4, 4), //should only allow 2 alpha
        new Field('License Year', 'liy', true, false, false, 2, 2) //should allow 4 numeric
      ]
    }

    this.refresh = this.refresh.bind(this)
  }

  refresh() {
    this.setState(this.state)
  }

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <QueryEditor query={this.state.query} fields={this.state.fields} />
        </div>
      </div>
    )
  }
}

export default App;
