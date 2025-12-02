"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const roles = ["student", "teacher", "parent", "admin"]

export default function SignupPage() {
  const sp = useSearchParams()
  const [role, setRole] = useState("student")

  useEffect(() => {
    const r = sp.get("role")
    if (r && roles.includes(r)) setRole(r)
  }, [sp])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F4C3A] via-[#167F62] to-[#E9E5D6]">
      <div className="flex w-[950px] h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-[#F8F6F1]">
        
        {/* Left Panel */}
        <div className="w-1/2 relative flex flex-col justify-between p-6 bg-gradient-to-br from-[#0F4C3A] to-[#167F62] text-white">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Virtue Tech</div>
            <Link href="/" className="text-sm underline hover:text-gray-200">
              Back to website →
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <Image
              src="/virtue logo.jpg"
              alt="Virtue Tech"
              width={300}
              height={300}
              className="rounded-lg mb-6"
            />
            <p className="text-lg font-medium">Join Virtue Tech Today</p>
            <p className="text-sm text-gray-200 mt-2">
              Empowering education through innovation and technology.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-[#F8F6F1]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Select your role and complete your registration
          </p>

          <form className="grid gap-4">

            {/* Role */}
            <div>
              <label className="text-sm text-gray-600">Role</label>
              <select
                className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-600">First name</label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last name</label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                placeholder="••••••••"
              />
            </div>

            <button
              className="mt-2 w-full bg-[#167F62] text-white py-2 rounded-md hover:bg-[#0F4C3A] transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="underline text-[#167F62] hover:text-[#0F4C3A]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
