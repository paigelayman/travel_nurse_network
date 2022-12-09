'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('hospitals', 'unit')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('hospitals', 'unit', {
      type: Sequelize.STRING
    })
  }
}
