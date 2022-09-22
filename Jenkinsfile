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
        stage('Cleaning') {
            steps {
                echo 'Cleaning..'
                script {
                    try {
                        sh 'pm2 delete all'
                        sh 'rm -rf ./node_modules'
                    } catch (Exception e) {
                        echo 'Exception occurred: ' + e.toString()
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh "export BUILD_ID='dontKillMePlease'"
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
