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
                            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                                if (isUnix()) {
                                sh 'corepack enable'
                                sh 'yarn install'
                                } else {
                                bat('corepack enable')
                                bat('yarn install')
                                }
                            }

                        }
                    }
                 }

                stage('Run Tests') {
                    steps {
                        script {
                            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                                if (isUnix()) {
                                sh 'yarn test:e2e'
                                } else {
                                bat('yarn test:e2e')
                                
                                }
                            }

                        }
                    }
                 }
            }
        }
        

