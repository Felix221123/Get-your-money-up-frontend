# React Vite Template with Cypress, Vitest, Tailwind CSS, and Docker

This is a React template project using Vite, Vitest for unit testing, Tailwind CSS for styling, and Docker for containerization. This template aims to provide a quick start for developing React applications with modern tooling and best practices.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Vitest**: A fast unit test framework.
- **Cypress**: A fast end-to-end testing framework for testing JavaScript applications.
- **Tailwind CSS**: A utility-first CSS framework.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript.
- **Docker**: Containerization platform to run applications in isolated environments.

## Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (version 10 or higher) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (for running the application using Docker)

## Getting Started

Follow these steps to get up and running:

### 1. Clone the Repository

```sh
git clone https://github.com/Felix221123/React-Vite-Vitest-Boilerplate.git
cd React-Vite-Vitest-Boilerplate
```

### 2. Install Dependencies

Using npm:

```sh
npm install
```

Or using yarn:

```sh
yarn install
```

### 3. Start the Development Server

Using npm:

```sh
npm run dev
```

Or using yarn:

```sh
yarn dev
```

This will start the Vite development server, and you can view the application in your browser by navigating to the URL provided in the terminal output (usually `http://localhost:5173/`).

## Running the Application with Docker

You can run the React application inside a Docker container. This allows for a consistent development environment and simplifies deployment.

### Docker Setup

#### 1. Build the Docker Image

```sh
docker build -t react-vite-app .
```

This command builds a Docker image named `react-vite-app` using the `Dockerfile` in the current directory.

#### 2. Run the Docker Container

```sh
docker run -p 5173:5173 react-vite-app
```

This command runs a container from the `react-vite-app` image and maps port `5173` inside the container to port `5173` on your host machine.

Now, open your browser and navigate to `http://localhost:5173/` to view the application.

### Using Docker Compose

Alternatively, you can use Docker Compose to run the application. Docker Compose allows you to manage multi-container applications and provides a simple way to configure your application's services.

#### 1. Create a `docker-compose.yml` File

The `docker-compose.yml` file is already provided in the repository:

```yaml
version: '3'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile  # Optional if the file is named 'Dockerfile'
    ports:
      - "5173:5173"           # Map the container port to your host port
    command: npm run dev       # Command to start the application
```

#### 2. Run the Application with Docker Compose

```sh
docker-compose up
```

This command builds the image (if it hasn't been built already) and starts the container as defined in the `docker-compose.yml` file.

To run the container in detached mode (in the background), use:

```sh
docker-compose up -d
```

#### 3. Stop the Docker Compose Services

To stop the running services, use:

```sh
docker-compose down
```

### Dockerfile

The `Dockerfile` used to build the Docker image is as follows:

```Dockerfile
# Start from the official Node.js 21 image, which is based on Alpine Linux (smaller image size)
FROM node:21-alpine

# Set the working directory to /src
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install all the dependencies
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Expose port 5173 to the host machine
EXPOSE 5173

# Set the default command to "npm run dev"
CMD ["npm", "run", "dev"]
```

## Running Tests

### Unit Tests with Vitest

To run unit tests using Vitest, use the following command:

Using npm:

```sh
npm run test
```

For the interactive UI:

```sh
npm run test:ui
```

Or using yarn:

```sh
yarn test
```

### End-to-End Tests with Cypress

To run end-to-end tests using Cypress, use the following command:

Using npm:

```sh
npm run cy:open
```

Or using yarn:

```sh
yarn cy:open
```

## Tailwind CSS

This project includes Tailwind CSS for styling. To use Tailwind CSS classes in your components, simply include the classes in the `className` attribute.

For example:

```tsx
export const Button = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  );
};
```

### Tailwind CSS Configuration

Tailwind CSS is configured in the `tailwind.config.js` file. You can customize the Tailwind configuration according to your needs.

## Building for Production

To build the project for production, use the following command:

Using npm:

```sh
npm run build
```

Or using yarn:

```sh
yarn build
```

This will create an optimized production build in the `dist` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

---

Happy coding!

# Notes

- **Docker**: The Docker setup allows you to containerize your application, making it easier to deploy and run in different environments.
- **Docker Compose**: Using Docker Compose simplifies running the application, especially if you plan to add more services in the future (like a backend API or a database).
- **Port Configuration**: Make sure that the ports exposed in the `Dockerfile` and `docker-compose.yml` match the port your application is running on (default is `5173` for Vite).

# Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Vite Official Website](https://vitejs.dev/)
- [Tailwind CSS Official Website](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Cypress Documentation](https://www.cypress.io/)

---

