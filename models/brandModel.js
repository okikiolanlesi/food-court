const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Brand must have a name"],
      unique: true,
      maxlength: [20, "A brand name must have less or equal to 20 characters"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

brandSchema.virtual("addons", {
  ref: "Addon",
  foreignField: "brand",
  localField: "_id",
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
