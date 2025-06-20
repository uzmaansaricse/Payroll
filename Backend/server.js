import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import connectDB from "./config/db.js";
import superAdminRoutes from "./routes/superAdminRoute.js";
// server.js (end of file ke upar)
import initSuperAdmin from "./utils/initSuperAdmin.js";
import formSchemaRoute from './routes/formSchemaRoute.js';
import companyRoutes from './routes/companyRoute.js'; // ✅ Added company route
import subSuperAdminRoutes from './routes/subSuperAdminRoute.js';

import admin from './routes/adminRoute.js'; // ✅ Added admin route


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
initSuperAdmin();
app.use('/api/formschema', formSchemaRoute);
connectDB();
app.use("/api/superadmin", superAdminRoutes);

app.use("/api/admin", admin); // ✅ Mounted super admin route


 app.use("/api/sub-super-admin", subSuperAdminRoutes);
app.use("/api/company", companyRoutes); // ✅ Mounted company route


const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server running on port ${PORT}`);
});



