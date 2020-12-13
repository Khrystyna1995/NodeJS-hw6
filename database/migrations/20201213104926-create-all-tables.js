'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    });

    await  queryInterface.createTable('cars', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      model: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      }})
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cars');
    await queryInterface.dropTable('users');
  }
};
