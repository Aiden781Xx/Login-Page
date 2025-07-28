import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Planet Info Solutions - Business Process System Integration</title>
        <meta name="description" content="Blue Planet Info Solutions Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-orange-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Navigation */}
        <nav className="relative bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-all duration-500">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Blue Planet Info Solutions</h1>
                    <p className="text-pink-200 text-sm font-medium">Management System</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/auth/login" 
                      className="text-white hover:text-pink-300 px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 backdrop-blur-md">
                  Login
                </Link>
                <Link href="/auth/signup" 
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-xl text-sm font-bold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-110">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-pink-500/30 mb-8 shadow-2xl">
                <span className="text-pink-300 text-lg font-bold">✨ Next-Gen Education Management ✨</span>
              </div>
            </div>
            <h1 className="text-6xl font-extrabold text-white sm:text-7xl md:text-8xl mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Blue Planet Info Solutions
              </span>
            </h1>
            <p className="mt-8 max-w-4xl mx-auto text-2xl text-pink-100 leading-relaxed font-medium">
              Business Process System Integration - Transform your educational institution with our 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold"> revolutionary </span>
              management system designed for the digital age.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/signup" 
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-110">
                <span>Start Your Journey</span>
                <div className="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <span className="text-white text-sm">→</span>
                </div>
              </Link>
              <Link href="/auth/login" 
                    className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-500 shadow-2xl hover:shadow-white/25 transform hover:scale-110">
                <span>Sign In Now</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Blue Planet Info Solutions</span>?
            </h2>
            <p className="text-2xl text-pink-200 font-medium">Revolutionary features designed for modern education</p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Staff Management */}
            <div className="group bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-500">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Staff Management</h3>
              <p className="text-pink-100 leading-relaxed text-lg">Advanced staff portal with department management, position tracking, and comprehensive administrative tools.</p>
            </div>

            {/* Student Management */}
            <div className="group bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Student Portal</h3>
              <p className="text-purple-100 leading-relaxed text-lg">Comprehensive student management with grade tracking, section management, and personalized academic dashboards.</p>
            </div>

            {/* Secure Authentication */}
            <div className="group bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/25">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-indigo-500/50 transition-all duration-500">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure Access</h3>
              <p className="text-indigo-100 leading-relaxed text-lg">Enterprise-grade security with role-based authentication, encrypted data, and secure session management.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-500">100%</div>
              <div className="text-pink-200 text-xl font-semibold">Secure & Reliable</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-500">24/7</div>
              <div className="text-purple-200 text-xl font-semibold">System Availability</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-500">∞</div>
              <div className="text-indigo-200 text-xl font-semibold">Scalable Solution</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
} 