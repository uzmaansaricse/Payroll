import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  fieldType: {
    type: String, // e.g., "text", "number", "dropdown", etc.
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  options: {
    type: [String], // For dropdown or radio buttons
    default: [],
  },
  order: {
    type: Number,
    default: 0,
  },
  section: {
    type: String,
    default: 'default',
  },
}, { timestamps: true });

const CompanyFormField = mongoose.model('CompanyFormField', fieldSchema);
export default CompanyFormField;
