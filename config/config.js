require('dotenv').config()
module.exports = {
  development: {
    database: 'travel_rn_development',
    dialect: 'postgres'
  },
  test: {
    database: 'travel_rn_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
