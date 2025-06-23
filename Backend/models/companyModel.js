import mongoose from 'mongoose';
const customFieldSchema = new mongoose.Schema({
  fieldName: { type: String,  }, // Display name
   fieldValue: { type: String,  },  // Key used in forms/backend
  value: { type: mongoose.Schema.Types.Mixed }, // Can store any type
  type: {
    type: String,
    enum: ['text', 'email', 'number', 'select', 'checkbox'],

  },
  required: { type: Boolean, default: false }
}, { _id: false });

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  registrationNumber: {
    type: String,
    trim: true,
  },

  website: {
    type: String,
    trim: true,
  },

  contactDetails: {
    phone: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    }
  },

  taxInfo: {
    gstNumber: {
      type: String,
      trim: true,
    },
    panNumber: {
      type: String,
      trim: true,
    },
    tanNumber: {
      type: String,
      trim: true,
    },
  },

  bankDetails: {
    bankName: String,
    accountNumber: String,
    ifscCode: String,
    accountHolderName: String,
  },

  hrDetails: {
    name: String,
    email: String,
    phone: String,
    designation: String,
  },

   customFields: [customFieldSchema],

  approvalConfig: {
    type: Map,
    of: String,
    default: {},
  },

  removedStaticFields: {
    type: [String],
    default: [],
  },

  nonRequiredFields: {
    type: [String],
    default: [],
  },

  companyId: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  adminAccessCode: {
    type: String,
    unique: true,
    required: true,
    sparse: true,
    trim: true,
  },

  status: {
    type: String,
    enum: ['approved', 'inactive', 'pending'],
    default: 'approved',
  },

  registrationDate: {
    type: Date,
    default: Date.now,
  },
  permissions: {
  type: [String], 
  default: [],
}
});

const Company = mongoose.model('Company', companySchema);
export default Company;
