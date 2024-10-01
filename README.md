# Workflow Approval Task

This project is a **Financial Transaction Submission and Approval System** with **Role-Based Access Control (RBAC)** and **Audit Logging**. The system enables employees to submit financial transactions, and managers can approve or reject those submissions. Basic audit logs track actions like submission, approval, and rejection.

## Features

- **Role-Based Access Control (RBAC)**:
  - **Employee**: Can submit new transactions and view only their own.
  - **Manager**: Can view all submitted transactions and approve or reject pending ones.
  - **Admin** (optional stretch): Can view all transactions and audit logs, with the permissions of both employees and managers.
  
- **Transaction Submission**:
  - Employees can submit new transactions with fields for type, amount, and description.
  - Submitted transactions default to a \"Pending\" status.

- **Approval Workflow**:
  - Managers can approve or reject transactions directly from a table view.

- **Audit Logs**:
  - Tracks transaction actions (submit, approve, reject) with timestamps and user details.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, TanStack Table
- **Backend**: Express.js, MongoDB
- **Authentication**: JWT (can be extended to NextAuth if using Next.js)
- **UI/UX**: Tailwind CSS, responsive design

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or using a cloud service like MongoDB Atlas

### Clone the Repository

```bash
git clone https://github.com/Yogesh131202/Workflow_Approval_task.git
cd Workflow_Approval_task
```

### Install Dependencies

#### Backend (Express.js API)

```bash
cd server
npm install
```

#### Frontend (React.js)

```bash
cd ../client
npm install
```

### Setup Environment Variables

Create a .env file in the server folder with the following:

```
MONGODB_URI=mongodb://localhost:27017/approval-workflow
JWT_SECRET=your_jwt_secret_key
```

### Run the Application

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend React app:

```bash
cd ../client
npm start
```

Now you can access the app at \`http://localhost:3000\`.

## API Endpoints

### Transaction Endpoints

- \`POST /api/transactions\`: Submit a new transaction (Employee).
- \`GET /api/transactions\`: Retrieve transactions (Employees can view their own, Managers can view all).
- \`PUT /api/transactions/:id/approve\`: Approve a transaction (Manager).
- \`PUT /api/transactions/:id/reject\`: Reject a transaction (Manager).

### Audit Logs

- \`GET /api/transactions/:id/audit-log\`: Retrieve audit logs for a specific transaction.

## Future Enhancements

- Add pagination and filters for transactions.
- Improve audit logging by including previous states and changes.
- Add Admin role to view all logs and transactions.
- Implement role-based access at a more granular level.


