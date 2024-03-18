# CRUD App with React and Firestore

This project is a CRUD (Create, Read, Update, Delete) application built with React and integrated with Firestore for real-time database interactions. It features user authentication, allowing users to sign in with Google, and supports image uploads to Firestore Storage.

## Features

- User authentication with Google Sign-In.
- Create, read, update, and delete operations for designs.
- Image uploads associated with specific designs.
- Real-time updates from Firestore.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed.
- A Firebase project set up with Firestore and Storage.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kashyrskyy/ate-test-app.git
2. Install NPM packages:
    cd ate-test-app
    npm install
3. Set up your Firebase configuration:
    Rename .env.example to .env.
    Fill in your Firebase project credentials in .env.

### Running the App
1. Start the development server:
    npm start
2. Open http://localhost:3000 to view the app in the browser.

### Deployment
The app is deployed using GitHub Pages:

- Deployment URL: https://kashyrskyy.github.io/ate-test-app/

To deploy your own version, run:
    npm run deploy

### Contributing
Contributions are welcome! If you have a feature request or bug report, please open an issue on GitHub.

### License
This project is open source and available under the [License].

### Acknowledgments
- Firebase for authentication and real-time database services.
- React community for the powerful library and resources.
- SweetAlert2 for beautiful alert messages.