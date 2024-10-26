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
CMD ["npm","run", "dev"]

