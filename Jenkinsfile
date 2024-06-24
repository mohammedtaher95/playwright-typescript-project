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
                //  stage('Clean Old Runs') {
                //     steps {
                //         script {

                //                 if (isUnix()) {
                //                 sh 'allure generate reports/allure-results -o allure-report --clean'
                //                 } else {
                //                 bat('allure generate reports/allure-results -o allure-report --clean')
                //                 }
                //             }    
                //         }
                //     }

                stage('Run Tests') {
                    steps {
                        script {
                            try {
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
                 stage('Results') {
                    steps {
                        script {
                            allure includeProperties: false, jdk: 'JAVA_HOME', results: [[path: 'reports/allure-results']]
                            archiveArtifacts artifacts: 'reports/playwright-report/**/*', allowEmptyArchive: true
                            bat('yarn playwright show-report')
                            publishHTML(target: [
                                allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: true,
                                reportDir: 'reports/playwright-report',
                                reportFiles: 'index.html',
                                reportName: 'Playwright Test Report'
                            ])
                        }
                    }
                 }
            }
        }
        

