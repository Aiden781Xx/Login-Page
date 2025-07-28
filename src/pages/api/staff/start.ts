// src/pages/api/staff/start.ts

import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/mongo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ 
        success: false, 
        message: 'User ID is required' 
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

    // Find user and verify role
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    if (user.role !== 'staff') {
      return res.status(403).json({ 
        success: false, 
        message: 'Access denied. Staff role required.' 
      });
    }

    res.status(200).json({
      success: true,
      message: 'Staff session started successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        position: user.position
      }
    });

  } catch (error) {
    console.error('Staff start error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
}
