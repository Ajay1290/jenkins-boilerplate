pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh "node -v"
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
