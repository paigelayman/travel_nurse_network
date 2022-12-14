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
    use_env_variables: 'DATABASE_URL',
    database: 'travel_rn_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
