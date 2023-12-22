# Load .env variables
set -a  # Automatically export all variables
source ./.env
set +a  # Stop automatically exporting

# Define image names and versions
FRONTEND_IMAGE="time-tracker-web"
BACKEND_IMAGE="time-tracker-api"
POSTGRES_IMAGE="postgres:latest"

# Create a Docker network
docker network create my-network

# Build frontend and backend Docker images
cd ./time-tracker-web/docker  # Navigate to the directory containing the Dockerfile
docker build -t $FRONTEND_IMAGE .  # Use the Dockerfile in the current directory
cd ../../time-tracker-api/docker  # Navigate to the backend Dockerfile directory
docker build -t $BACKEND_IMAGE .  # Use the Dockerfile in the current directory
cd ../..  # Return to the root directory

# Run PostgreSQL container
docker run --name timetracker-database \
  --network my-network \
  -e POSTGRES_USER="$PSQL_DB_USER" \
  -e POSTGRES_PASSWORD="$PSQL_DB_PASSWORD" \
  -e POSTGRES_DB="$PSQL_DB_HOST" \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  -d $POSTGRES_IMAGE

# Run frontend container
docker run --name timetracker-web --network my-network -p 8080:8080 -e VITE_API_URL="$VITE_API_URL" -d $FRONTEND_IMAGE

# Run backend container
docker run --name timetracker-api --network my-network -p 3000:3000 -e TIME_TRACKER_REFRESH_KEY="$TIME_TRACKER_REFRESH_KEY" -e TIME_TRACKER_KEY="$TIME_TRACKER_KEY" -d $BACKEND_IMAGE

# Output container status
echo "Docker containers are running:"
docker ps