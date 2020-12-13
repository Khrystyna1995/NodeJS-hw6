const database = require('../database').getInstance();

module.exports = {
    findUserByParams: (findObj) => {
        const UserModel = database.getModel('User');

        return UserModel.findOne({
            where: findObj
        });
    }
};
