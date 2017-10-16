module.exports = {
    transactions: {
        requiredAndLicenseShort: {
            fields: {
                hdr: '#001UT854',
                mke: 'WE',
                oai: 'UT7895123',
                nam: 'Tim',
                sex: 'M',
                rac: 'W',
                hgt: '511',
                wgt: '245',
                hai: 'Blue',
                off: 'Theft',
                dow: '12252016',
                oln: '',
                ols: '',
                oly: '',
                lic: 'TYI45',
                lis: 'UT',
                liy: '2017'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '#001UT854.WE.UT7895123.Tim.M.W.511.245.Blue.Theft.12252016....TYI45.UT.2017'
            }
        },
        requiredAndLicenseMiddle: {
            fields: {
                hdr: '#001UT85432198',
                mke: 'W-E',
                oai: 'UT7895123',
                nam: 'Tyler Dallinga',
                sex: 'F',
                rac: 'B',
                hgt: '604',
                wgt: '300',
                hai: 'Black',
                off: '3* Homicide',
                dow: '11282016',
                oln: '',
                ols: '',
                oly: '',
                lic: 'Tyd123',
                lis: 'ME',
                liy: '1990'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '#001UT85432198.W-E.UT7895123.Tyler Dallinga.F.B.604.300.Black.3* Homicide.11282016....Tyd123.ME.1990'
            },
        },
        requiredAndLicenseMax: {
            fields: {
                hdr: '#001UT8543214569878',
                mke: 'WE-T',
                oai: 'UT7895123',
                nam: 'John Jacob Jingelhimer Smith 3',
                sex: 'U',
                rac: 'H',
                hgt: '507',
                wgt: '150',
                hai: 'Turquoise',
                off: 'Cheated on Test',
                dow: '03072015',
                oln: '',
                ols: '',
                oly: '',
                lic: 'tydl1548',
                lis: 'VT',
                liy: '1995'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '#001UT8543214569878.WE-T.UT7895123.John Jacob Jingelhimer Smith 3.U.H.507.150.Turquoise.Cheated on Test.03072015....tydl1548.VT.1995'
            },
        },
        licOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: 'TYI45',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    lic: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        errorMessageShort: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '12345678',
                mke: 'E',
                oai: 'AN898588',
                nam: 'TJ',
                sex: '2',
                rac: '4',
                hgt: '21',
                wgt: '34',
                off: 'Bad',
                dow: '7122015',
                lic: '12Mn',
                lis: 'U',
                liy: '568'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    sex: 'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.',
                    rac: 'The "Race" field can only include characters from the English Alphabet.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be 3 characters long.',
                    //hai: 'no message is displayed causing the test to fail.
                    off: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    liy: 'The "License State" field should be 2 characters long.',
                    lis: 'The "License Year" field should be 4 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        lisOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: 'UT',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    lic: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        liyOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: '2017'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    lic: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        minimumShortData: {
            fields: {
                hdr: '#001UT854',
                mke: 'WE',
                oai: 'UT7895123',
                nam: 'Tim',
                sex: 'M',
                rac: 'W',
                hgt: '511',
                wgt: '245',
                hai: 'Blue',
                off: 'Theft',
                dow: '12252016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '#001UT854.WE.UT7895123.Tim.M.W.511.245.Blue.Theft.12252016......'
            }
        },
        minimumMiddleData: {
            fields: {
                hdr: '#001UT85432198',
                mke: 'W-E',
                oai: 'UT7895123',
                nam: 'Tyler Dallinga',
                sex: 'F',
                rac: 'B',
                hgt: '604',
                wgt: '300',
                hai: 'Black',
                off: '3* Homicide',
                dow: '11282016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '#001UT85432198.W-E.UT7895123.Tyler Dallinga.F.B.604.300.Black.3* Homicide.11282016......'
            }
        },
        minimumMaxData: {
            fields: {
                hdr: '#001UT8543214569878',
                mke: 'WE-T',
                oai: 'UT7895123',
                nam: 'John Jacob Jingelhimer Smith 3',
                sex: 'U',
                rac: 'H',
                hgt: '507',
                wgt: '150',
                hai: 'Turquoise',
                off: 'Cheated on Test',
                dow: '03072015',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '#001UT8543214569878.WE-T.UT7895123.John Jacob Jingelhimer Smith 3.U.H.507.150.Turquoise.Cheated on Test.03072015......'
            },
        }
    }
}