pipeline {
    agent any

    environment {
        NODEJS_ID = "NodeJS"
    }

    tools {nodejs "NodeJS"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs(NODEJS_ID){
                    execCmd "npm -v"
                    execCmd "node -v"
                    execCmd "yarn -v"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
