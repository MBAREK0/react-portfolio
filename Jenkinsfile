pipeline {
  agent any
  stages {
    stage('checkout code ') {
      agent any
      steps {
        git(url: 'https://github.com/MBAREK0/react-portfolio.git', branch: 'main')
      }
    }

    stage('npm i') {
      steps {
        sh 'npm i '
      }
    }

  }
}