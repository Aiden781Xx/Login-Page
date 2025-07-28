const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3002/api';

// Test data
const testStaff = {
  email: 'staff@ BPSI.com',
  password: 'password123',
  name: 'John Staff',
  role: 'staff',
  department: 'IT',
  position: 'Teacher'
};

const testStudent = {
  email: 'student@ BPSI.com',
  password: 'password123',
  name: 'Jane Student',
  role: 'student',
  studentId: 'STU001',
  grade: '10',
  section: 'A'
};

async function testAPI() {
  console.log('🚀 Starting  BPSI API Tests...\n');

  try {
    // 1️⃣ Register Staff
    console.log('1️⃣ Registering Staff...');
    const staffRegResponse = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testStaff)
    });
    const staffRegData = await staffRegResponse.json();
    console.log('Staff Registration:', staffRegData);
    console.log('Status:', staffRegResponse.status, '\n');

    // 2️⃣ Register Student
    console.log('2️⃣ Registering Student...');
    const studentRegResponse = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testStudent)
    });
    const studentRegData = await studentRegResponse.json();
    console.log('Student Registration:', studentRegData);
    console.log('Status:', studentRegResponse.status, '\n');

    // 3️⃣ Login Staff
    console.log('3️⃣ Logging in Staff...');
    const staffLoginResponse = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testStaff.email, password: testStaff.password })
    });
    const staffLoginData = await staffLoginResponse.json();
    console.log('Staff Login:', staffLoginData);
    console.log('Status:', staffLoginResponse.status, '\n');

    // 4️⃣ Login Student
    console.log('4️⃣ Logging in Student...');
    const studentLoginResponse = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testStudent.email, password: testStudent.password })
    });
    const studentLoginData = await studentLoginResponse.json();
    console.log('Student Login:', studentLoginData);
    console.log('Status:', studentLoginResponse.status, '\n');

    // 5️⃣ Staff Start Session
    if (staffLoginData?.user?._id) {
      console.log('5️⃣ Starting Staff Session...');
      const staffStartResponse = await fetch(`${BASE_URL}/staff/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: staffLoginData.user._id })
      });
      const staffStartData = await staffStartResponse.json();
      console.log('Staff Start Session:', staffStartData);
      console.log('Status:', staffStartResponse.status, '\n');
    } else {
      console.warn('⚠️ Staff login failed — skipping staff start test\n');
    }

    // 6️⃣ Student Start Session
    if (studentLoginData?.user?._id) {
      console.log('6️⃣ Starting Student Session...');
      const studentStartResponse = await fetch(`${BASE_URL}/student/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: studentLoginData.user._id })
      });
      const studentStartData = await studentStartResponse.json();
      console.log('Student Start Session:', studentStartData);
      console.log('Status:', studentStartResponse.status, '\n');
    } else {
      console.warn('⚠️ Student login failed — skipping student start test\n');
    }

    console.log('✅ API Testing Complete!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Optional delay before running test if server takes time to boot
setTimeout(() => {
  testAPI();
}, 1500); // delay by 1.5 seconds
