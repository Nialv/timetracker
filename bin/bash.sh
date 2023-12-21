# Define image names and versions
FRONTEND_IMAGE="time-tracker-web"
BACKEND_IMAGE="time-tracker-api"
POSTGRES_IMAGE="postgres:latest"

# Create a Docker network
docker network create my-network

# Build frontend and backend Docker images
cd ./time-tracker-web
docker build -t $FRONTEND_IMAGE .
cd ../time-tracker-api
docker build -t $BACKEND_IMAGE .
cd ..

# Run PostgreSQL container
docker run --name timetracker-database --network my-network -e POSTGRES_PASSWORD=owwlish -d $POSTGRES_IMAGE

# Run frontend container
docker run --name timetracker-web --network my-network -p 8080:8080 -d $FRONTEND_IMAGE

# Run backend container
docker run --name timetracker-api --network my-network -p 3000:3000 -d $BACKEND_IMAGE

# Output container status
echo "Docker containers are running:"
docker ps
