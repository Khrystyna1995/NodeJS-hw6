const  database  = require('../database').getInstance();

module.exports = {
    getUsers: () => {
        const User = database.getModel('User');
        const Car = database.getModel('Car');

        return User.findAll( { include: Car } )
    },

    createUser: (user, passwordHelper) => {
        const User = database.getModel('User');

        return User.create({
            name: user.name,
            email: user.email,
            password: passwordHelper,
        });
    },

    updateUser: (userId, newUser, newPassword) => {
        const User = database.getModel('User');

        return User.update({
            name: newUser.name,
            email: newUser.email,
            password: newPassword
        },
            {where : { id: userId} });
    },

    getUserById: (userId) => {
        const User = database.getModel('User');
        const Car = database.getModel('Car');

        return User.findByPk(userId, {include: Car});
    },

    deleteUser: (userId) => {
        const User = database.getModel('User');

        return User.destroy({
            where: { id: userId }
        });
    }

};
