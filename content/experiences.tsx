export interface Experience {
  title: string;
  image: string;
  position: string;
  start: Date;
  end: Date | string;
  highlights: string[];
  schedule: string;
}

const experiences: Experience[] = [
  {
    title: 'IMPACT FINANCE',
    image: '/experience/if.jpg',
    position: 'Founder & CEO',
    start: new Date('2022-05-13'),
    end: 'Current',
    highlights: [
      'Designed a platform that uses generative art to fund science',
      'Built NFT minting app on the Celo blockchain using NextJS',
      'Created all company branding and digital assets using Figma',
    ],
    schedule: 'Full Time',
  },
  {
    title: 'CITRINE INFORMATICS',
    image: '/experience/citrine.jpg',
    position: 'Project Manager',
    start: new Date('2022-02-1'),
    end: new Date('2022-06-10'),
    highlights: [
      "Managed customer integrations of Citrine's AI/ ML tools",
      'Co-created a new autonomous client engagement framework',
      'Led technical platform demos for Fortune-500 customers',
    ],
    schedule: 'Full Time',
  },
  {
    title: 'SOLDEX.AI',
    image: '/experience/soldex.jpg',
    position: 'Discord Manager',
    start: new Date('2022-01-10'),
    end: new Date('2022-06-10'),
    highlights: [
      'Built Discord server for community of several thousand users',
      'Integrated bots and automation for authentication and security',
      'Answered technical project questions from community members',
    ],
    schedule: 'Part Time',
  },
  {
    title: 'EPIC ADVANCED MATERIALS',
    image: '/experience/epic.jpg',
    position: 'Head of Product',
    start: new Date('2020-03-15'),
    end: new Date('2022-02-1'),
    highlights: [
      'Led scale-up design of a $1.2MM plasma-based synthesis reactor',
      'Built frontend of Python-based computer vision tool using React',
      'Led offshore team for backend tool development using Agile PM',
    ],
    schedule: 'Full Time',
  },
  {
    title: 'ACCENTURE',
    image: '/experience/accenture.jpg',
    position: 'Cybersecurity Consultant',
    start: new Date('2019-03-1'),
    end: new Date('2020-03-10'),
    highlights: [
      'Evaluated IAM system architectures to identify vulnerabilities',
      'Delivered holistic redesign strategies to Fortune-100 clients',
      'Developed Python tools to automate attribute update processes',
    ],
    schedule: 'Full Time',
  },
  {
    title: 'NANOARMOR',
    image: '/experience/nanoarmor.jpg',
    position: 'Technical Product Manager',
    start: new Date('2016-06-1'),
    end: new Date('2022-02-1'),
    highlights: [
      'Conducted FEA simulations of ballistic material performance',
      'Integrated AI tooling to accelerate material testing processes',
      'Authored multiple successful SBIR proposals for project funding',
    ],
    schedule: 'Part Time',
  },
  {
    title: 'LAWRENCE LIVERMORE LAB',
    image: '/experience/llnl.jpg',
    position: 'Graduate Intern',
    start: new Date('2017-07-10'),
    end: new Date('2018-10-27'),
    highlights: [
      'Conducted molecular dynamics simulations of lattice materials',
      "Ran simulations on the nation's most powerful supercomputers",
      'Created Python scripts and visualization tools for data analysis',
    ],
    schedule: 'Part Time',
  },
  {
    title: 'DRYWIRED',
    image: '/experience/drywired.jpg',
    position: 'Technical Product Manager',
    start: new Date('2016-06-15'),
    end: new Date('2019-03-10'),
    highlights: [
      'Evaluated product viability of patent licensing opportunities',
      'Served as lead technical rep for client meetings in US and abroad',
      'Managed team of undergraduate interns in chemical wet lab',
    ],
    schedule: 'Full Time',
  },
  {
    title: 'UCLA',
    image: '/experience/ucla.jpg',
    position: 'MS Computational Materials',
    start: new Date('2017-09-27'),
    end: new Date('2018-12-14'),
    highlights: [
      'Thesis: Structural Dependence of Shear Coupled Grain Boundary Motion in FCC Crystals - A Molecular Dynamics Study',
      'GPA: 3.9',
    ],
    schedule: 'Full Time',
  },
  {
    title: 'USC',
    image: '/experience/usc.jpg',
    position: 'BS Chemical Engineering',
    start: new Date('2012-09-15'),
    end: new Date('2016-05-13'),
    highlights: [
      'Senior Project: Technical Design and Business Viability Report of an Industrial-Scale Hydrogen Production Plant',
      'GPA: 3.5',
    ],
    schedule: 'Full Time',
  },
];

export default experiences;
