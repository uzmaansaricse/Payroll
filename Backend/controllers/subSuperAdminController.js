import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {SubSuperAdmin} from "../models/subSuperAdminModal.js"

// Register Controller
export const registerSubSuperAdmin = async (req, res) => {
  try {
   
    const { name, email, phone, password, permissions } = req.body;
   

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }

    const existing = await SubSuperAdmin.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await SubSuperAdmin.create({
      name,
      email,
      phone,
      password: hashedPassword,
      permissions,
    });

    res.status(201).json({ message: "Sub Super Admin registered successfully." });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login Controller
export const loginSubSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await SubSuperAdmin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: admin._id,
      email: admin.email,
      permissions: admin.permissions,
      accountType:"subsuperadmin"
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        permissions: admin.permissions,
        accountType:"subsuperadmin"
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getlist = async (req,res) => {
  try{
        const response = await SubSuperAdmin.find();
        return res.status(200).json({
          message:"Fetched Successfully",
          data: response
        })
  }catch(error){
    res.status(500).json({
      message:"Server Error",
      error:error,
    })
  }
}
