pipeline {
  agent any
  stages {
    stage('First Step') {
      steps {
        sh 'ls -lisa'
        sh 'java -version'
        sh 'curl http://google.fr'
      }
    }
    stage('error') {
      steps {
        archiveArtifacts(allowEmptyArchive: true, onlyIfSuccessful: true, artifacts: '*')
      }
    }
  }
}