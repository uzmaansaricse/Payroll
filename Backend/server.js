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




dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
initSuperAdmin();
app.use('/api/formschema', formSchemaRoute);
connectDB();
app.use("/api/superadmin", superAdminRoutes);
 app.use("/api/sub-super-admin", subSuperAdminRoutes);
app.use("/api/company", companyRoutes); // ✅ Mounted company route


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


