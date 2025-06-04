# NEXT Study Hub

A comprehensive study platform for NEXT exam preparation.

## Project Structure

```
STED-FY/
├── src/
│   ├── components/
│   │   ├── layout/           # Layout components (Navbar, Footer)
│   │   ├── common/           # Reusable components
│   │   └── features/         # Feature-specific components
│   ├── pages/                # Page components
│   │   ├── auth/            # Authentication pages
│   │   ├── subjects/        # Subject-related pages
│   │   ├── exams/          # Exam-related pages
│   │   ├── articles/       # Notes and articles
│   │   ├── tips/           # Tips & tricks
│   │   └── community/      # Community features
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── styles/              # CSS and style files
│   ├── assets/             
│   │   ├── images/         # Image assets
│   │   └── icons/          # Icon assets
│   ├── config/             # Configuration files
│   └── firebase/           # Firebase setup and utilities
├── public/                 # Static files
└── docs/                   # Documentation
```

## Large File Handling

This project uses Firebase Storage for handling large files. The setup includes:

1. Firebase Storage configuration in `src/firebase/config.js`
2. File upload utilities in `src/firebase/storage.js`
3. Progress tracking for large file uploads
4. Automatic error handling and retry mechanisms

### Setting Up Firebase Storage

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firebase Storage in your project
3. Create a `.env` file with your Firebase credentials:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Contributing

1. Follow the folder structure
2. Use appropriate components directory based on component type
3. Implement proper error handling
4. Add documentation for new features 