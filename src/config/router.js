const express   = require("express")
const controllerSchedules = require("../controller/schedules")

const router    = express.Router()

router.post ("/api/toschedule", controllerSchedules.store)
router.get  ("/api/schedules/:page%26:qtd", controllerSchedules.index)
router.put  ("/api/schedules/:name%26:schedule", controllerSchedules.updateStatusTrue)

module.exports = router