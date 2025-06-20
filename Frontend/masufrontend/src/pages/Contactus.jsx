import React from 'react'

export default function Contactus() {
  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Contact Us</h2>

        <form className="space-y-4">

          <div>
            <label className="block mb-1 font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none "
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Official Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none "
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Topic</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none ">
              <option value="">-- Select Topic --</option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none "
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
