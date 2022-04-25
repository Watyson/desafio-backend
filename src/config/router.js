const express   = require("express")
const controllerSchedules = require("../controller/schedules")

const router    = express.Router()

router.post ("/api/toschedule", controllerSchedules.store)
router.get  ("/api/schedules/:page/:qtd", controllerSchedules.index)
router.put  ("/api/schedules/:name/:schedule", controllerSchedules.updateStatusTrue)

module.exports = router