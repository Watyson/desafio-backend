const express   = require("express")
const router    = express.Router()

router.get  ("/api/toschedule", /*controller.store*/)
router.post ("/api/schedules", /*controller.create*/)
router.put  ("/api/schedules/:scheduledDay/:scheduledTime", /*controller.update*/)

module.exports = router