module.exports = (sequelize, Sequelize, DataTypes, Deferrable) => {
    const Role = sequelize.define("role", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING(128), allowNull: false, timestamps: true, unique: true}
    },{schema: 'sign', freezeTableName: true});
    return Role;
};