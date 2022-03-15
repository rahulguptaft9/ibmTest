pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/rahulguptaft9/ibmTest'
      }
    }
     
    stage('Build') {
      steps {
        sh 'yarn'
      }
    }  
  }
}
