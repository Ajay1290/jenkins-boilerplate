String branchName = env.BRANCH_NAME
String gitCredentials = "ajay1290"
String repoUrl = 'https://github.com/Ajay1290/jenkins-boilerplate.git'

pipeline {
    agent any

    environment {
        NODEJS_ID = "NodeJS"
    }

    tools {nodejs "NodeJS"}

    stages {
        stage('Git') {
            steps {
                echo 'Make the output directory'
                sh 'mkdir -p build'

                echo 'Cloning files from (branch: "' + branchName + '" )'
                dir('build') {
                    git branch: branchName, credentialsId: 	gitCredentials, url: repoUrl
                }     

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
