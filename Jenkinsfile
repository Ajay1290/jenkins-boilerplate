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
                // script {
                //     try {
                //         sh 'rm -rf ./node_modules'
                //         sh 'pm2 delete all'
                //     } catch (Exception e) {
                //         echo 'Exception occurred: ' + e.toString()
                //     }
                // }
            }
        }
        stage('Build') {
            steps {
                // echo 'Building..'
                sh "node -v"
                // sh "export JENKINS_NODE_COOKIE=dontKillMe"
                nodejs(NODEJS_ID){
                    sh "node -v"
                }
            }
        }

        stage('PM2 Install') {
            steps {
                echo 'Installing PM2 to run application as daemon...'
                // sh "npm install pm2 -g"
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
                // nodejs(NODEJS_ID){
                //     sh "chmod +x ./scripts/deployment.sh"
                //     sh "./scripts/deployment.sh"
                //     sh "pm2 status"
                // }
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
