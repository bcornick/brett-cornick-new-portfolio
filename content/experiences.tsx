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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    schedule: 'Part Time',
  },
  {
    title: 'UCLA',
    image: '/experience/ucla.jpg',
    position: 'MS Computational Materials',
    start: new Date('2017-09-27'),
    end: new Date('2018-12-14'),
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    schedule: 'Full Time',
  },
];

export default experiences;
