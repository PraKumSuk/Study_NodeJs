var config = {
    dev: {
        //url to be used in link generation
        cdnURL: 'http://spk.cdn.com',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '11',
            db:     'spk_dev_db'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '8082'
        },
        //logging details
        logging: {
            path: './log/'
        }
    }};
    module.exports = config;