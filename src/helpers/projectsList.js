import project01 from './../img/projects/News.jpg';
import project01B from './../img/projects/News-big.jpg';

import project02 from './../img/projects/Portfolio.jpg';
import project02B from './../img/projects/Portfolio-big.jpg';

import project03 from './../img/projects/Arrow_game.jpg';
import project03B from './../img/projects/Arrow_game-big.jpg';

import project04 from './../img/projects/03.jpg';
import project04B from './../img/projects/03-big.jpg';

import project05 from './../img/projects/02.jpg';
import project05B from './../img/projects/02-big.jpg';

import project06 from './../img/projects/01.jpg';
import project06B from './../img/projects/01-big.jpg';

const projects = [
  {
    id: 0,
    title: 'Portfolio website',
    skills: 'Skills: React, React Router, JavaScript',
    description:
      'Данный проект представляет собой сайт-портфолио с работами.  В проекте реализовано переключение между светлой и темной темами, которые не только изменяются визуально благодаря переключателю, но и автоматически адаптируются к настройкам темы вашей операционной системы.',
    img: project02,
    imgBig: project02B,
    link: 'https://frontend-portfolio-react-navy.vercel.app/',
    gitHubLink: 'https://github.com/igor-senichev/frontend-portfolio-react',
  },
  {
    id: 1,
    title: 'Arrow-game',
    skills: 'Skills: React, Redux Toolkit, TypeScript, Vite, Vitest, Material-UI',
    description:
      'В данном приложении реализована игра, где на экране рандомно отображаются стрелки. Пользователю нужно нажать соответствующие кнопки на клавиатуре. Для победы надо последовательно угадать 3 раза.',
    img: project03,
    imgBig: project03B,
    link: 'https://igor-senichev.github.io/react-arrow-game//',
    gitHubLink: 'https://github.com/igor-senichev/react-arrow-game',
  },
  {
    id: 2,
    title: 'World of News',
    skills: 'Skills: React, JavaScript, Vite',
    description:
      'Проект Мировых новостей показывает, как самые свежие новости (в левом разделе), так и раздел всех новостей, где можно выбирать раздел интересующих новостей, переходить по страницам и вводить в поиск интересующую вас новость.',
    img: project01,
    imgBig: project01B,
    link: 'https://news-react-dusky.vercel.app/',
    gitHubLink: 'https://github.com/igor-senichev/news-react',
  },
  // {
  //   id: 3,
  //   title: 'Tourist portal',
  //   skills: 'React, React Router, JavaScript',
  //   img: project04,
  //   imgBig: project04B,
  //   gitHubLink: 'https://github.com',
  // },
  // {
  //   id: 4,
  //   title: 'Landing',
  //   skills: 'React, JavaScript',
  //   img: project05,
  //   imgBig: project05B,
  //   gitHubLink: 'https://github.com',
  // },
  // {
  //   id: 5,
  //   title: 'Gaming community',
  //   skills: 'React, Redux Toolkit, TypeScript',
  //   img: project06,
  //   imgBig: project06B,
  //   gitHubLink: 'https://github.com',
  // },
];

export { projects };
