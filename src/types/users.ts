export interface User {
  _id?: string;
  email: string;
  password: string;
  role: 'staff' | 'student';
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Staff extends User {
  role: 'staff';
  department?: string;
  position?: string;
}

export interface Student extends User {
  role: 'student';
  studentId: string;
  grade?: string;
  section?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  token?: string;
  message: string;
}
  