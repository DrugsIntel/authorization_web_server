module.exports = {
    HOST: "10.0.10.131",
    PORT: "5432",
    USER: "admin",
    PASSWORD: "admin",
    DB: "drugsintel.com",
    DIALECT: "postgres",
    LOGGING: (...msg) => console.log(msg),
    POOL: {
        max: 5, //maximum number of connection in pool
        min: 0, //minimum number of connection in pool
        acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000 //maximum time, in milliseconds, that pool will try to get connection before throwing error
    }
};

