import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const result = await login(email, password);
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
        <title>Login -  BPSI</title>
        <meta name="description" content="Login to  BPSI Management System" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-orange-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform hover:rotate-12 transition-all duration-500">
              <span className="text-white font-bold text-3xl">B</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Welcome Back
            </h2>
            <p className="text-pink-200 text-lg font-medium">
              Sign in to your  BPSI account
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-white mb-3">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-6 py-4 border-2 border-pink-500/30 rounded-2xl bg-white/10 text-white placeholder-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-300 text-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-bold text-white mb-3">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-6 py-4 border-2 border-purple-500/30 rounded-2xl bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-lg"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-2xl shadow-2xl text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin -ml-1 mr-3 h-6 w-6 text-white border-3 border-white border-t-transparent rounded-full"></div>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>

              <div className="text-center">
                <p className="text-pink-200 text-lg">
                  Don&apos;t have an account?{' '}
                  <Link href="/auth/signup" className="font-bold text-pink-300 hover:text-white transition-colors duration-300 underline">
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <Link href="/" className="text-pink-200 hover:text-white text-lg transition-colors duration-300 font-medium">
                  ← Back to home
                </Link>
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