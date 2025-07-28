# 🚀 Postman API Testing Guide for  BPSI API

## 📋 Prerequisites

1. **Install Postman** - Download from [postman.com](https://www.postman.com/downloads/)
2. **Start the  BPSI API Server** - Run `npm run dev` in your project directory
3. **MongoDB** - Ensure MongoDB is running locally or update the connection string

## 🔧 Setup Instructions

### Step 1: Import the Collection
1. Open Postman
2. Click **Import** button
3. Select the ` BPSI_API_Postman_Collection.json` file
4. The collection will be imported with all pre-configured requests

### Step 2: Configure Environment Variables
1. In Postman, click on the **Environment** dropdown (top right)
2. Click **Add** to create a new environment
3. Add these variables:
   - `base_url`: `http://localhost:3002/api`
   - `staff_user_id`: (will be set automatically after registration)
   - `student_user_id`: (will be set automatically after registration)

## 🧪 Testing Workflow

### **Phase 1: Authentication Testing**

#### 1. Register Staff User
- **Request**: `POST {{base_url}}/auth/register`
- **Body**:
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
- **Expected Response**: 201 Created
- **Action**: Copy the `_id` from response and set it as `staff_user_id` environment variable

#### 2. Register Student User
- **Request**: `POST {{base_url}}/auth/register`
- **Body**:
```json
{
  "email": "student@ BPSI.com",
  "password": "password123",
  "name": "Jane Student",
  "role": "student",
  "studentId": "STU001",
  "grade": "10",
  "section": "A"
}
```
- **Expected Response**: 201 Created
- **Action**: Copy the `_id` from response and set it as `student_user_id` environment variable

#### 3. Login Staff
- **Request**: `POST {{base_url}}/auth/login`
- **Body**:
```json
{
  "email": "staff@ BPSI.com",
  "password": "password123"
}
```
- **Expected Response**: 200 OK with user data

#### 4. Login Student
- **Request**: `POST {{base_url}}/auth/login`
- **Body**:
```json
{
  "email": "student@ BPSI.com",
  "password": "password123"
}
```
- **Expected Response**: 200 OK with user data

### **Phase 2: Session Management Testing**

#### 5. Staff Start Session
- **Request**: `POST {{base_url}}/staff/start`
- **Body**:
```json
{
  "userId": "{{staff_user_id}}"
}
```
- **Expected Response**: 200 OK with staff session data

#### 6. Student Start Session
- **Request**: `POST {{base_url}}/student/start`
- **Body**:
```json
{
  "userId": "{{student_user_id}}"
}
```
- **Expected Response**: 200 OK with student session data

### **Phase 3: Error Testing**

#### 7. Test Invalid Registration
- **Request**: `POST {{base_url}}/auth/register`
- **Body**:
```json
{
  "email": "test@example.com",
  "name": "Test User"
}
```
- **Expected Response**: 400 Bad Request (missing required fields)

#### 8. Test Invalid Login
- **Request**: `POST {{base_url}}/auth/login`
- **Body**:
```json
{
  "email": "wrong@email.com",
  "password": "wrongpassword"
}
```
- **Expected Response**: 401 Unauthorized

#### 9. Test Invalid Session Start
- **Request**: `POST {{base_url}}/staff/start`
- **Body**:
```json
{
  "userId": "invalid_user_id"
}
```
- **Expected Response**: 404 Not Found

## 📊 Response Validation

### Success Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "name": "User Name",
    "role": "staff|student",
    // ... other fields
  }
}
```

### Error Response Format
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔍 Testing Tips

### 1. **Automated Testing with Tests Tab**
Add this JavaScript in the **Tests** tab for automatic validation:

```javascript
// For successful responses
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has success field", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('success');
});

pm.test("Success is true", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(true);
});

// For registration - save user ID
if (pm.response.json().user && pm.response.json().user._id) {
    pm.environment.set("staff_user_id", pm.response.json().user._id);
}
```

### 2. **Pre-request Scripts**
Add this to automatically set headers:

```javascript
pm.request.headers.add({
    key: 'Content-Type',
    value: 'application/json'
});
```

### 3. **Environment Variables**
Use these in your requests:
- `{{base_url}}` - Base API URL
- `{{staff_user_id}}` - Staff user ID (set after registration)
- `{{student_user_id}}` - Student user ID (set after registration)

## 🚨 Common Issues & Solutions

### Issue 1: Connection Refused
- **Solution**: Ensure the API server is running (`npm run dev`)
- **Check**: Server should be on `http://localhost:3002`

### Issue 2: MongoDB Connection Error
- **Solution**: Start MongoDB service
- **Alternative**: Update `MONGODB_URI` in `.env.local`

### Issue 3: CORS Errors
- **Solution**: The API is configured to handle CORS automatically
- **Check**: Ensure you're using the correct port (3002)

### Issue 4: Validation Errors
- **Solution**: Check request body format and required fields
- **Common**: Ensure `email`, `password`, `name`, and `role` are provided

## 📈 Performance Testing

### Load Testing with Postman
1. **Collection Runner**: Run multiple requests in sequence
2. **Newman CLI**: Run collections from command line
3. **Monitor**: Check response times and success rates

### Example Newman Command
```bash
newman run  BPSI_API_Postman_Collection.json -e environment.json
```

## 🎯 Best Practices

1. **Test Order**: Always test registration before login
2. **Data Cleanup**: Use different email addresses for each test run
3. **Validation**: Check both success and error scenarios
4. **Documentation**: Keep notes of any issues found
5. **Environment**: Use separate environments for dev/staging/prod

## 📝 Test Report Template

After testing, document your results:

| Endpoint | Status | Response Time | Notes |
|----------|--------|---------------|-------|
| Register Staff | ✅ Pass | 150ms | User created successfully |
| Register Student | ✅ Pass | 120ms | User created successfully |
| Login Staff | ✅ Pass | 80ms | Authentication working |
| Login Student | ✅ Pass | 90ms | Authentication working |
| Staff Start | ✅ Pass | 100ms | Session started |
| Student Start | ✅ Pass | 95ms | Session started |

---

**Happy Testing! 🎉** 