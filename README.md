# DocBox - Medical Tools Management System

A full-stack medical equipment management system designed for hospitals to efficiently track, manage, and maintain their medical tools inventory.



## Key Features

* **Analytics Dashboard:** Visual charts for inventory levels, usage patterns, and tool conditions.
* **Inventory Management:** Comprehensive tracking of all tools with status monitoring and a visual catalog.
* **Maintenance & Lifecycle Tracking:** Proactive maintenance alerts, warranty tracking, and procurement request management.
* **Role-Based Access Control:** Secure authentication system ensuring users only access relevant data.
* **Efficient Search & Filtering:** Quickly find and manage assets with a powerful search functionality.

## Technologies Used

* **Frontend:** React.js, Bootstrap, Chart.js 
* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Authentication:** JSON Web Tokens (JWT)
* **Version Control:** Git & GitHub

## Setup and Installation

To run this project locally, follow these steps:

1.  Clone the repository:
    `git clone https://github.com/bakrhelmy/docbox-medical-management-system.git`
2.  Navigate to the project directory:
    `cd docbox-medical-management-system`

3.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    # Create a .env file and add your database connection string and JWT_SECRET
    npm start
    ```

4.  **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    npm start
    ```
