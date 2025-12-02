"use client"
import Link from "next/link"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F4C3A] via-[#167F62] to-[#E9E5D6]">
      <div className="flex w-[900px] h-[550px] rounded-2xl overflow-hidden shadow-2xl bg-[#F8F6F1]">
        
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
            <p className="text-lg font-medium">Empowering Education, Virtually</p>
            <p className="text-sm text-gray-200 mt-2">
              Connecting students, tutors, and parents worldwide.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-[#F8F6F1]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Log in to continue your learning journey
          </p>

          <form className="grid gap-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#167F62]"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link href="/forgot" className="text-sm text-[#167F62] hover:text-[#0F4C3A] underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#167F62] text-white py-2 rounded-md hover:bg-[#0F4C3A] transition"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500 mx-2">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

         
         

          <p className="text-sm text-gray-600 text-center mt-6">
            No account?{" "}
            <Link href="/signup" className="underline text-[#167F62] hover:text-[#0F4C3A]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
