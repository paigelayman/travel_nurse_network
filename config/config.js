require('dotenv').config()
module.exports = {
  development: {
    database: 'travel_rn_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'travel_rn_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: 'travel_rn_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}
