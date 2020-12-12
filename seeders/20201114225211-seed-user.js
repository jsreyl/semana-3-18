'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$TvBmqODfIsZojfEej.s3AeB9aC.W8/B1S3ceYkhBnNqbGb/cdnWBi',
            // micontraseña
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};