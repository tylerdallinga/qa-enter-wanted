module.exports = {
    transactions: {
        minimumEntry: {
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
                dow: '05022016'
            },
            results: {
                header: 'Valid',
                assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresden.M.W.607.200.Brown.Arson.05022016......'
            }
        }

    }
}