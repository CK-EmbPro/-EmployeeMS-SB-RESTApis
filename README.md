# Employee Management System

This is a web-based Employee Management System built using Spring Boot for the backend and React.js for the frontend. It enables basic CRUD (Create, Read, Update, Delete) operations for employee records.

## Features

- **Employee Management**: Perform CRUD(Create, Read, Update, Delete) operations on employee records.
- **Responsive Design**: Accessible and user-friendly design suitable for desktop and mobile devices.

## Technologies Used

### Backend
- **Spring Boot & MVC-based architecture**: Framework for building Java-based enterprise applications.
- **Spring Data JPA**: Simplifies data access layer by providing a repository implementation.
- **MySQL (or any other relational database)**: Database management system for storing employee data.

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for making requests to the backend API.
- **Bootstrap 5**: React component library for designing the frontend interface.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.
- JDK (Java Development Kit) installed.
- MySQL (or any other relational database) installed and configured.

### Backend Setup
1. Clone this repository.
2. Navigate to the `ems-springboot/springboot` directory.
3. Configure the database settings in `application.properties`.
4. Run `mvn spring-boot:run` to start the backend server.

### Frontend Setup
1. Navigate to the `react/ems-frontend` directory.
2. Run `npm install` to install dependencies.
3. Update the API base URL in `src/vite.config.js` if necessary.
4. Run `npm run dev` to start the frontend development server.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
