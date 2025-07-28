import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-orange-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <div className="animate-spin h-10 w-10 text-white border-4 border-white border-t-transparent rounded-full"></div>
          </div>
          <p className="text-white text-xl font-bold">Loading your dashboard...</p>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Head>
        <title>Dashboard -  BPSI</title>
        <meta name="description" content=" BPSI Management System Dashboard" />
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
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"> BPSI</h1>
                    <p className="text-pink-200 text-sm font-medium">Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">
                  Welcome, <span className="font-bold text-pink-300">{user?.name}</span>
                </span>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-red-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-3xl">
                      {user?.role === 'staff' ? 'S' : 'S'}
                    </span>
                  </div>
                </div>
                <div className="ml-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {user?.role === 'staff' ? 'Staff Dashboard' : 'Student Dashboard'}
                  </h2>
                  <p className="text-pink-200 text-lg font-medium">
                    Manage your {user?.role === 'staff' ? 'department and students' : 'academic progress'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Role-specific Content */}
          {user?.role === 'staff' ? (
            <StaffDashboard user={user} formatDate={formatDate} />
          ) : (
            <StudentDashboard user={user} formatDate={formatDate} />
          )}
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </div>
    </>
  );
}

// Staff Dashboard Component
function StaffDashboard({ user, formatDate }: { user: any; formatDate: (date: string) => string }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* User Information Card */}
      <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-8">
          Staff Information
        </h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center py-4 border-b border-pink-500/20">
            <span className="text-pink-200 font-bold text-lg">ID:</span>
            <span className="text-white font-mono text-sm bg-white/10 px-3 py-2 rounded-xl border border-pink-500/30">{user._id}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-pink-500/20">
            <span className="text-pink-200 font-bold text-lg">Email:</span>
            <span className="text-white text-lg">{user.email}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-pink-500/20">
            <span className="text-pink-200 font-bold text-lg">Name:</span>
            <span className="text-white font-bold text-xl">{user.name}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-pink-500/20">
            <span className="text-pink-200 font-bold text-lg">Role:</span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white border border-pink-400/50">
              {user.role}
            </span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-pink-500/20">
            <span className="text-pink-200 font-bold text-lg">Department:</span>
            <span className="text-white text-lg">{user.department}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-pink-500/20">
            <span className="text-pink-200 font-bold text-lg">Position:</span>
            <span className="text-white text-lg">{user.position}</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="text-pink-200 font-bold text-lg">Created At:</span>
            <span className="text-white text-lg">{formatDate(user.createdAt)}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions Card */}
      <div className="bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-8">
          Quick Actions
        </h3>
        <div className="space-y-6">
          <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-pink-500/25">
            Manage Students
          </button>
          <button className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-emerald-500/25">
            View Reports
          </button>
          <button className="w-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-violet-500/25">
            Schedule Classes
          </button>
          <button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-orange-500/25">
            Manage Courses
          </button>
        </div>
      </div>
    </div>
  );
}

// Student Dashboard Component
function StudentDashboard({ user, formatDate }: { user: any; formatDate: (date: string) => string }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* User Information Card */}
      <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-8">
          Student Information
        </h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">ID:</span>
            <span className="text-white font-mono text-sm bg-white/10 px-3 py-2 rounded-xl border border-emerald-500/30">{user._id}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">Email:</span>
            <span className="text-white text-lg">{user.email}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">Name:</span>
            <span className="text-white font-bold text-xl">{user.name}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">Role:</span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white border border-emerald-400/50">
              {user.role}
            </span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">Student ID:</span>
            <span className="text-white font-mono bg-white/10 px-3 py-2 rounded-xl border border-emerald-500/30">{user.studentId}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">Grade:</span>
            <span className="text-white text-lg">{user.grade}</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-emerald-500/20">
            <span className="text-emerald-200 font-bold text-lg">Section:</span>
            <span className="text-white text-lg">{user.section}</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="text-emerald-200 font-bold text-lg">Created At:</span>
            <span className="text-white text-lg">{formatDate(user.createdAt)}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions Card */}
      <div className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-8">
          Quick Actions
        </h3>
        <div className="space-y-6">
          <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-pink-500/25">
            View Grades
          </button>
          <button className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-emerald-500/25">
            Check Schedule
          </button>
          <button className="w-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-violet-500/25">
            Submit Assignment
          </button>
          <button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-orange-500/25">
            Contact Teacher
          </button>
        </div>
      </div>
    </div>
  );
} 