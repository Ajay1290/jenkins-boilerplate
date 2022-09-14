pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                node -v
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
