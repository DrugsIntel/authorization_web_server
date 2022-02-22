module.exports = (sequelize, Sequelize, DataTypes, Deferrable) => {
    const Role = sequelize.define("route", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING(2048), allowNull: false, timestamps: true, unique: true}
    },{schema: 'sign', freezeTableName: true});
    return Role;
};