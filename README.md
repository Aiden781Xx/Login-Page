#  BPSI LOGIN API FOR STAFF AND STUDENT - BACKEND 

A Next.js API project with MongoDB integration for  BPSI (Business Process System Integration).

## Features

- Next.js API routes
- TypeScript support
- MongoDB integration
- Staff and Student management endpoints

## Project Structure

```
src/
├── pages/
│   └── api/
│       ├── staff/
│       │   └── start.ts
│       └── student/
│           └── start.ts
├── types/
│   └── users.ts
└── lib/
    ├── mongo.ts
    └── db.ts
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file with:
   ```
   MONGODB_URI=mongodb://localhost:27017/ BPSI
   NODE_ENV=development
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

- `POST /api/staff/start` - Staff start endpoint
- `POST /api/student/start` - Student start endpoint

## Technologies Used

- Next.js 14
- TypeScript
- MongoDB
- Mongoose 
