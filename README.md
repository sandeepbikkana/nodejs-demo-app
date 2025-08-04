🚀 Node.js CI/CD Deployment with GitHub Actions, Docker & AWS EC2
This project demonstrates how to set up a fully automated CI/CD pipeline that:

-->Detects code changes on GitHub

-->Builds a Docker image

-->Pushes it to DockerHub

-->Deploys it to an AWS EC2 server

✅ What’s Being Used
-->Node.js for the backend app

-->Docker to containerize the app

-->GitHub Actions for CI/CD automation

-->DockerHub to store and host built images

-->AWS EC2 to deploy and run the app

🧩 What Happens Automatically
-->When a developer pushes code to the main branch:

-->GitHub Actions triggers the pipeline

-->The code is packaged into a Docker image

-->The image is pushed to DockerHub

-->The pipeline connects to the EC2 instance via SSH

-->It pulls the latest image and runs the app container

-->The app is served live from the EC2 public IP address

🛠️ Step-by-Step Setup
1. Create and Set Up a GitHub Repository
Initialize a repository for the Node.js app

Add a GitHub Actions workflow file (main.yml) inside .github/workflows/

2. Create a DockerHub Account
Create a DockerHub account

Create a new public repository (e.g., nodejs-demo-app) to store your Docker images

3. Launch and Configure an AWS EC2 Instance
Use Ubuntu 22.04 or similar

Ensure ports 22 (SSH) and 80 (HTTP) are open in the EC2 security group

SSH into the instance and install Docker

4. Configure GitHub Secrets
In your GitHub repo, go to:
Settings → Secrets and variables → Actions → New repository secret

Add the following:

DOCKER_USERNAME – your DockerHub username

DOCKER_PASSWORD – your DockerHub password or access token

EC2_HOST – your EC2 public IP

EC2_USER – typically ubuntu

EC2_SSH_KEY – content of your .pem SSH private key

5. Write the CI/CD Workflow
The GitHub Actions workflow should:

Run on push to the main branch

Build the Docker image

Push the image to DockerHub

Connect to EC2 and deploy the container

6. Push Code to GitHub
Every commit to the main branch triggers the CI/CD workflow

The image is built and deployed automatically

7. Access the Deployed App
Open a browser and go to:
http://<your-ec2-public-ip>
The Node.js app should be live and served from your EC2 instance

🎯 What This Project Demonstrates
-->End-to-end CI/CD with no manual steps

-->Use of GitHub Actions for automation

-->Docker image management with DockerHub

-->Server provisioning and container deployment using AWS EC2


