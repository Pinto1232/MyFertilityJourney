# MyFertilityJourney: My Fertility Journey

## Project Description
MyFertilityJourney is a web application designed to manage and showcase digital assets related to My Fertility Journey. It provides a user-friendly interface for uploading, organizing, and displaying various types of digital content, including personal stories, medical documents, articles, and multimedia resources.

## Project Structure
```
|-- README.md
|-- backend
|   |-- Program.cs
|   |-- Properties
|   |   `-- launchSettings.json
|   |-- appsettings.Development.json
|   |-- appsettings.json
|   |-- backend.csproj
|   |-- backend.csproj.user
|   |-- backend.http
|-- bluegrass_Digital.sln
`-- frontend
    |-- eslint.config.js
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- public
    |   `-- vite.svg
    |-- src
    |   |-- App.css
    |   |-- App.tsx
    |   |-- assets
    |   |   `-- react.svg
    |   |-- index.css
    |   |-- main.tsx
    |   `-- vite-env.d.ts
    |-- tsconfig.app.json
    |-- tsconfig.json
    |-- tsconfig.node.json
    `-- vite.config.ts
```

## Setup Instructions

### Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/bluegrass_Digital.git
    ```
2. Navigate to the frontend directory:
    ```sh
    cd bluegrass_Digital/frontend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Running the Frontend Application
1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173`.

### Running the Backend Application
1. Navigate to the backend directory:
    ```sh
    cd ../backend
    ```
2. Run the application:
    ```sh
    dotnet run
    ```
3. Open your browser and navigate to `http://localhost:5005/weatherforecast` to access the API.

### Running Tests
To run the test suite, use the following command:
```sh
npm test
```

### Building for Production
To create a production build, use the following command:
```sh
npm run build
```

### License
This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.

### Contact
For any questions or inquiries, please contact us at [support@bluegrassdigital.com](mailto:support@bluegrassdigital.com).