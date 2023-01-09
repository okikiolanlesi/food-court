const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category must have a name"],
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: "Brand",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);
categorySchema.index({ name: 1, brand: 1 }, { unique: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
