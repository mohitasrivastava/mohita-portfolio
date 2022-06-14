// import { isContentEditable } from '@testing-library/user-event/dist/utils';
import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import img1 from './images/Untitled design.png';
import img2 from './images/thumb-fullstack-socialmedia-app-react-sanity.png';
import img3 from './images/smart-home-image.png';
import img4 from './images/thumb-pinterest-clone-reactjs.png';
import img5 from './images/form validation.png';
import img6 from './images/thumb-whatsappui-clone-nextjs.png';

export const Experience = [
  {
    id: 1,
    date: '2021 - present',
    iconsSrc: <IoCodeWorking />,
    title: 'Frontend Engineer',
    location: 'Mumbai , India',
    Company: 'Capgemini',
    description: 'UI Frontend Engineer, Visual Design, DOC manipulation ',
  },
  {
    id: 2,
    date: '2020/March - 2020/Dec',
    iconsSrc: <IoCodeWorking />,
    title: 'Executive engineer',
    location: 'Gurgaon',
    Comapany: 'ICN-India',
    description: 'Telecom Engineer',
  },
  {
    id: 3,
    date: '2019/June - 2019/August',
    iconsSrc: <IoCodeWorking />,
    title: 'Intern Embedded-System',
    location: 'Lucknow',
    Comapany: 'Softpro',
    description:
      'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
  },
  {
    id: 4,
    date: '2019 - 2019',
    iconsSrc: <IoCodeWorking />,
    title: 'HAL Training',
    location: 'Lucknow',
    Comapany: 'HAL',
    description: 'working of Aircraft',
  },
];

export const Projects = [
  {
    id: 1,
    name: 'News Fetching Website',
    imageSrc: img1,
    techs: 'Javascript, HTML, CSS, FetchApI',
    github: 'https://github.com/mohitasrivastava/NewsReading-Website.git',
  },
  {
    id: 2,
    name: 'E-commerce Website ',
    imageSrc: img2,
    techs: 'MERN Technology, Reactjs, Nodejs, HTML, CSS',
    github: 'https://github.com/mohitasrivastava/myawesomecart.git',
  },
  {
    id: 3,
    name: 'Smart Home',
    imageSrc: img3,
    techs: 'C, GSM, Atmega16,Sensors.',
    github: '#',
  },
  {
    id: 4,
    name: 'Responsive Website(iEducate) ',
    imageSrc: img4,
    techs: 'HTML, CSS, Javascript',
    github: 'https://github.com/mohitasrivastava/iEducate-.git',
  },
  {
    id: 5,
    name: 'Form Validation',
    imageSrc: img5,
    techs: 'HTML, CSS, JS',
    github: '#',
  },
  {
    id: 6,
    name: 'Whatsapp UI Clone',
    imageSrc: img6,
    techs: 'Nodejs, HTML, CSS, Socket.io, JS',
    github: '#',
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: 'GitHub',
    link: '#',
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: 'YouTube',
    link: '#',
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: 'Twitter',
    link: '#',
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/mohita-srivastava-aa4a07160/',
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: 'Whatsapp',
    link: '#',
  },
];
