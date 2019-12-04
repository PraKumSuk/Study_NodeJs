var config = {
    prod: {
        //url to be used in link generation
        cdnURL: 'http://spk.cdn.com',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '22',
            db:     'spk_prod_db'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '8080'
        },
        //logging details
        logging: {
            path: './log/'
        }
    }};
    module.exports = config;