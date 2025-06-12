// utils/initSuperAdmin.js
import SuperAdminModel from "../models/superAdminModel.js";
import bcrypt from "bcryptjs";

const initSuperAdmin = async () => {
  try {
    const existing = await SuperAdminModel.findOne({});
    if (!existing) {
      const hashedPassword = await bcrypt.hash(process.env.SUPERADMIN_PASSWORD, 10);
      await SuperAdminModel.create({
        email: process.env.SUPERADMIN_EMAIL,
        password: hashedPassword,
      });
      console.log("✅ Super Admin initialized in DB");
    } else {
      console.log("ℹ️ Super Admin already exists");
    }
  } catch (error) {
    console.error("❌ Error initializing Super Admin:", error);
  }
};

export default initSuperAdmin;
