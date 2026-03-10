Basic idea to implement react-node based CI/CD

react-node-cicd
    frontend
          Dockerfile
          React App
    backend
          Dockerfile
          Node Express API
    docker-compose.yml
    Jenkinsfile
    README.md

    # Created a folder structure with the help of VS Code
    # Created two environments for frontend (React) and backend(Node + express)
    # Installed all necessary plugins for react, node and express seperately
    # Docker desktop installed locally and integrated it to VS Code.
    # Docker files added for frontend and backend separately.
    # Docker compose file has been added outside folder structure, it has build, container, network and dependency information.

    # Ran the below commands to create containers and push into docker hub
    docker build -t sateeshvirginatlantic/frontend ./frontend
    >> docker build -t sateeshvirginatlantic/backend ./backend
    >> docker push sateeshvirginatlantic/frontend
    >> docker push sateeshvirginatlantic/backend

    verified the docker images with the help of below commands
    docker ps ==> running containers
    docker ps -a ==> running and stopped containers
    docker logs containerId ==> for logs along with id, name and port information

    # Created a new folder for Jenkins Home 
    ran the below command to create a new container for jenkins
    docker run --name mynewjenkns -d `
     >>   -p 8080:8080 -p 50000:50000 `
     >>   -v C:\jenkins_home:/var/jenkins_home `
     >>   jenkins/jenkins:lts

     # verified the docker for the jenkins container.
     # ran local host with http://port:8080 which opened jenkins
     # authenticated jenkins with the password recieved by running 
       docker logs "jenkins container name"
     
