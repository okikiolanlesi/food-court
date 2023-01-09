const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");
const authController = require("../controllers/authController");

router.use(authController.protect);
router.use(authController.restrictTo("admin"));

router
  .route("/:brandId/addons/:addonId")
  .get(brandController.getAddon)
  .patch(brandController.updateAddon)
  .delete(brandController.deleteAddon);

router
  .route("/:brandId/addons")
  .post(brandController.addAddon)
  .get(brandController.getAllAddons);

router
  .route("/:brandId/addon-categories")
  .post(brandController.addAddonCategory);

router
  .route("/")
  .post(brandController.createBrand)
  .get(brandController.getAllBrands);

module.exports = router;
