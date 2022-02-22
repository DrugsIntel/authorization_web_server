module.exports = (sequelize, Sequelize, DataTypes, Deferrable) => {
    const User = sequelize.define("user", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING(128), allowNull: false, timestamps: true, unique: true},
        email: {type: DataTypes.STRING(128), allowNull: false, timestamps: true, unique: true},
        password: {type: DataTypes.STRING(128), allowNull: false, timestamps: true}
    },{schema: 'sign', freezeTableName: true});
    return User;
};
