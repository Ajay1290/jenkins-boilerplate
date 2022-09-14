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
                    bat "npm install"
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
                nodejs(NODEJS_ID){
                    bat "npm run start"
                }
            }
        }
    }
    post {
        failure {
        echo 'Processing failed'
        }
        success {
        echo 'Processing succeeded'
        }
    }
}
