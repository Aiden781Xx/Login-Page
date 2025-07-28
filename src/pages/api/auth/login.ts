import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/mongo';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Connect to database
    await connectDB();
    const mongoose = (await import('mongoose')).default;

    // Get user model
    const UserModel = mongoose.models.User;
    if (!UserModel) {
      return res.status(500).json({ 
        success: false, 
        message: 'User model not found' 
      });
    }

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Remove password from response
    const userResponse = {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      department: user.department,
      position: user.position,
      studentId: user.studentId,
      grade: user.grade,
      section: user.section,
      createdAt: user.createdAt
    };

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: userResponse
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
} 