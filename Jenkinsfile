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
                    bat "npm -v"
                    bat "node -v"
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
    post {
        failure {
        echo 'Processing failed'
        }
        success {
        echo 'Processing succeeded'
        }
    }
}
