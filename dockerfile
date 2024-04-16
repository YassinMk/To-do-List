# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY build ./

RUN npm install -g serve

# Make port 80 available outside the container
EXPOSE 80



# Start the application
CMD ["serve", "-s","build", "-l", "80"]
