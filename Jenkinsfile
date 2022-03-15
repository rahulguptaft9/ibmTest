pipeline {
  agent any
    
  tools {nodejs "node"}
  
  environment{
	registry="mrchelsea/order-docker"
	registryCredential='dockerhub'
	dockerImage=''
	}
    
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
    

	stage('Building image') {
		steps{
			script{
			 	dockerImage=docker.build registry	
			}
		}
	}
	stage('Registring image') {
		steps{
			script{
				docker.withRegistry('',registryCredential){
				dockerImage.push()
				}
			}
		}
	}
  }
}
