const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Brand = require("../models/brandModel");
const Addon = require("../models/addonModel");
const Category = require("../models/categoryModel");

exports.addAddon = catchAsync(async (req, res, next) => {
  if (!req.params.brandId)
    return next(new AppError("Please provide a brand id", 400));

  const { brandId } = req.params;

  req.body.brand = brandId;

  const newAddon = await Addon.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      newAddon,
    },
  });
});

exports.getAllAddons = catchAsync(async (req, res, next) => {
  const { brandId } = req.params;
  const addons = await Addon.find({ brand: brandId });
  res.status(200).json({
    status: "success",
    results: addons.length,
    data: {
      addons,
    },
  });
});

exports.getAddon = catchAsync(async (req, res, next) => {
  const { addonId } = req.params;
  const addon = await Addon.findById(addonId);
  if (!addon) {
    return next(new AppError("No addon found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      addon,
    },
  });
});

exports.updateAddon = catchAsync(async (req, res, next) => {
  const { addonId } = req.params;
  if (req.body.brand) delete req.body.brand;
  const addon = await Addon.findByIdAndUpdate(addonId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!addon) {
    return next(new AppError("No addon found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      addon,
    },
  });
});

exports.deleteAddon = catchAsync(async (req, res, next) => {
  const { addonId } = req.params;
  const addon = await Addon.findByIdAndDelete(addonId);
  if (!addon) {
    return next(new AppError("No addon found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.addAddonCategory = catchAsync(async (req, res, next) => {
  const { brandId } = req.params;
  req.body = {
    name: req.body.name,
    brand: brandId,
  };
  const category = await Category.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});

exports.createBrand = catchAsync(async (req, res, next) => {
  const newBrand = await Brand.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newBrand,
    },
  });
});

exports.getAllBrands = catchAsync(async (req, res, next) => {
  const brands = await Brand.find();
  res.status(200).json({
    status: "success",
    results: brands.length,
    data: {
      brands,
    },
  });
});
