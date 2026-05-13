pipeline {
    agent any
    stages {
        stage("Clone") {
            steps {
                git "https://github.com/muryokusho-ash/ci-node-app-jenkins-docker.git"
            }
        }

        stage("Install Dependencies") {
            steps {
                bat "npm install"
            }
        }
        stage("Run App") {
            steps {
                bat "node app.js"
            }
        }
        stage("Test App") {
            steps {
                bat "node test.js"
            }
        }

        stage("Build docker image") {
            steps {
                bat "docker build -t ci-node-app-jenkins ."
            }
        }
        stage("Run image on container"){
            steps{
                bat "docker run -d -p 3000:3000 --name ci-jenkins-container ci-node-app-jenkins"
            }
        }
    }
}