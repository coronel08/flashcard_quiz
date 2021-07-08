module.exports = [
    {
        id: 1,
        quiz_title: 'AWS Quiz',
        prompt: 'Which service enables you to build the workflows that are required for human review of machine learning predictions?',
        description: 'Provides built-in human review workflows for machine learning',
        answers: [
            {
                id: 1,
                text: 'Amazon Augmented AI',
                correct: true,
            },
            {
                id: 2,
                text: 'Amazon Textract',
                correct: false
            },
            {
                id:3,
                text: 'Amazon Aurora',
                correct: false
            },
            {
                id:4,
                text: 'Amazon Lex',
                correct: false
            }
        ]
    },
    {
        id: 2,
        quiz_title: 'AWS Quiz',
        prompt: 'You want to send and receive messages between distributed application components. Which service should you use?',
        description: 'Send, store and receive messages between components',
        answers: [
            {
                id: 1,
                text: 'Amazon ElastiCache',
                correct: false
            },
            {
                id: 2,
                text: 'AWS Snowball',
                correct: false
            },
            {
                id:3,
                text: 'Amazon Simple Queue Service(SQS)',
                correct: true,
            },
            {
                id:4,
                text: 'Amazon Route 53',
                correct: false
            }
        ]
    },
    {
        id:3,
        quiz_title: 'AWS Quiz',
        prompt: 'Which service enables you to review details for user activities and API calls that have occured within your AWS environment?',
        description: 'Cloudtrail can view complete history of user activity and API Calls',
        answers: [
            {
                id:1,
                text: 'AWS CloudTrail',
                correct: true,
            },
            {
                id:2,
                text: 'AWS Trusted Advisor',
                correct:false
            },
            {
                id:3,
                text:'Amazon Inspector',
                correct: false
            },
            {
                id:4,
                text:'Amazon Cloudwatch',
                correct:false
            }
        ]
    },
    {
        id:4,
        quiz_title:'AWS Quiz',
        prompt:'Which statement best describes Amazon GuardDuty?',
        description:'It identifies threats by continually monitoring the network activity and account behavior',
        answers: [
            {
                id:1,
                text:'A service that checks applications for security and deviations from best practices',
                correct:false
            },
            {
                id:2,
                text:'A service that provides intelligent threat detection for your AWS infrastructure and resources',
                correct:true
            },
            {
                id:3,
                text:'A service that helps protect your applications against DDOS',
                correct:false
            },
            {
                id:4,
                text:'A service that lets you monitor network requests that come into your web application',
                correct:false
            }
        ]
    },
    {
        id:5,
        quiz_title:'AWS Quiz',
        prompt:'Which actions can you perform in Amazon Route 53',
        description: 'Amazon Route 53 is a DNS web service that gives developers and businesses a reliable way to route end users to applications',
        answers: [
            {
                id:1,
                text:'Manage DNS records for domain names and connect user requests to infrastructure in AWS',
                correct:true
            },
            {
                id:2,
                text:'Monitor applications and respond to system wide performance changes. Access AWS security and compliance reports',
                correct:false
            },
        ]
    },
    {
        id:6,
        quiz_title:'AWS Quiz',
        prompt:'In the S3 Intelligtent-Tiering storage class, Amazon S3 moves objects between a frequent access tier and an infrequent access tier. Which storage classes are used?',
        description: '',
        answers: [
            {
                id:1,
                text:'S3 Glacier and S3 standard',
                correct:false
            },
            {
                id:2,
                text:'S3 Glacier and S3 Glacier Deep Archive',
                correct:false
            },
            {
                id:3,
                text:'S3 Standard and S3 Standard-IA',
                correct:true
            },
        ]
    },
    {
        id:7,
        quiz_title:'AWS Quiz',
        prompt:'Which statement best describes Elastic Load Balancing?',
        description: 'A load balancer acts as a single point of contact for all incoming traffic to your auto-sclaing group',
        answers: [
            {
                id:1,
                text:'A service that distributes incoming traffic across multiple targets, such as Amazon EC2 instances',
                correct:true
            },
            {
                id:2,
                text:'A service that enables you to setup, manage and scale a distributed in memory or cache environment in the cloud',
                correct:false
            },
            {
                id:3,
                text:'A service that provides data that you can use to monitor your applications, optimize resource utilization, and respond to system-wide performance changes',
                correct:false
            },
            {
                id:4,
                text:'A service that monitors your applications and automatically adds or removes capacity from your resource groups in response to changing demand',
                correct:false
            }
        ]
    },
    {
        id:8,
        quiz_title:'AWS Quiz',
        prompt:'Which statement best describes an availability zone?',
        description: 'A single data center or a group of data centers within a region',
        answers: [
            {
                id:1,
                text:'A fully isolated portion of the AWS global infastructure',
                correct:true
            },
            {
                id:2,
                text:'A seperate geographical location with multiple locations that are isolated from each other',
                correct:false
            },
            {
                id:3,
                text:'The server from which Amazon CloudFront gets your files',
                correct:false
            },
            {
                id:4,
                text:'A site that Amazon CloudFront uses to cache copies of content for faster delivery to users at any location',
                correct:false
            }
        ]
    },
    {
        id:9,
        quiz_title:'AWS Quiz',
        prompt:'You want Amazon S3 to monitor your objects access patterns. Which storage class should you use?',
        description: 'It monitors objects assess patterns. If you have not accessed an object for 30 consecutive days, Amazon automatically moves it to the infrequent access tier',
        answers: [
            {
                id:1,
                text:'S3 One Zone-IA',
                correct:false
            },
            {
                id:2,
                text:'S3 Intelligent-Tiering',
                correct:true
            },
            {
                id:3,
                text:'S3 Standard-IA',
                correct:false
            },
            {
                id:4,
                text:'S3 Glacier',
                correct:false
            }
        ]
    },
    {
        id:10,
        quiz_title:'AWS Quiz',
        prompt:'Which support plans include access to all AWS Trusted Advisor checks',
        description: '',
        answers: [
            {
                id:1,
                text:'Business and Free Tier',
                correct:false
            },
            {
                id:2,
                text:'Business and Enterprise',
                correct:true
            },
            {
                id:3,
                text:'Developer and Basic',
                correct:false
            },
        ]
    },
    {
        id:11,
        quiz_title:'AWS Quiz',
        prompt:'You want to store data in a volume that is attached to an Amazon EC2 instance. Which service should you use?',
        description: 'Provides block-level storage volumes thaat you can use with EC2 instances',
        answers: [
            {
                id:1,
                text:'AWS Lambda',
                correct:false
            },
            {
                id:2,
                text:'Amazon ElastiCache',
                correct:false
            },
            {
                id:3,
                text:'Amazon Simple Storage Service (S3)',
                correct:false
            },
            {
                id:4,
                text:'Amazon Elastic Block Store (Amazon EBS)',
                correct:true
            }
        ]
    },
    {
        id:12,
        quiz_title:'AWS Quiz',
        prompt:'Which perspective of the AWS Cloud Adoption Framework focuses on recovering IT workloads to meeet the requirements of your business stakeholders?',
        description: 'Operations Perspective  includes principles for operating in the cloud by using agile best practices',
        answers: [
            {
                id:1,
                text:'Operations Perspective',
                correct:true
            },
            {
                id:2,
                text:'Business Perspective',
                correct:false
            },
            {
                id:3,
                text:'Governance Perspective',
                correct:false
            },
            {
                id:4,
                text:'People Perspective',
                correct:false
            }
        ]
    },
    {
        id:13,
        quiz_title:'AWS Quiz',
        prompt:'Which virtual private cloud (VPC) component controls inbound and outbound traffic for EC2 instances?',
        description: 'Security group is a virtual firewall that controls inbound and outbound traffic for an EC2 instance',
        answers: [
            {
                id:1,
                text:'Security group',
                correct:true
            },
            {
                id:2,
                text:'Internet gateway',
                correct:false
            },
            {
                id:3,
                text:'Network access control list',
                correct:false
            },
            {
                id:4,
                text:'Subnet',
                correct:false
            }
        ]
    },
    {
        id:14,
        quiz_title:'AWS Quiz',
        prompt:'Which service enables you to consolidate and manage multiple AWS accounts from a central location?',
        description: 'You can centrally control permissions for the accouns by using service control policies (SCP)',
        answers: [
            {
                id:1,
                text:'AWS Organizations',
                correct:true
            },
            {
                id:2,
                text:'AWS Identity and Access Management (IAM)',
                correct:false
            },
            {
                id:3,
                text:'AWS Artifact',
                correct:false
            },
            {
                id:4,
                text:'AWS Key Management Service (AWS KMS)',
                correct:false
            }
        ]
    },
    {
        id:15,
        quiz_title:'AWS Quiz',
        prompt:'You want to store data in a key-value database. Which service should you use?',
        description: 'A key-value database service',
        answers: [
            {
                id:1,
                text:'Amazon DocumentDB',
                correct:false
            },
            {
                id:2,
                text:'Amazon DynamoDB',
                correct:true
            },
            {
                id:3,
                text:'Amazon Aurora',
                correct:false
            },
            {
                id:4,
                text:'Amazon RDS',
                correct:false
            }
        ]
    },
    {
        id:16,
        quiz_title:'AWS Quiz',
        prompt:'Which AWS Trusted Advisor category includes checks for your service limits and overutilized instances?',
        description: 'Helps improve the performance of your services by providing recommendations for how to take advantage of throughput',
        answers: [
            {
                id:1,
                text:'Fault tolerance',
                correct:false
            },
            {
                id:2,
                text:'Cost optimization',
                correct:false
            },
            {
                id:3,
                text:'Performance',
                correct:true
            },
            {
                id:4,
                text:'Security',
                correct:false
            }
        ]
    },
    {
        id:17,
        quiz_title:'AWS Quiz',
        prompt:'Which component or service enables you to establish a dedicated private connection between your data center and virtual private cloud(VPC)',
        description: 'that enables you to establish a dedicated private connection between your data center and VPC',
        answers: [
            {
                id:1,
                text:'Amazon CloudFront',
                correct:false
            },
            {
                id:2,
                text:'AWS Direct Connect',
                correct:true
            },
            {
                id:3,
                text:'Internet gateway',
                correct:false
            },
            {
                id:4,
                text:'Virtual private gateway',
                correct:false
            }
        ]
    },
    {
        id:18,
        quiz_title:'AWS Quiz',
        prompt:'Which tasks are responsibilites of AWS?',
        description: '',
        answers: [
            {
                id:1,
                text:'Configuring AWS infastructure devices and Maintaining virtualization infastructure',
                correct:true
            },
            {
                id:2,
                text:'Training employees on how to use AWS services',
                correct:false
            },
            {
                id:3,
                text:'Configuring security groups on EC2 instances',
                correct:false
            },
            {
                id:4,
                text:'Creating IAM users and Groups',
                correct:false
            }
        ]
    },
    {
        id:19,
        quiz_title:'AWS Quiz',
        prompt:'Which action can you perform in Amazon Cloudfront?',
        description: 'Cloudfront is a content delivery network that uses edge locations to cache and deliver content',
        answers: [
            {
                id:1,
                text:'Provision an isolated section of the AWS cloud to launch resources in a virtual network that you define',
                correct:false
            },
            {
                id:2,
                text:'Run infrastructure in a hybrid cloud approach',
                correct:false
            },
            {
                id:3,
                text:'deliver content to customers through a global network of edge locations',
                correct:true
            },
            {
                id:4,
                text:'Provision resources by using programming languages or a text file',
                correct:false
            }
        ]
    },
    {
        id:20,
        quiz_title:'AWS Quiz',
        prompt:'Which statement best describes AWS Marketplace',
        description: 'Can use AWS Marketplace to find, test, and buy software that runs on AWS',
        answers: [
            {
                id:1,
                text:'An online tool that inspects your AWS environment and provides real-time guidance in accordance with AWS best practice',
                correct:false
            },
            {
                id:2,
                text:'A resource that provides guidance, architectural reviews, and ongoing communication with your company as you plan, deploym and optimize your applications',
                correct:false
            },
            {
                id:3,
                text:'A resource that can answer questions about the best practices and assist with troubleshooting issues',
                correct:false
            },
            {
                id:4,
                text:'A digital catalog that includes thousands of software listings from independent software vendors',
                correct:true
            }
        ]
    },
    {
        id:21,
        quiz_title:'AWS Quiz',
        prompt:'Which migration strategy involves changing how an application is architected and developed, typically by using cloud-native features?',
        description: '',
        answers: [
            {
                id:1,
                text:'Repurchasing',
                correct:true
            },
            {
                id:2,
                text:'Rehosting',
                correct:false
            },
            {
                id:3,
                text:'Replatforming',
                correct:false
            },
            {
                id:4,
                text:'Refactoring',
                correct:true
            }
        ]
    },
    {
        id:22,
        quiz_title:'AWS Quiz',
        prompt:'Which tool enables you to visualize, understand, and manage your AWS costs and usage over time?',
        description: 'Create custom reports to analyze your AWS cost and usage data',
        answers: [
            {
                id:1,
                text:'AWS budgets',
                correct:false
            },
            {
                id:2,
                text:'AWS cost explorer',
                correct:true
            },
            {
                id:3,
                text:'AWS artifact',
                correct:false
            },
            {
                id:4,
                text:'AWS pricing calculator',
                correct:false
            }
        ]
    },
    {
        id:23,
        quiz_title:'AWS Quiz',
        prompt:'Which service is used to quickly deploy and scale applications on AWS',
        description: 'You upload your application and Elastic Beanstalk handles deployment and provisioning',
        answers: [
            {
                id:1,
                text:'AWS Outposts',
                correct:false
            },
            {
                id:2,
                text:'AWS Elastic Beanstalk',
                correct:true
            },
            {
                id:3,
                text:'Amazon Cloudfront',
                correct:false
            },
            {
                id:4,
                text:'Aws Snowball',
                correct:false
            }
        ]
    },
    {
        id:24,
        quiz_title:'AWS Quiz',
        prompt:'Which service is used to run containeerized applications on AWS?',
        description: 'A fully managed service that you can use to run Kubernetes on AWS',
        answers: [
            {
                id:1,
                text:'Amazon Aurora',
                correct:false
            },
            {
                id:2,
                text:'AWS Elastic Kubernetes Service(Amazon EKS)',
                correct:true
            },
            {
                id:3,
                text:'Amazon SageMaker',
                correct:false
            },
            {
                id:4,
                text:'Aws Redshift',
                correct:false
            }
        ]
    },
    {
        id:25,
        quiz_title:'AWS Quiz',
        prompt:'You are running an Amazon EC2 instance and want to store data in an attached resource. Your data is temporary and will not be kept long term. Which Resource should you use?',
        description: 'Instance stores are ideal for temporary data that does not need to be kept long term',
        answers: [
            {
                id:1,
                text:'Amazon S3 bucket',
                correct:false
            },
            {
                id:2,
                text:'Subnet',
                correct:false
            },
            {
                id:3,
                text:'Instance store',
                correct:true
            },
            {
                id:4,
                text:'Aws Elastic block store (EBS) volume ',
                correct:false
            }
        ]
    },
    {
        id:26,
        quiz_title:'AWS Quiz',
        prompt:'Which tool is used to automate actions for AWS services and applications through scripts?',
        description: 'AWS Command Line enables you to control multiple AWS services directly from CLI',
        answers: [
            {
                id:1,
                text:'AWS Command Line Interface',
                correct:true
            },
            {
                id:2,
                text:'AWS Snowball',
                correct:false
            },
            {
                id:3,
                text:'Amazon Redshift',
                correct:false
            },
            {
                id:4,
                text:'Amazon QLDB',
                correct:false
            }
        ]
    },
    {
        id:27,
        quiz_title:'AWS Quiz',
        prompt:'Which service is used to transfer up to 100PB of data to AWS?',
        description: 'Snowmobile is a service that is used for transffering up to 100PB of data',
        answers: [
            {
                id:1,
                text:'Amazon Neptune',
                correct:false
            },
            {
                id:2,
                text:'AWS Snowmobile',
                correct:true
            },
            {
                id:3,
                text:'Amazon DeepRacer',
                correct:false
            },
            {
                id:4,
                text:'Amazon Cloudfront',
                correct:false
            }
        ]
    },
    {
        id:28,
        quiz_title:'AWS Quiz',
        prompt:'Which statement is True for AWS Lambda',
        description: 'AWS Lambda lets you run code without needing to provision or manage servers',
        answers: [
            {
                id:1,
                text:'You pay only for compute time while your code is running',
                correct:true
            },
            {
                id:2,
                text:'The first step in using AWS Lambda is provisioning a server',
                correct:false
            },
            {
                id:3,
                text:'To use AWS Lambda, you must configure the servers that run your code',
                correct:false
            },
            {
                id:4,
                text:'Before using AWS Lambda you must prepay for your estimated compute time',
                correct:false
            }
        ]
    },
    {
        id:29,
        quiz_title:'AWS Quiz',
        prompt:'Which pillar of the AWS Well-Architected Framework focuses on using computing resources in ways that meet system requirements?',
        description: 'Performance focuses on using computing resources efficiently to meet system requirements',
        answers: [
            {
                id:1,
                text:'Operational Excellence',
                correct:false
            },
            {
                id:2,
                text:'Security',
                correct:false
            },
            {
                id:3,
                text:'Performance Efficiency',
                correct:true
            },
            {
                id:4,
                text:'Reliability',
                correct:false
            }
        ]
    },
    {
        id:30,
        quiz_title:'AWS Quiz',
        prompt:'Which compute option reduces cost when you commit to a consistent amount of compute usage for a 1 year or 3 year term',
        description: 'Savings plans enable you to reduce your compute costs by committing to a consistent amount of compute usage',
        answers: [
            {
                id:1,
                text:'Savings plans',
                correct:true
            },
            {
                id:2,
                text:'Spot instances',
                correct:false
            },
            {
                id:3,
                text:'Reserved instances',
                correct:false
            },
            {
                id:4,
                text:'Dedicated hosts',
                correct:false
            }
        ]
    },
]