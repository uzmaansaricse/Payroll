import mongoose from "mongoose";

const subSuperAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String], // Example: ["View Companies", "Manage Employees"]
    default: [],
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
}, { timestamps: true });

export const SubSuperAdmin = mongoose.model("SubSuperAdmin", subSuperAdminSchema);
