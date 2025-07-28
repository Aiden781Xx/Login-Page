import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/mongo';
import { User, Staff, Student } from '@/types/users';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, name, role, ...additionalData } = req.body;

    // Validate required fields
    if (!email || !password || !name || !role) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email, password, name, and role are required' 
      });
    }

    // Validate role
    if (!['staff', 'student'].includes(role)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Role must be either "staff" or "student"' 
      });
    }

    // Connect to database
    await connectDB();
    const mongoose = (await import('mongoose')).default;

    // Create user schema if it doesn't exist
    const userSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: { type: String, required: true },
      role: { type: String, enum: ['staff', 'student'], required: true },
      department: String,
      position: String,
      studentId: String,
      grade: String,
      section: String,
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
    });

    const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'User with this email already exists' 
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user data
    const userData: any = {
      email,
      password: hashedPassword,
      name,
      role,
      ...additionalData
    };

    // Create new user
    const newUser = new UserModel(userData);
    await newUser.save();

    // Remove password from response
    const userResponse = {
      _id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      department: newUser.department,
      position: newUser.position,
      studentId: newUser.studentId,
      grade: newUser.grade,
      section: newUser.section,
      createdAt: newUser.createdAt
    };

    res.status(201).json({
      success: true,
      message: `${role} registered successfully`,
      user: userResponse
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
} 