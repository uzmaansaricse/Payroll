import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  companyId: String,
  status: { type: String, default: "active" }
});

const AdminModel = mongoose.model("Admin", adminSchema);
export default AdminModel;
