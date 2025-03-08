This is a basic mini project where users can:

Register: Create a new account with a username, email, and password.
Login: Log in using their email and password (passwords are securely hashed with bcrypt).
Post Content: After logging in, users can post content.
Change Profile Picture: Users can upload a new profile picture (using multer for file uploads).
Like Posts: Users can like/unlike posts.
Logout: Users can log out, which will clear their session.

Technologies Used
Node.js: Backend framework.
Express: For handling routes and HTTP requests.
MongoDB: Database for storing user info and posts.
Multer: Middleware for handling file uploads (profile pictures).
Bcrypt: For password hashing and secure comparison.
JWT (JsonWebToken): For managing user sessions with tokens.
EJS: Template engine for rendering HTML views.

Features
User Registration & Login:

Passwords are hashed using bcrypt for security.
Tokens are generated using JWT for login sessions.
Post Content:

Users can create and view their posts on their profile.
Profile Picture:

Users can upload and change their profile picture using multer for handling file uploads.
Like Posts:

Users can like or unlike posts.
Session Management:

User sessions are maintained using JWT tokens. Logged-in users can access protected routes.
