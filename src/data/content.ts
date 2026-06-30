export const content = {
  pt: {
    name: "Janilson Alfaia",
    title: "Backend · Python, Java, Kotlin · Django, Spring Boot · CI/CD · AWS",
    location: "Belém, Pará, Brasil",
    summary: "Sou desenvolvedor de software com graduação em Engenharia da Computação, atuando em aplicações Backend e Frontend. Tenho experiência na construção de Web Services RESTful usando Python (Django e Flask), assim como Java e Kotlin com Spring Boot. No Frontend, trabalho com interfaces modernas usando Next.js e React.js. Além disso, tenho experiência na construção de pipelines CI com GitLab CI e deploy em servidores Linux e serviços AWS. Sou apaixonado por tecnologia e busco constantemente aprimorar minhas habilidades para entregar soluções cada vez mais valiosas. Atualmente estudo conceitos de Domain-Driven Design (DDD) e sistemas de mensageria, com foco em Kotlin. Também dedico tempo para melhorar minha proficiência em inglês. Tenho interesse em expandir meu conhecimento em arquiteturas de sistemas distribuidos e microsserviços.",
    experience: [
      {
        title: "Analista de Sistemas Pleno (Backend)",
        company: "CTC",
        period: "Junho 2022 - Presente (mais de 4 anos)",
        location: "Belém, PA",
        bullets: [
          "Development of high-availability RESTful APIs with Spring Boot and Django, applying Clean Architecture and SOLID principles.",
          "Refactoring messaging services to decoupled architecture, abstracting Apache Kafka and adding RabbitMQ support through interfaces, enabling flexibility for new messaging clients.",
          "Optimization of SQL queries and Django ORM, eliminating N+1 query problems and adjusting queries to use existing indexes, resulting in significant performance gains.",
          "Resolved Solar infrastructure bottlenecks by implementing scalable architecture with Docker Swarm, NGINX, and Traefik for better load distribution and eliminating crashes.",
          "Implementation of timeout and retry policies for critical queries, plus caching for repetitive external API calls, reducing latency and improving resilience.",
          "Optimization of Celery tasks with parallelism, reducing execution time of critical tasks from over 1 hour to under 20 minutes.",
          "Managed development of legal system (prisoner monitoring and criminal execution), including requirements gathering, scope definition, and core architecture in Python Django with TypeScript frontend.",
          "Integration with court APIs (SEEU) and state penitentiary system, plus development of integration with service system via messaging (Kafka/RabbitMQ abstraction).",
          "Robust authentication/authorization with Keycloak, OAuth 2.1, and Spring Resource Server, ensuring security and access control.",
          "Automated API documentation with Swagger/OpenAPI as a living contract between teams.",
          "Solid testing pipeline with Unit Tests (JUnit 5, Mockito, Unittest) and Integration/API Tests, ensuring over 80% coverage (SonarQube).",
          "Real-time monitoring with Sentry and Instana for rapid incident resolution and identification of optimization points.",
          "CI/CD implementation on GitLab with static analysis (SonarQube), automated build, testing, and deployment."
        ],
        tags: ["Java", "Spring Boot", "Python", "Django", "Kafka", "RabbitMQ", "PostgreSQL", "MongoDB", "Docker", "Keycloak", "GitLab CI"]
      },
      {
        title: "Desenvolvedor de software",
        company: "Hub2Decor",
        period: "Abril 2021 - Maio 2022 (1 ano 2 meses)",
        location: "Paraná, Brasil",
        bullets: [
          "Desenvolvimento de Tour Virtual 3D para decoração de apartamentos.",
          "Criação de telas e componentes interativos com ReactJS e JavaScript.",
          "Integração do frontend com APIs.",
          "Otimização de performance e acessibilidade.",
          "Dockerização com NGINX e deploy na EC2.",
          "Componentização, reutilização e gerenciamento de estado."
        ],
        tags: ["React", "JavaScript", "Docker", "NGINX", "EC2"]
      },
      {
        title: "Back End Developer",
        company: "UFOPA",
        period: "Junho 2020 - Abril 2021 (11 meses)",
        location: "Remoto",
        bullets: [
          "Webservice RESTFull para monitoramento de alunos (Covid-19).",
          "Design de API com Python e Flask, SQLAlchemy, banco SQL.",
          "Gerenciamento com Kanban, versionamento Git/GitHub.",
          "Deploy na AWS: CodePipeline, ElasticBeanstalk, IAM, RDS, EC2."
        ],
        tags: ["Python", "Flask", "SQLAlchemy", "AWS", "CodePipeline", "RDS", "EC2"]
      },
      {
        title: "Android Developer (MVP)",
        company: "Udacity / Projeto Igrejas",
        period: "Março 2020 - Março 2021 (1 ano 1 mês)",
        location: "Remoto",
        bullets: [
          "Desenvolvimento de aplicativo MVP para relatórios.",
          "Levantamento de requisitos, design de telas.",
          "Android Studio com Java, MVVM, Room, ViewModel, LiveData."
        ],
        tags: ["Android", "Java", "MVVM", "Room", "LiveData"]
      },
      {
        title: "Back End Developer",
        company: "CEAMAZON - UFPA",
        period: "Setembro 2018 - Dezembro 2020 (2 anos 4 meses)",
        location: "Belém, Pará",
        bullets: [
          "Desenvolvimento de CLI para sistema de Projeção de Perdas Técnicas (CENERGEL).",
          "Modelagem automatizada de rede elétrica com OpenDSS, banco SQL.",
          "Cálculo de perdas técnicas e comerciais com Python e OpenDSS.",
          "Integração com sistema web via CLI, documentação."
        ],
        tags: ["Python", "OpenDSS", "SQL Server", "CLI", "Git"]
      }
    ],
    education: "Universidade Federal do Pará · Bacharelado em Engenharia da Computação (2016 - 2022)",
    certifications: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    topSkills: ["Python", "Java", "Kotlin", "Docker Swarm", "Apache Kafka", "RabbitMQ", "MongoDB", "PostgreSQL"],
    languages: "Português (Nativo) · Inglês (Intermediário)",
    skillCategories: [
      {
        name: "Backend",
        nameEn: "Backend",
        skills: ["Python", "Java", "Kotlin", "Django", "Flask", "Spring Boot"]
      },
      {
        name: "Bancos de Dados & Mensageria",
        nameEn: "Databases & Messaging",
        skills: ["PostgreSQL", "MongoDB", "SQL Server", "Apache Kafka", "RabbitMQ"]
      },
      {
        name: "Infraestrutura & DevOps",
        nameEn: "Infrastructure & DevOps",
        skills: ["Docker", "Docker Swarm", "AWS", "GitLab CI/CD", "NGINX", "Traefik", "Linux"]
      },
      {
        name: "Frontend & Mobile",
        nameEn: "Frontend & Mobile",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Android (Java)"]
      },
      {
        name: "Arquitetura & Práticas",
        nameEn: "Architecture & Practices",
        skills: ["REST APIs", "Clean Architecture", "SOLID", "DDD", "OAuth 2.1", "Keycloak", "SonarQube"]
      },
      {
        name: "Monitoramento & Testes",
        nameEn: "Monitoring & Testing",
        skills: ["JUnit 5", "Mockito", "Unittest", "Sentry", "Instana", "Swagger/OpenAPI", "Celery"]
      }
    ],
    contact: {
      phone: "91983328019 (whatsaap)",
      email: "janilson.dev@alfser.com.br",
      linkedin: "https://www.linkedin.com/in/janilsonalfser",
      github: "https://github.com/Alfser"
    }
  },
  en: {
    name: "Janilson Alfaia",
    title: "Backend · Python, Java, Kotlin · Django, Spring Boot · CI/CD · AWS",
    location: "Belém, Pará, Brazil",
    summary: "I'm a software developer with a degree in Computer Engineering, working on both Backend and Frontend applications. I have experience building RESTful Web Services using Python (with Django and Flask), as well as Java and Kotlin with Spring Boot. On the Frontend, I work with modern interfaces using Next.js and React.js. Besides that, I have experience building CI pipelines with GitLab CI and deploying applications on Linux servers and AWS services. I'm passionate about technology and constantly seek to improve my skills to deliver increasingly high-quality and valuable solutions. Currently, I'm studying Domain-Driven Design (DDD) concepts and messaging systems, focusing on Kotlin applications. I'm also dedicating time to improving my English proficiency. I'm interested in expanding my knowledge into distribution systems and microservices architectures.",
    experience: [
      {
        title: "Systems Analyst (Backend)",
        company: "CTC",
        period: "June 2022 - Present (4 years 1 month)",
        location: "Belém, PA",
        bullets: [
          "Development of high-availability RESTful APIs with Spring Boot and Django, applying Clean Architecture.",
          "Asynchronous systems with Apache Kafka and RabbitMQ; data modeling for PostgreSQL and MongoDB.",
          "Containerization with Docker for on-premise environments.",
          "Authentication/authorization with Keycloak, OAuth 2.1 and Spring Resource Server.",
          "Automated API documentation with Swagger/OpenAPI.",
          "Unit tests (JUnit 5, Mockito, Unittest) and integration tests, coverage > 80% (SonarQube).",
          "Performance optimization: N+1 elimination in Django ORM and parallelization with Celery (reduction from 1h to 15min).",
          "Monitoring with Sentry and Instana.",
          "CI/CD on GitLab with static analysis, build, tests and deploy."
        ],
        tags: ["Java", "Spring Boot", "Python", "Django", "Kafka", "RabbitMQ", "PostgreSQL", "MongoDB", "Docker", "Keycloak", "GitLab CI"]
      },
      {
        title: "Software Developer",
        company: "Hub2Decor",
        period: "April 2021 - May 2022 (1 year 2 months)",
        location: "Paraná, Brazil",
        bullets: [
          "Development of 3D Virtual Tour for apartment decoration.",
          "Creation of interactive screens and components with ReactJS and JavaScript.",
          "Frontend integration with APIs.",
          "Performance and accessibility optimization.",
          "Dockerization with NGINX and deployment on EC2.",
          "Componentization, reuse and state management."
        ],
        tags: ["React", "JavaScript", "Docker", "NGINX", "EC2"]
      },
      {
        title: "Back End Developer",
        company: "UFOPA",
        period: "June 2020 - April 2021 (11 months)",
        location: "Remote",
        bullets: [
          "RESTFull Webservice for student monitoring (Covid-19).",
          "API design with Python and Flask, SQLAlchemy, SQL database.",
          "Management with Kanban, versioning Git/GitHub.",
          "AWS deploy: CodePipeline, ElasticBeanstalk, IAM, RDS, EC2."
        ],
        tags: ["Python", "Flask", "SQLAlchemy", "AWS", "CodePipeline", "RDS", "EC2"]
      },
      {
        title: "Android Developer (MVP)",
        company: "Udacity / Church Project",
        period: "March 2020 - March 2021 (1 year 1 month)",
        location: "Remote",
        bullets: [
          "MVP app development for reports.",
          "Requirements gathering, screen design.",
          "Android Studio with Java, MVVM, Room, ViewModel, LiveData."
        ],
        tags: ["Android", "Java", "MVVM", "Room", "LiveData"]
      },
      {
        title: "Back End Developer",
        company: "CEAMAZON - UFPA",
        period: "September 2018 - December 2020 (2 years 4 months)",
        location: "Belém, Pará",
        bullets: [
          "CLI development for Technical Loss Projection system (CENERGEL).",
          "Automated power grid modeling with OpenDSS, SQL database.",
          "Technical and commercial loss calculation with Python and OpenDSS.",
          "Integration with web system via CLI, documentation."
        ],
        tags: ["Python", "OpenDSS", "SQL Server", "CLI", "Git"]
      }
    ],
    education: "Universidade Federal do Pará · Bachelor in Computer Engineering (2016 - 2022)",
    certifications: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    topSkills: ["Python", "Java", "Kotlin", "Docker Swarm", "Apache Kafka", "RabbitMQ", "MongoDB", "PostgreSQL"],
    languages: "Portuguese (Native) · English (Intermediate)",
    skillCategories: [
      {
        name: "Backend",
        nameEn: "Backend",
        skills: ["Python", "Java", "Kotlin", "Django", "Flask", "Spring Boot"]
      },
      {
        name: "Bancos de Dados & Mensageria",
        nameEn: "Databases & Messaging",
        skills: ["PostgreSQL", "MongoDB", "SQL Server", "Apache Kafka", "RabbitMQ"]
      },
      {
        name: "Infraestrutura & DevOps",
        nameEn: "Infrastructure & DevOps",
        skills: ["Docker", "Docker Swarm", "AWS", "GitLab CI/CD", "NGINX", "Traefik", "Linux"]
      },
      {
        name: "Frontend & Mobile",
        nameEn: "Frontend & Mobile",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Android (Java)"]
      },
      {
        name: "Arquitetura & Práticas",
        nameEn: "Architecture & Practices",
        skills: ["REST APIs", "Clean Architecture", "SOLID", "DDD", "OAuth 2.1", "Keycloak", "SonarQube"]
      },
      {
        name: "Monitoramento & Testes",
        nameEn: "Monitoring & Testing",
        skills: ["JUnit 5", "Mockito", "Unittest", "Sentry", "Instana", "Swagger/OpenAPI", "Celery"]
      }
    ],
    contact: {
      phone: "91983328019 (whatsaap)",
      email: "janilson.dev@alfser.com.br",
      linkedin: "https://www.linkedin.com/in/janilsonalfser",
      github: "https://github.com/Alfser"
    }
  }
};