import { Experience } from "./definitions"

export const Experiences : Array<Experience> = [
    {
        id: 1,
        role: "Senior Consultant",
        company: "Thoughtworks",
        start: new Date(2024,8),
        end: undefined,
        currentJob: true,
        description: "Took on more responsibilities which led to contributions such as leading performance and UX improvements across mobile and backend systems, optimizing a key API to reduce response time from 15+ seconds to under 5, migrating leagacy app to Flutter for PWA support, improving test coverage for reliability, automating AMI upgrades with Python to save developer time, mentoring new developers etc.",
        contributions: [],
        skills: ["Design Patterns", "Event-driven Architecture", "Flutter", "Python", "PWA", "React", "TypeScript", "Application Security"]
    },
    {
        id: 2,
        role: "Consultant Developer",
        company: "Thoughtworks",
        start: new Date(2022,8),
        end: new Date(2024,7),
        currentJob: false,
        description: "Engineered and maintained multiple .NET microservices spanning secure, scalable API development, multithreaded operations, Hangfire background jobs, and localization for multi-language support. Supported a range of platforms—including web, mobile, and PWAs—tailoring the UX for each. Architected a QR code system using Event-Driven Architecture, integrating it with an AWS Glue ETL pipeline in Python for seamless bulk downloads",
        contributions: [],
        skills: [".NET", "ReactJS", "TypeScript", "Python", "Entity Framework", "LINQ", "Postgres", "CI/CD", "HTML & CSS"]
    },
    {
        id: 3,
        role: "Graduate Consultant",
        company: "Thoughtworks",
        start: new Date(2021,8),
        end: new Date(2022,7),
        currentJob: false,
        description: "Developed a cloud solution to replicate data between production and disaster recovery Apache Kafka clusters hosted in Amazon MSK using MirrorMaker2. Worked closely with clients to design pipelines based on their requests using Jenkins",
        contributions: [],
        skills: ["Aapche Kafka", "AWS", "Terraform", "Jenkins", "Pipeline design & automation"]
    }
]