import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormManager = () => {
  const [schema, setSchema] = useState([]);
  const [newField, setNewField] = useState({
    section: '',
    label: '',
    name: '',
    type: 'text',
    options: [],
    required: false,
    active: true,
  });
  const [fieldToDelete, setFieldToDelete] = useState({
    section: '',
    fieldName: '',
  });

  // Fetch the form schema when the component mounts
  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await axios.get('/api/formschema');
        setSchema(response.data);
      } catch (error) {
        console.error('Error fetching form schema:', error);
      }
    };

    fetchSchema();
  }, []);

  // Handle adding a field to a section
  const handleAddField = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/formschema/add', {
        section: newField.section,
        field: newField,
      });

      // Clear the input fields
      setNewField({
        section: '',
        label: '',
        name: '',
        type: 'text',
        options: [],
        required: false,
        active: true,
      });

      // Refresh the schema list after adding the field
      const response = await axios.get('/api/formschema');
      setSchema(response.data);
    } catch (error) {
      console.error('Error adding field:', error);
    }
  };

  // Handle deleting a field from a section
  const handleDeleteField = async (e) => {
    e.preventDefault();

    try {
      await axios.delete('/api/formschema/delete', {
        data: {
          section: fieldToDelete.section,
          fieldName: fieldToDelete.fieldName,
        },
      });

      // Refresh the schema list after deleting the field
      const response = await axios.get('/api/formschema');
      setSchema(response.data);
    } catch (error) {
      console.error('Error deleting field:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Form Manager</h1>

      {/* Existing Sections and Fields */}
      <div>
        <h2 className="text-xl font-semibold">Existing Form Sections</h2>
        {schema.length > 0 ? (
          schema.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-bold text-lg">{section.section}</h3>
              <ul>
                {section.fields.map((field, idx) => (
                  <li key={idx} className="flex justify-between items-center mb-2">
                    <span>{field.label} ({field.name})</span>
                    <button
                      className="text-red-600"
                      onClick={() => setFieldToDelete({ section: section.section, fieldName: field.name })}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No sections found. Add new fields below.</p>
        )}
      </div>

      {/* Add New Field */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Add a New Field</h2>
        <form onSubmit={handleAddField} className="space-y-4">
          <div>
            <label className="block text-sm">Section Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={newField.section}
              onChange={(e) => setNewField({ ...newField, section: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm">Field Label</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={newField.label}
              onChange={(e) => setNewField({ ...newField, label: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm">Field Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={newField.name}
              onChange={(e) => setNewField({ ...newField, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm">Field Type</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={newField.type}
              onChange={(e) => setNewField({ ...newField, type: e.target.value })}
              required
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
              <option value="select">Select</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>

          <div>
            <label className="block text-sm">Required</label>
            <input
              type="checkbox"
              checked={newField.required}
              onChange={(e) => setNewField({ ...newField, required: e.target.checked })}
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Field</button>
        </form>
      </div>

      {/* Delete Field Form */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Delete a Field</h2>
        <form onSubmit={handleDeleteField} className="space-y-4">
          <div>
            <label className="block text-sm">Section Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={fieldToDelete.section}
              onChange={(e) => setFieldToDelete({ ...fieldToDelete, section: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm">Field Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={fieldToDelete.fieldName}
              onChange={(e) => setFieldToDelete({ ...fieldToDelete, fieldName: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="bg-red-600 text-white p-2 rounded">Delete Field</button>
        </form>
      </div>
    </div>
  );
};

export default FormManager;
