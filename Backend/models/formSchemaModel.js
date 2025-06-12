import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
  label: String,
  name: String,
  type: {
    type: String,
    enum: ['text', 'email', 'number', 'select', 'checkbox'],
    default: 'text',
  },
  options: [String],
  required: Boolean,
  active: Boolean,
});

const sectionSchema = new mongoose.Schema({
  section: String,
  fields: [fieldSchema],
});

export default mongoose.model('FormSchema', sectionSchema);
