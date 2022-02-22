const {Sequelize, DataTypes, Deferrable} = require("sequelize");
const configDB = require("../config/db.config.js");

const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
    host: configDB.HOST,
    port: configDB.PORT,
    dialect: configDB.DIALECT,
    logging: configDB.LOGGING,
    pool: configDB.POOL
});

const db = {
    "Sequelize": Sequelize,
    "sequelize": sequelize,
    "user": require("../models/model.user.js")(sequelize, Sequelize, DataTypes, Deferrable),
    "role": require("../models/model.role.js")(sequelize, Sequelize, DataTypes, Deferrable),
    "route": require("../models/model.route.js")(sequelize, Sequelize, DataTypes, Deferrable),
}

db.role.belongsToMany(db.user, {
    through: "user_role",
    foreignKey: "role_id",
});
db.user.belongsToMany(db.role, {
    through: "user_role",
    foreignKey: "user_id",
});

db.route.belongsToMany(db.role, {
    through: "role_route",
    foreignKey: "route_id",
});

db.role.belongsToMany(db.route, {
    through: "role_route",
    foreignKey: "role_id",
});

module.exports = db;