const { Signup, Login } = require("./Controllers/AuthController.js");
const { userVerification } = require("../middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post('/', userVerification)
router.post("/signup", Signup);
router.post('/login', Login)

module.exports = router;
