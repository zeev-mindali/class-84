# Images
# Build Image:                  docker build -t mindalizeev/mydonation:1.0 .
# Display all images:           docker images
# remove image:                 docker image rm mindalizeev/mydonation:1.0
# login to docker registry:     docker login
# logout from docker registry:  docker logout
# push image to the hub:        docker push mindalizeev/mydonation:1.0
# pull image from the hub:      docker pull mindalizeev/mydonation:1.0

# Containers:
# Create a new container        docker create --name my-donation -p 5000:4000 mindalizeev/mydonation:1.0
# Display all containers:       docker ps -a
# start container               docker start my-donation
# stop container                docker stop my-donation
# remove non-running containers docker rm my-donation
# remove running containers     docker rm my-donation -f
# create & start container      docker run -d --name my-donation -p 5000:4000 mindalizeev/mydonation:1.0

# to fix SQL probelm (mysql client is need to be upgraded)
# ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '12345678';
# flush privileges;
# Inherit current image from an alpone image containing node (for latest versions use node:alpine)
FROM node:18-alpine

# install ts-node globally (-g) for running typescript
RUN npm install -g npm@9.1.1
RUN npm i -g ts-node
RUN npm i -g nodemon


# Create an empty directory for the project files and set it as the Current directory
WORKDIR /app

# copy local package.json & package-lock.json into /app
COPY package*.json /app/

# Install NPM dependencies & devDependencies
RUN npm i

# copy project local files (first dot) into /app
COPY . /app

# Execute "npm run server" inside /app (workdir) when container starts:
ENTRYPOINT npm run server
