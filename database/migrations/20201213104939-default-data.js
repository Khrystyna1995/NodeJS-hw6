'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Khrystyna',
        email: 'kric29_95@i.ua',
        password: '29031995kric'
      },
      {
        id: 2,
        name: 'Ira',
        email: 'ira30@i.ua',
        password: '12345678ira'
      }
    ]);
    await queryInterface.bulkInsert('cars', [
      {
        id: 1,
        model: 'Audi',
        user_id: 1
      },
      {
        id: 2,
        model: 'BMW',
        user_id: 2
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('cars', null, {});
  }
};
