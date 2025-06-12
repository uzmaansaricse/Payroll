import Company from '../models/companyModel.js';
import Admin from '../models/adminModel.js'; // ✅ Make sure this path is correct
import bcrypt from 'bcrypt';

import { generateCompanyId } from '../utils/generateCompanyId.js';
import { generatePassword } from '../utils/generatePassword.js';
import { generateAccessCode } from '../utils/generateAccessCode.js';

export const registerCompany = async (req, res) => {
  try {
    const {
      companyName,
      email,
      registrationNumber,
      website,
      contactDetails,
      taxInfo,
      bankDetails,
      hrDetails,
      customFields,
      approvalConfig,  // Include approvalConfig
      removedStaticFields, // Include removedStaticFields
      nonRequiredFields // Include nonRequiredFields
    } = req.body;

    // Check for existing email
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ message: 'A company with this email already exists.' });
    }

    // Generate unique company ID
    let companyId;
    let isUniqueId = false;
    while (!isUniqueId) {
      companyId = generateCompanyId();
      const existing = await Company.findOne({ companyId });
      if (!existing) isUniqueId = true;
    }

    // Generate unique admin access code
    let adminAccessCode;
    let isUniqueAccessCode = false;
    while (!isUniqueAccessCode) {
      adminAccessCode = generateAccessCode(); // e.g. 6-digit alphanumeric
      const existing = await Company.findOne({ adminAccessCode });
      if (!existing) isUniqueAccessCode = true;
    }

    // Generate admin credentials
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const adminEmail = `${companyName.replace(/\s+/g, '').toLowerCase()}${randomSuffix}@masu.com`;
    const adminPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Save company to DB with all fields including approvalConfig and custom fields
    const newCompany = new Company({
      companyName,
      email,
      registrationNumber,
      website,
      contactDetails,
      taxInfo,
      bankDetails,
      hrDetails,
      customFields,
      approvalConfig,  // Add approvalConfig field
      removedStaticFields,  // Add removedStaticFields field
      nonRequiredFields, // Add nonRequiredFields field
      companyId,
      adminAccessCode,
      status: 'approved',
    });

    await newCompany.save();

    // ✅ Create default Admin for this company
    const newAdmin = new Admin({
      name: hrDetails?.name || "Admin",
      email: adminEmail,
      phone: hrDetails?.phone || "N/A",
      companyId,
      accessCode: adminAccessCode,
      password: hashedPassword,
      status: 'active'
    });

    await newAdmin.save();

    res.status(201).json({
      message: 'Company registered successfully!',
      companyId,
      adminEmail,
      adminPassword,
      redirectTo: '/approvalconfig'
    });

  } catch (error) {
    res.status(500).json({ message: 'Company registration failed', error: error.message });
  }
};
