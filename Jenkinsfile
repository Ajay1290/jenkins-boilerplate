pipeline {
    agent any

    environment {
        NODEJS_ID = "NodeJS"
    }

    stages {
        stage('Cleaning') {
            steps {
                echo 'Cleaning..'
                sh "node -v"
                sh 'whereis node'
                sh "npm -v"
                sh 'export PM2_HOME="/home/ec2-user/.pm2"'
                sh 'whoami'
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
                sh "pm2 status"
                // echo 'Building..'
                // sh "export JENKINS_NODE_COOKIE=dontKillMe"
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
                sh "pm2 start ./bin/www"
                sh "pm2 status"
                // nodejs(NODEJS_ID){
                //     sh "chmod +x ./scripts/deployment.sh"
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
