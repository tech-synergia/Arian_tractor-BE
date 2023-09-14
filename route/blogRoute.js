const router = require("express").Router();
const blogController = require("../controller/blogController")

router.post(`/create`, blogController.create);

router.get(`/blog/all`, blogController.getAll);

router.get(`/blog/single/:id`, blogController.getSingle);

router.patch(`/update/:id`, blogController.update);

router.delete(`/delete/:id`, blogController.delete)

module.exports = router;