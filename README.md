# Employee Management System (Employee MS)

## Overview
The Employee Management System (Employee MS) is a web application designed to streamline and manage employee-related operations for an organization. This project uses the MERN stack (MongoDB, Express.js, React.js, Node.js) for its development, ensuring a robust, scalable, and user-friendly experience.

---

## Features

### **Implemented Features**
1. **Dashboard**
   - Provides a quick overview of organizational metrics.
   - Displays key data summaries such as total employees, departments, and pending tasks.

2. **Employee Management**
   - Add, view, update, and delete employee details.
   - Manage employee profiles, roles, and assignments.

3. **Department Management**
   - Create, view, and manage departments.
   - Assign employees to specific departments.

4. **Leave Management**
   - View individual employee leave records.
   - Navigate to a detailed leave application and approval section (coming soon).

5. **Salary Management**
   - Add and view employee salary records.
   - Maintain logs for past salary disbursements.

### **Upcoming Features**
1. **Admin Settings**
   - A dedicated section to manage system configurations.
   - Options to configure user roles, permissions, and global settings.

2. **Leave Application**
   - A user-friendly form for employees to submit leave requests.
   - Admin functionality for reviewing, approving, or rejecting leave applications.

---

## Technologies Used

### Frontend
- **React.js**: For building the user interface and handling dynamic state management.
- **React Router**: For seamless navigation between pages.
- **Tailwind CSS**: For responsive and modern UI design.
- **React Icons**: For intuitive and visually appealing icons.

### Backend
- **Node.js**: For server-side scripting and handling API requests.
- **Express.js**: For routing and middleware.
- **MongoDB**: As the database to store employee, department, and salary records.
- **Mongoose**: For object data modeling (ODM) in MongoDB.

### Additional Tools
- **Vite**: For faster build times and efficient development.
- **Git & GitHub**: For version control and collaborative development.

---

## Folder Structure
```plaintext
frontend/
  |-- src/
      |-- components/
          |-- dashboard/
          |-- departments/
          |-- employee/
          |-- EmployeeDashboard/
          |-- leave/
          |-- salary/
      |-- pages/
      |-- utils/
      App.jsx
server/
  |-- controllers/
  |-- db/
  |-- middleware/
  |-- models/
  |-- public/
      |-- uploads/
  |-- routes/
  .env
  index.js
  userSeed.js
```

---

## How to Run the Project

### Prerequisites
- Node.js installed on your system.
- MongoDB installed locally or have access to a MongoDB Atlas cluster.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Souvikdas040/employee-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-ms
   ```
3. Install dependencies for both backend and frontend:
   ```bash
   cd server
   npm install
   cd ../frontend
   npm install
   ```
4. Set up environment variables for backend (e.g., `PORT`, `MONGO_URI`).
5. Start the backend server:
   ```bash
   cd server
   npm start
   ```
6. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
7. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

---

## Contribution Guidelines
We welcome contributions from the community. Here’s how you can help:
1. Fork the repository and create a new branch for your feature or bug fix.
2. Commit your changes and open a pull request.
3. Ensure your code adheres to the project’s coding standards and is well-documented.

---

## Future Scope
- Implementation of **Admin Settings** for enhanced configurability.
- Development of a comprehensive **Leave Application System** with admin review capabilities.
- Integration of notifications and email alerts for critical updates.
- Advanced analytics and reporting for better decision-making.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this application.

---

## Contact
For any queries or suggestions, please contact:
- **Developer**: Souvik Das
- **Email**: [souvikdas.aec@gmail.com](mailto:souvikdas.aec@gmail.com)
- **GitHub**: [[github.com/your-username](https://github.com/Souvikdas040)
