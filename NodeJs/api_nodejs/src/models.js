const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite://database.db');
class User extends Model {}

User.init(
    {
    username: DataTypes.STRING,
    realname: DataTypes.STRING
    },
    { sequelize, modelName: 'user' }
    );

const register = async (username,realname) => {
    await sequelize.sync();
    const user = await User.create({
        username: username,
        realname: realname
    });
};

module.exports = {
    register,
}