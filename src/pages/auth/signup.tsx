import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'staff' as 'staff' | 'student',
    department: '',
    position: '',
    studentId: '',
    grade: '',
    section: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!formData.email || !formData.password || !formData.name) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    // Role-specific validation
    if (formData.role === 'staff' && (!formData.department || !formData.position)) {
      setError('Please fill in department and position for staff');
      setIsLoading(false);
      return;
    }

    if (formData.role === 'student' && (!formData.studentId || !formData.grade || !formData.section)) {
      setError('Please fill in student ID, grade, and section for student');
      setIsLoading(false);
      return;
    }

    try {
      const signupData = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        role: formData.role,
        ...(formData.role === 'staff' && {
          department: formData.department,
          position: formData.position
        }),
        ...(formData.role === 'student' && {
          studentId: formData.studentId,
          grade: formData.grade,
          section: formData.section
        })
      };

      const result = await signup(signupData);
      if (result.success) {
        router.push('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up -  BPSI</title>
        <meta name="description" content="Create a new account in  BPSI Management System" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-orange-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform hover:rotate-12 transition-all duration-500">
              <span className="text-white font-bold text-3xl">B</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Create Your Account
            </h2>
            <p className="text-pink-200 text-lg font-medium">
              Join  BPSI and transform your educational experience
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-white mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full px-6 py-4 border-2 border-pink-500/30 rounded-2xl bg-white/10 text-white placeholder-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-300 text-lg"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-white mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full px-6 py-4 border-2 border-purple-500/30 rounded-2xl bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-lg"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-lg font-bold text-white mb-3">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="block w-full px-6 py-4 border-2 border-indigo-500/30 rounded-2xl bg-white/10 text-white placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-300 text-lg"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-lg font-bold text-white mb-3">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    className="block w-full px-6 py-4 border-2 border-cyan-500/30 rounded-2xl bg-white/10 text-white placeholder-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300 text-lg"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label htmlFor="role" className="block text-lg font-bold text-white mb-3">
                  Role *
                </label>
                <select
                  name="role"
                  id="role"
                  required
                  className="block w-full px-6 py-4 border-2 border-pink-500/30 rounded-2xl bg-white/10 text-white focus:outline-none focus:ring-4 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-300 text-lg"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="staff">Staff</option>
                  <option value="student">Student</option>
                </select>
              </div>

              {/* Staff-specific fields */}
              {formData.role === 'staff' && (
                <div className="bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-indigo-500/30 backdrop-blur-xl p-8 rounded-3xl border-2 border-pink-500/40 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Staff Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="department" className="block text-lg font-bold text-white mb-3">
                        Department *
                      </label>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        required
                        className="block w-full px-6 py-4 border-2 border-pink-500/40 rounded-2xl bg-white/10 text-white placeholder-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-300 text-lg"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="e.g., Computer Science, Mathematics"
                      />
                    </div>

                    <div>
                      <label htmlFor="position" className="block text-lg font-bold text-white mb-3">
                        Position *
                      </label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        required
                        className="block w-full px-6 py-4 border-2 border-purple-500/40 rounded-2xl bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-lg"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="e.g., Professor, Assistant, Coordinator"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Student-specific fields */}
              {formData.role === 'student' && (
                <div className="bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-cyan-500/30 backdrop-blur-xl p-8 rounded-3xl border-2 border-emerald-500/40 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Student Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <label htmlFor="studentId" className="block text-lg font-bold text-white mb-3">
                        Student ID *
                      </label>
                      <input
                        type="text"
                        name="studentId"
                        id="studentId"
                        required
                        className="block w-full px-6 py-4 border-2 border-emerald-500/40 rounded-2xl bg-white/10 text-white placeholder-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 text-lg"
                        value={formData.studentId}
                        onChange={handleChange}
                        placeholder="e.g., STU2024001"
                      />
                    </div>

                    <div>
                      <label htmlFor="grade" className="block text-lg font-bold text-white mb-3">
                        Grade *
                      </label>
                      <input
                        type="text"
                        name="grade"
                        id="grade"
                        required
                        className="block w-full px-6 py-4 border-2 border-teal-500/40 rounded-2xl bg-white/10 text-white placeholder-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:border-teal-400 transition-all duration-300 text-lg"
                        value={formData.grade}
                        onChange={handleChange}
                        placeholder="e.g., 10th, 11th, 12th"
                      />
                    </div>

                    <div>
                      <label htmlFor="section" className="block text-lg font-bold text-white mb-3">
                        Section *
                      </label>
                      <input
                        type="text"
                        name="section"
                        id="section"
                        required
                        className="block w-full px-6 py-4 border-2 border-cyan-500/40 rounded-2xl bg-white/10 text-white placeholder-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300 text-lg"
                        value={formData.section}
                        onChange={handleChange}
                        placeholder="e.g., A, B, C"
                      />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/30 p-4 backdrop-blur-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="text-red-400 text-2xl font-bold">×</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold text-red-200">{error}</h3>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <Link href="/" className="text-pink-200 hover:text-white text-lg transition-colors duration-300 font-medium">
                  ← Back to home
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex justify-center py-4 px-8 border border-transparent rounded-2xl shadow-2xl text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 transform hover:scale-105"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin -ml-1 mr-3 h-6 w-6 text-white border-3 border-white border-t-transparent rounded-full"></div>
                      Creating account...
                    </>
                  ) : (
                    'Create account'
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-pink-200 text-lg">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="font-bold text-pink-300 hover:text-white transition-colors duration-300 underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
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
      </div>
    </>
  );
} 