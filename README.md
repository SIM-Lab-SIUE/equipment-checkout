# SIUE Mass Communications Equipment Checkout

This repository contains the source code for the web application used to manage and reserve equipment for the Mass Communications department at Southern Illinois University Edwardsville.

## Project Overview

This project uses a hybrid open-source model, combining a powerful backend asset management system with a custom-built frontend for the student reservation experience.

- **Backend (Snipe-IT):** A robust, open-source IT asset management system used by staff to manage all equipment, users, and checkout history.
- **Frontend (Next.js):** A custom, modern web application that students use to browse equipment, make reservations based on a block schedule, and manage their accounts.

## Project Structure

```
/
├── backend/
│   └── docker-compose.yml  (For running a local Snipe-IT instance)
│
└── frontend/
    ├── src/                (Next.js application source code)
    ├── package.json        (Frontend dependencies)
    └── ...                 (Other Next.js files)

```

## Getting Started: Local Development

### Prerequisites

- Git
- Node.js (v18 or later)
- Docker and Docker Compose

### 1. Backend Setup (Snipe-IT via Docker)

The backend runs in Docker containers. This is the easiest way to get a fully functional Snipe-IT instance running locally.

1. Navigate to the `backend` directory:
    
    ```
    cd backend
    
    ```
    
2. Start the Docker containers:
    
    ```
    docker-compose up -d
    
    ```
    
3. Snipe-IT will be available at `http://localhost:8080`. The first run may take a few minutes to initialize the database.

### 2. Frontend Setup

1. Navigate to the `frontend` directory:
    
    ```
    cd ../frontend
    
    ```
    
2. Install the necessary dependencies:
    
    ```
    npm install
    
    ```
    
3. Run the development server:
    
    ```
    npm run dev
    
    ```
    
4. The student-facing application will be available at `http://localhost:3000`.

## Technology Stack

Please refer to the [Technology Stack Overview](https://www.google.com/search?q=tech_stack.md) document for a detailed breakdown of the technologies used in this project.