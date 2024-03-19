# ATE MICR Laboratory Notebook

This is a CRUD (Create, Read, Update, Delete) web application for managing laboratory notebooks, designed for the MICR course. It features user authentication with Google Sign-In, and allows users to create, edit, and view their design projects in real-time, integrated with Firestore.

## Features

- User authentication with Google Sign-In
- Create, read, update, and delete operations for designs
- Image uploads associated with specific designs
- Real-time updates from Firestore

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kashyrskyy/ate-micr.git
2. Navigate to the project directory:
    ```bash
    cd ate-micr
3. Install dependencies:
    npm install
4. Start the development server:
    npm run dev
The app should now be running on http://localhost:3000.

## Deployment

The application is deployed on GitHub Pages and can be accessed at https://kashyrskyy.github.io/ate-micr/.

## Built With

React - The web framework used
Vite - Frontend Tooling
Firestore - Database used for real-time updates
Firebase Storage - For image uploads
SweetAlert2 - For beautiful alert messages

## Authors

Andriy Kashyrskyy

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
