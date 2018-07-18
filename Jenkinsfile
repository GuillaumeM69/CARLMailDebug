pipeline {
  agent any
  stages {
    stage('First Step') {
      steps {
        sh 'ls -lisa'
        sh 'java -version'
      }
    }
    stage('') {
      steps {
        archiveArtifacts(allowEmptyArchive: true, onlyIfSuccessful: true, artifacts: '*')
      }
    }
  }
}