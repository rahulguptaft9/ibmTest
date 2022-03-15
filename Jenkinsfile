pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/rahulguptaft9/ibmTest'
      }
    }
     
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }  
  }
}
