# 🔧 Postman Error Fix Guide -  BPSI API

## 🚨 **Current Errors in Your Postman:**

1. **Wrong URLs**: `http://api/` instead of `http://localhost:3002/api/`
2. **Invalid JSON**: Using JavaScript syntax instead of JSON
3. **Missing base URL configuration**

## ✅ **Step-by-Step Fix Instructions:**

### **Step 1: Import the Correct Collection**

1. **Close your current Postman collection**
2. **Import the new collection**:
   - Click **Import** in Postman
   - Select `SIMPLE_POSTMAN_TESTS.json`
   - This has the correct URLs and JSON syntax

### **Step 2: Set Up Environment Variables**

1. **Create Environment**:
   - Click the **Environment** dropdown (top right)
   - Click **Add** → Name it " BPSI API Local"
   - Add variable: `base_url` = `http://localhost:3002/api`

2. **Select Environment**:
   - Choose " BPSI API Local" from the dropdown

### **Step 3: Fix JSON Syntax Issues**

**❌ WRONG (JavaScript syntax):**
```json
const testStaff = {
  email: 'staff@ BPSI.com',
  password: 'password123',
  name: 'John Staff',
  role: 'staff',
  department: 'IT',
}
```

**✅ CORRECT (Pure JSON):**
```json
{
  "email": "staff@ BPSI.com",
  "password": "password123",
  "name": "John Staff",
  "role": "staff",
  "department": "IT",
  "position": "Teacher"
}
```

### **Step 4: Test Each Endpoint**

#### **Test 1: Register Staff**
1. Select **"1. Register Staff"** request
2. Click **Send**
3. **Expected Response**: 201 Created or 409 Conflict (if user exists)

#### **Test 2: Register Student**
1. Select **"2. Register Student"** request
2. Click **Send**
3. **Expected Response**: 201 Created or 409 Conflict (if user exists)

#### **Test 3: Login Staff**
1. Select **"3. Login Staff"** request
2. Click **Send**
3. **Expected Response**: 200 OK with user data

#### **Test 4: Login Student**
1. Select **"4. Login Student"** request
2. Click **Send**
3. **Expected Response**: 200 OK with user data

#### **Test 5: Staff Start Session**
1. Select **"5. Staff Start Session"** request
2. Click **Send**
3. **Expected Response**: 200 OK with session data

#### **Test 6: Student Start Session**
1. Select **"6. Student Start Session"** request
2. Click **Send**
3. **Expected Response**: 200 OK with session data

## 🔍 **Manual URL Testing (Alternative)**

If you prefer to test manually:

### **Register Staff**
```
URL: http://localhost:3002/api/auth/register
Method: POST
Headers: Content-Type: application/json
Body:
{
  "email": "staff@ BPSI.com",
  "password": "password123",
  "name": "John Staff",
  "role": "staff",
  "department": "IT",
  "position": "Teacher"
}
```

### **Login Staff**
```
URL: http://localhost:3002/api/auth/login
Method: POST
Headers: Content-Type: application/json
Body:
{
  "email": "staff@ BPSI.com",
  "password": "password123"
}
```

### **Staff Start Session**
```
URL: http://localhost:3002/api/staff/start
Method: POST
Headers: Content-Type: application/json
Body:
{
  "userId": "6886aaefcdebf2515007a372"
}
```

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Connection Refused"**
- **Solution**: Make sure your API server is running
- **Command**: `npm run dev` (should show port 3002)

### **Issue 2: "404 Not Found"**
- **Solution**: Check the URL - must be `http://localhost:3002/api/...`
- **Common Mistake**: Using `http://api/` instead of full URL

### **Issue 3: "Invalid JSON"**
- **Solution**: Use pure JSON syntax (no JavaScript)
- **Rule**: All property names must be in quotes

### **Issue 4: "409 Conflict"**
- **Solution**: User already exists - this is normal
- **Action**: Try login instead of register

## ✅ **Expected Success Responses**

### **Registration Success (201)**
```json
{
  "success": true,
  "message": "staff registered successfully",
  "user": {
    "_id": "user_id_here",
    "email": "staff@ BPSI.com",
    "name": "John Staff",
    "role": "staff",
    "department": "IT",
    "position": "Teacher",
    "createdAt": "2025-07-27T22:40:47.774Z"
  }
}
```

### **Login Success (200)**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "_id": "user_id_here",
    "email": "staff@ BPSI.com",
    "name": "John Staff",
    "role": "staff",
    "department": "IT",
    "position": "Teacher",
    "createdAt": "2025-07-27T22:40:47.774Z"
  }
}
```

### **Session Start Success (200)**
```json
{
  "success": true,
  "message": "Staff session started successfully",
  "user": {
    "_id": "user_id_here",
    "name": "John Staff",
    "email": "staff@ BPSI.com",
    "role": "staff",
    "department": "IT",
    "position": "Teacher"
  }
}
```

## 🎯 **Quick Test Checklist**

- [ ] Server running on port 3002
- [ ] Imported correct collection
- [ ] Set environment variables
- [ ] Test registration endpoints
- [ ] Test login endpoints
- [ ] Test session endpoints
- [ ] All responses show success: true

---

**Follow these steps and your Postman errors will be fixed! 🚀** 