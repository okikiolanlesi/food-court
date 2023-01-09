const { string } = require("joi");
const mongoose = require("mongoose");

const addonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Addon must have a name"],
      unique: true,
      maxlength: [20, "An addon name must have less or equal to 20 characters"],
    },
    description: {
      type: String,
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: "Brand",
    },
    price: {
      type: Number,
      required: [true, "Addon must have a price"],
    },
    category: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

addonSchema.virtual("categories", {
  ref: "Category",
  foreignField: "addon",
  localField: "_id",
});

addonSchema.pre(/^find/, function (next) {
  this.populate({
    path: "brand",
    select: "name",
  });
  next();
});

const Addon = mongoose.model("Addon", addonSchema);

module.exports = Addon;
