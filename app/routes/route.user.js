const { authJwt } = require("../middleware/jwt");
const controller = require("../controllers/user.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/test/all", controller.allAccess);

    app.get("/test/user", [authJwt.verifyToken], controller.userBoard);

    app.get("/test/admin", [authJwt.verifyToken], controller.adminBoard);
};