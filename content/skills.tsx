export interface Skill {
  title: string;
  image: string;
  proficiency: number;
}

const skills: Skill[] = [
  { title: 'HTML', image: '/skills/html.png', proficiency: 5 },
  { title: 'CSS', image: '/skills/css.png', proficiency: 4 },
  { title: 'SASS', image: '/skills/sass.png', proficiency: 4 },
  { title: 'JAVASCRIPT', image: '/skills/js.png', proficiency: 4 },
  { title: 'TYPESCRIPT', image: '/skills/typescript.png', proficiency: 4 },
  { title: 'PYTHON', image: '/skills/python.png', proficiency: 3 },
  { title: 'REACT JS', image: '/skills/react.png', proficiency: 4 },
  { title: 'NEXT JS', image: '/skills/nextjs.png', proficiency: 4 },
  { title: 'SOLIDITY', image: '/skills/solidity.png', proficiency: 3 },
  { title: 'FIGMA', image: '/skills/figma.png', proficiency: 4 },
  { title: 'NOTION', image: '/skills/notion.png', proficiency: 4 },
  { title: 'DISCORD', image: '/skills/discord.png', proficiency: 4 },
  { title: 'AGILE PM', image: '/skills/agile.png', proficiency: 5 },
  { title: 'PROTOTYPING', image: '/skills/prototyping.png', proficiency: 4 },
  { title: 'TOKENOMICS', image: '/skills/tokenomics.png', proficiency: 3 },
  { title: 'STORYTELLING', image: '/skills/storytelling.png', proficiency: 5 },
];

export default skills;
