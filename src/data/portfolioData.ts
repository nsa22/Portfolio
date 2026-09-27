export interface WorkCard {
  id: string;
  number: string;
  company: string;
  role: string;
  eyebrow: string;
  period: string;
  tags: string[];
  bullets: string[];
  metrics: { label: string; value: string }[];
  detailedCase: {
    overview: string;
    architecture: string[];
    outcomes: string[];
    techStack: string[];
  };
}

export interface SkillItem {
  name: string;
  category: 'PROGRAMMING LANGUAGES' | 'DATABASES & WAREHOUSE' | 'CLOUD & PIPELINE' | 'TOOLS';
  tags: string[];
  description: string;
  level: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeCode: string;
  description: string;
  isDegree?: boolean;
}

export const WORK_CARDS: WorkCard[] = [
  {
    id: 'niveus',
    number: '01',
    company: 'Niveus Solutions',
    role: 'Data Engineer',
    eyebrow: 'MAY 2025 – PRESENT',
    period: 'May 2025 – Present',
    tags: ['GCP', 'AIRFLOW', 'BIGQUERY'],
    bullets: [
      'Built robust ETL and ELT pipelines using Google Cloud Data Fusion and Cloud Composer (Airflow) to streamline financial data workflows.',
      'Optimized complex Stored Procedures using CTEs and temporary tables, cutting query execution time from 2+ hours to 20 minutes.',
      'Engineered optimizations for long-running Data Fusion pipelines, drastically reducing ingestion times.',
      'Leveraged BigQuery for high-performance warehousing and analytics across enterprise financial datasets.'
    ],
    metrics: [
      { label: 'Query Execution', value: '2h → 20m' },
      { label: 'Pipeline Speedup', value: '6× Faster' },
      { label: 'Cloud Target', value: 'GCP Native' }
    ],
    detailedCase: {
      overview: 'Modernized core financial data infrastructure at Niveus Solutions (part of NTT DATA), migrating legacy batch workloads into managed Google Cloud Platform primitives with deterministic SLA guarantees.',
      architecture: [
        'Cloud Composer (Apache Airflow 2.x) DAGs scheduled for multi-tier banking ledger reconciliation.',
        'Google Cloud Data Fusion pipelines ingesting distributed transactional flat files and streaming records into GCS buckets.',
        'BigQuery Partitioned & Clustered target tables optimized for multi-billion record analytical queries.',
        'Custom SQL transformations leveraging Common Table Expressions (CTEs), window functions, and ephemeral temp tables.'
      ],
      outcomes: [
        'Reduced critical financial reporting cycle runtimes from over 130 minutes down to just 20 minutes.',
        'Eliminated storage and scan bottlenecks via BigQuery bi-temporal clustering on settlement dates.',
        'Standardized error handling, alerting hooks, and automated retry mechanisms for zero silent pipeline failures.'
      ],
      techStack: ['Google Cloud Data Fusion', 'Cloud Composer', 'BigQuery', 'Google Cloud Storage', 'Airflow', 'SQL / CTEs', 'Python']
    }
  },
  {
    id: 'capgemini',
    number: '02',
    company: 'Capgemini',
    role: 'Data Integration Engineer',
    eyebrow: 'NOV 2022 – MAY 2025',
    period: 'Nov 2022 – May 2025',
    tags: ['AWS', 'SNOWFLAKE', 'PYTHON'],
    bullets: [
      'Architected automated ETL/ELT pipelines using Airflow and Snowpipe (S3 → Snowflake), reducing manual intervention by 90%.',
      'Engineered real-time analytics integration between Amazon RDS and Snowflake, achieving a 50% reduction in latency.',
      'Optimized Snowflake performance by 30% using Materialized Views, Streams, and CDC for SCD Type 1 logic.',
      'Built data integrity frameworks using incremental delete/insert logic and custom flattening functions for nested JSON/variant data.',
      'Established monitoring via AWS CloudWatch, SQS, and SNS, maintaining 99.9% pipeline uptime.',
      'Enhanced data resilience using Snowflake Time Travel, UnDrop, and Informatica for cross-system integration.'
    ],
    metrics: [
      { label: 'Manual Effort', value: '-90%' },
      { label: 'Latency Cut', value: '-50%' },
      { label: 'Performance', value: '+30%' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    detailedCase: {
      overview: 'Spearheaded automated cloud data warehouse engineering for high-velocity enterprise telecom and financial operations, integrating AWS cloud compute with Snowflake modern data cloud architectures.',
      architecture: [
        'Serverless automated ingestion utilizing Amazon S3 event notifications, SQS message queues, and Snowflake Snowpipe.',
        'Real-time Change Data Capture (CDC) syncing transactional Amazon RDS tables into Snowflake staging schemas.',
        'SCD Type 1 & Type 2 dimensional modeling using Snowflake Streams and automated Tasks.',
        'JSON and semi-structured Variant processing using custom Snowflake FLATTEN table functions.',
        'Informatica Cloud integration layers connecting legacy ERP systems with modern cloud repositories.'
      ],
      outcomes: [
        'Decreased manual intervention by 90% through end-to-end automated orchestrations and alerting.',
        'Halved latency (50% reduction) for real-time reporting operational dashboards.',
        'Delivered 99.9% uptime SLA across 40+ production ETL pipelines monitored via AWS CloudWatch & SNS.',
        'Restored zero data loss reliability during schema shifts using Snowflake Time Travel and UnDrop.'
      ],
      techStack: ['AWS S3', 'Snowflake', 'Snowpipe', 'Amazon RDS', 'Python', 'Apache Airflow', 'AWS CloudWatch', 'SQS / SNS', 'Informatica']
    }
  }
];

export const SKILL_CATEGORIES = [
  'PROGRAMMING LANGUAGES',
  'DATABASES & WAREHOUSE',
  'CLOUD & PIPELINE',
  'TOOLS'
] as const;

export type SkillCategory = typeof SKILL_CATEGORIES[number];

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  {
    name: 'Python',
    category: 'PROGRAMMING LANGUAGES',
    tags: ['ETL & ELT', 'Pandas / NumPy'],
    description: 'Custom ingestion pipelines, data wrangling, automation scripts, and API payload parsers.',
    level: 'Advanced'
  },
  {
    name: 'PySpark',
    category: 'PROGRAMMING LANGUAGES',
    tags: ['Distributed Compute', 'Big Data'],
    description: 'Resilient distributed transformations and large-scale parallel dataset processing.',
    level: 'Advanced'
  },
  {
    name: 'C',
    category: 'PROGRAMMING LANGUAGES',
    tags: ['Systems', 'Algorithms'],
    description: 'Algorithmic efficiency, memory structures, and foundational computing logic.',
    level: 'Proficient'
  },

  // Databases & Warehouse
  {
    name: 'Snowflake',
    category: 'DATABASES & WAREHOUSE',
    tags: ['Snowpipe', 'Streams & Tasks'],
    description: 'Virtual warehouses, zero-copy cloning, Time Travel, CDC, Materialized Views, and semi-structured VARIANT parsing.',
    level: 'Intermediated -advanced'
  },
  {
    name: 'Google BigQuery',
    category: 'DATABASES & WAREHOUSE',
    tags: ['Serverless DWH', 'Partitioning'],
    description: 'Analytical data warehousing, BI engine caching, table clustering, and cost-optimized querying.',
    level: 'Intermediated -advanced'
  },
  {
    name: 'Amazon RDS',
    category: 'DATABASES & WAREHOUSE',
    tags: ['Cloud Relational', 'Read Replicas'],
    description: 'Managed database provisioning, high availability setups, snapshot recovery, and replication.',
    level: 'Advanced'
  },
  {
    name: 'Amazon Redshift',
    category: 'DATABASES & WAREHOUSE',
    tags: ['MPP Columnar', 'Analytics'],
    description: 'Columnar storage layout, distribution keys, vacuuming, and analytical aggregation.',
    level: 'Proficient'
  },
  {
    name: 'PostgreSQL',
    category: 'DATABASES & WAREHOUSE',
    tags: ['CTEs & Window Fns', 'Indexing'],
    description: 'Complex analytical queries, recursive CTEs, temporary staging schemas, and performance tuning.',
    level: 'Advanced'
  },
  {
    name: 'MySQL',
    category: 'DATABASES & WAREHOUSE',
    tags: ['OLTP', 'Transactional'],
    description: 'Relational schema design, normalization, ACID transaction management, and query profiling.',
    level: 'Advanced'
  },
  {
    name: 'Oracle Database',
    category: 'DATABASES & WAREHOUSE',
    tags: ['Enterprise RDBMS', 'PL/SQL'],
    description: 'Enterprise transactional data management, stored procedures, and migration extract pipelines.',
    level: 'Proficient'
  },
  {
    name: 'MSSQL',
    category: 'DATABASES & WAREHOUSE',
    tags: ['Stored Procedures', 'T-SQL'],
    description: 'Complex enterprise stored procedures, table indexing strategies, and batch transaction optimization.',
    level: 'Proficient'
  },

  // Cloud & Pipeline
  {
    name: 'Google Cloud Platform (GCP)',
    category: 'CLOUD & PIPELINE',
    tags: ['Data Fusion', 'Composer / GCS'],
    description: 'Managed Cloud Composer (Airflow), Data Fusion graphical ETL, Cloud Storage, and IAM roles.',
    level: 'Intermediated -advanced'
  },
  {
    name: 'Amazon Web Services (AWS)',
    category: 'CLOUD & PIPELINE',
    tags: ['S3 / Glue', 'CloudWatch / SNS'],
    description: 'Scalable data lake tiers (S3), AWS Glue catalogs, SQS decoupling, SNS event alerting, and CloudWatch metrics.',
    level: 'Intermediated -advanced'
  },
  {
    name: 'Apache Airflow',
    category: 'CLOUD & PIPELINE',
    tags: ['DAG Orchestration', 'Backfills'],
    description: 'Custom operator creation, sensors, dynamic task generation, SLA monitors, and automated retries.',
    level: 'Advanced'
  },
  {
    name: 'Jenkins',
    category: 'CLOUD & PIPELINE',
    tags: ['CI/CD', 'Automated Testing'],
    description: 'Continuous integration and deployment pipelines for data transformation code, SQL scripts, and DDL migrations.',
    level: 'Proficient'
  },

  // Tools & Visualization
  {
    name: 'Power BI',
    category: 'TOOLS',
    tags: ['DAX', 'Executive Dashboards'],
    description: 'Interactive business intelligence dashboards, star-schema data modeling, and custom DAX measures.',
    level: 'Advanced'
  },
  {
    name: 'Git & Version Control',
    category: 'TOOLS',
    tags: ['Branching', 'Code Review'],
    description: 'Collaborative code versioning, pull request reviews, feature branching, and release tagging.',
    level: 'Advanced'
  },
  {
    name: 'VS Code & PyCharm',
    category: 'TOOLS',
    tags: ['IDE', 'Debugging'],
    description: 'Integrated development environments, remote SSH execution, linting, and profiling tools.',
    level: 'Advanced'
  },
  {
    name: 'Microsoft Excel',
    category: 'TOOLS',
    tags: ['Financial Modeling', 'Pivot Analysis'],
    description: 'Rapid ad-hoc data reconciliation, complex formulas, and stakeholder audit summaries.',
    level: 'Advanced'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'degree',
    title: "Bachelor's in Information Science and Engineering",
    issuer: 'Alvas Institute of Engineering and Technology',
    year: '2018 – 2022',
    badgeCode: 'DEGREE-AIET',
    description: 'Four-year engineering degree focusing on distributed computing, database architecture, data structures, algorithms, and software engineering principles.',
    isDegree: true
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: '2023',
    badgeCode: 'AWS-CP',
    description: 'Validated foundational knowledge of AWS cloud concepts, security, architecture, pricing, and essential cloud compute and storage services.'
  },
  {
    id: 'infosys-powerbi',
    title: 'TechA Data Analytics using Power BI Foundation',
    issuer: 'Infosys Springboard',
    year: '2022',
    badgeCode: 'PWR-BI-FND',
    description: 'Mastery in building analytical reports, data transformation via Power Query, relational modeling, and DAX calculations.'
  },
  {
    id: 'informatica',
    title: 'Informatica Certification',
    issuer: 'Informatica Center',
    year: '2023',
    badgeCode: 'INFA-SPEC',
    description: 'Enterprise data integration, mapping designer, workflow manager, and heterogeneous source-to-target data synchronization.'
  },
  {
    id: 'gcp-ace',
    title: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: '2024',
    badgeCode: 'GCP-ACE',
    description: 'Deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.'
  },
  {
    id: 'gcp-database',
    title: 'Professional Cloud Database Engineer',
    issuer: 'Google Cloud',
    year: '2025',
    badgeCode: 'GCP-PCDE',
    description: 'Designing, monitoring, and migrating scalable database solutions on GCP, including Cloud SQL, Spanner, and BigQuery.'
  },
  {
    id: 'gcp-bigquery-warehouse',
    title: 'Build a Data Warehouse with BigQuery',
    issuer: 'Google Cloud',
    year: '2024',
    badgeCode: 'BQ-DWH',
    description: 'Hands-on skill badge covering BigQuery data architecture, partitioned tables, federated queries, and scalable data warehousing.'
  }
];

export const UI_UX_SPOTLIGHT = {
  title: 'Centre of Excellence — UI/UX',
  role: 'Interface & Dashboard Design Specialist',
  period: 'Cross-Disciplinary Initiative',
  bullets: [
    'Designed intuitive, user-centric interfaces for web and mobile enterprise applications.',
    'Conducted user research, usability testing, and stakeholder interview sessions to uncover workflow friction.',
    'Built interactive prototypes, wireframes, and high-fidelity mockups in Figma and Adobe XD.',
    'Collaborated cross-functionally with frontend developers to implement responsive, accessible UI designs.',
    'Created data visualization dashboards to simplify complex data pipelines and analytical insights for business teams.',
    'Streamlined workflows with Agile methods, cutting turnaround time by 25% across design-to-development cycles.'
  ],
  metric: '25% Faster Turnaround',
  tools: ['Figma', 'Adobe XD', 'Agile / Scrum', 'Design Systems', 'Data Viz Dashboards', 'User Research']
};
