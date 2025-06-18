import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        localStorage.setItem('saved data user', JSON.stringify(userData))
        console.log('login successfully', userData);
        setEmail('')
        setPassword('')

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" email"
                        required
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none"
                    />

                    <label htmlFor="password" className="block mb-1 text-sm font-medium">
                        Password:
                    </label>
                    <div className="relative mb-4">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" password"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none"
                        />
                        <FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer transition"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                        Forget password?
                    </a>
                </div>
            </div>
        </div>
    );
}
