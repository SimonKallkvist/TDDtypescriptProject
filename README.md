# TDD TypeScript Project

## Setup

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Run the following commands:
   ```bash
   npm install
   npx json-server products.json -p 7008
   npm run dev
   ```
   This will start up the backend portion of the project.

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Start the live portion by running:

   ```bash
   npm run dev
   ```

3. Open another terminal, navigate back to the `frontend` folder, and run:
   ```bash
   npm run test
   ```
   This will execute the tests for the project.
