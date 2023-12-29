const router = require("express").Router()
const { accountController } = require("../controller")
const { validateToken } = require("../middleware/validation")

router.post("/register", accountController.create)
router.post("/login", accountController.loginAcc)
router.get("/keeplogin", validateToken, accountController.keepLogin)

module.exports = router