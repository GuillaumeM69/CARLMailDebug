pipeline {
  agent any
  stages {
    stage('First Step') {
      steps {
        sh 'ls -lisa'
        sh 'java -version'
        sh 'ping 8.8.8.8'
      }
    }
    stage('') {
      steps {
        archiveArtifacts(allowEmptyArchive: true, onlyIfSuccessful: true, artifacts: '*')
      }
    }
  }
}
