import React from 'react';
import { useState } from 'react';
import { FaEye, FaCheckCircle } from 'react-icons/fa';

export default function LoginSuperAdmin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const handledata = (e) => {
        e.preventDefault()
        const datauser = {
            email: email,
            password: password
        }
        localStorage.setItem('superadminsuccess', JSON.stringify(datauser))
        setSuccess(true)
        console.log('superadmin Succesfully', datauser)
        setEmail('')
        setPassword('')
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                {
                    success && <div className="flex items-center gap-2 mb-4 text-green-600 bg-green-100 p-3 rounded">
                        <FaCheckCircle className="text-xl" />
                        <span>Successfully logged in!</span>
                    </div>
                }
                <form onSubmit={handledata}>
                    <label htmlFor="email" className="block mb-1 text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none"
                    />

                    <label htmlFor="password" className="block mb-1 text-gray-700">Password:</label>
                    <div className="relative mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        />
                        <FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <a href="f.html" className="text-blue-600 hover:underline">Forget password?</a>
                </div>
            </div>
        </div >
    );
}

