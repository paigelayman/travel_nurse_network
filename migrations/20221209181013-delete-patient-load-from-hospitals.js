'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('hospitals', 'patientLoad')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('hospitals', 'patientLoad', {
      type: Sequelize.STRING
    })
  }
}
