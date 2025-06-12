import FormSchema from '../models/formSchemaModel.js';

// GET schema
export const getSchema = async (req, res) => {
  try {
    const schema = await FormSchema.find();
    res.json(schema);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch form schema' });
  }
};

// POST add field
export const addField = async (req, res) => {
  const { section, field } = req.body;

  try {
    let sectionDoc = await FormSchema.findOne({ section });

    if (!sectionDoc) {
      sectionDoc = new FormSchema({ section, fields: [field] });
    } else {
      sectionDoc.fields.push(field);
    }

    await sectionDoc.save();
    res.status(200).json({ message: 'Field added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add field' });
  }
};

// DELETE field
export const deleteField = async (req, res) => {
  const { section, fieldName } = req.body;

  try {
    const sectionDoc = await FormSchema.findOne({ section });
    if (!sectionDoc) return res.status(404).json({ message: 'Section not found' });

    sectionDoc.fields = sectionDoc.fields.filter(f => f.name !== fieldName);
    await sectionDoc.save();
    res.status(200).json({ message: 'Field deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete field' });
  }
};
