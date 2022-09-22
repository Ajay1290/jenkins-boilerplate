pipeline {
    agent any

    environment {
        NODEJS_ID = "NodeJS"
    }

    tools {nodejs "NodeJS"}

    stages {
        stage('Git') {
            steps {
                git 'https://github.com/Ajay1290/jenkins-boilerplate'
            }
        }
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
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                nodejs(NODEJS_ID){
                    sh "pm2 restart ./bin/www"
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
