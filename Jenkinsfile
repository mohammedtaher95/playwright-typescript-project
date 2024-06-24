pipeline
        {
            agent any

            stages {
                stage('Get latest Pulls') { // for display purposes
                    // Get some code from a GitHub repository
                    steps {
                        git 'https://github.com/mohammedtaher95/playwright-typescript-project.git'
                    }
                }

                stage('Installing Dependencies') {
                    steps {
                        script {
                            
                                if (isUnix()) {
                                sh 'corepack enable'
                                sh 'yarn install'
                                sh 'yarn playwright install'
                                sh 'yarn playwright install-deps'
                                } else {
                                bat('corepack enable')
                                bat('yarn install')
                                bat('yarn playwright install')
                                bat('yarn playwright install-deps')
                                }
                            

                        }
                    }
                 }

                stage('Run Tests') {
                    steps {
                        script {
                            try() {
                                if (isUnix()) {
                                sh 'yarn test:e2e'
                                } else {
                                bat('yarn test:e2e')
                                
                                }
                            }
                            catch(e){
                            
                            }

                        }
                    }
                 }
            }
        }
        

