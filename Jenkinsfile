String branchName = 'main'
String gitCredentials = "ajay1290"
String repoUrl = 'https://github.com/Ajay1290/jenkins-boilerplate.git'

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
                    sh "npm install"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh "pwd"
                sh "ls"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh "ls"
                nodejs(NODEJS_ID){
                    sh "pm2 start ./bin/www"
                    sh "pm2 status"
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
