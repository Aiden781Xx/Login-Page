# 🚀 Postman Quick Reference -  BPSI API

## 📍 Base URL
```
http://localhost:3002/api
```

## 🔐 Authentication Endpoints

### Register User
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name",
  "role": "staff|student",
  "department": "IT",           // for staff
  "position": "Teacher",        // for staff
  "studentId": "STU001",        // for student
  "grade": "10",               // for student
  "section": "A"               // for student
}
```

### Login User
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Staff Login (Specific)
```
POST /auth/staff-login
Content-Type: application/json

{
  "email": "staff@example.com",
  "password": "password123"
}
```

## 🎯 Session Management

### Start Staff Session
```
POST /staff/start
Content-Type: application/json

{
  "userId": "user_id_from_login"
}
```

### Start Student Session
```
POST /student/start
Content-Type: application/json

{
  "userId": "user_id_from_login"
}
```

## 📊 Expected Responses

### Success Response (200/201)
```json
{
  "success": true,
  "message": "Operation successful",
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "name": "User Name",
    "role": "staff|student",
    // ... additional fields
  }
}
```

### Error Response (400/401/404/409/500)
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔧 Postman Setup

### Environment Variables
- `base_url`: `http://localhost:3002/api`
- `staff_user_id`: (set after staff registration)
- `student_user_id`: (set after student registration)

### Headers
```
Content-Type: application/json
```

### Test Scripts
```javascript
// Save user ID after registration
if (pm.response.json().user && pm.response.json().user._id) {
    pm.environment.set("staff_user_id", pm.response.json().user._id);
}

// Validate success response
pm.test("Success", function () {
    pm.expect(pm.response.json().success).to.eql(true);
});
```

## 🚨 Common Status Codes
- `200` - Success
- `201` - Created (Registration)
- `400` - Bad Request (Missing fields)
- `401` - Unauthorized (Invalid credentials)
- `404` - Not Found (Invalid user ID)
- `409` - Conflict (User already exists)
- `500` - Internal Server Error

## ⚡ Quick Test Sequence
1. Register Staff → Copy `_id` → Set as `staff_user_id`
2. Register Student → Copy `_id` → Set as `student_user_id`
3. Login Staff
4. Login Student
5. Staff Start Session
6. Student Start Session

---
**Ready to test! 🎉** 