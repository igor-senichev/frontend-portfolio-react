import Header from './../components/header/Header';
import Projects from './Projects';

function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <Projects />

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend skills</h2>
              <p>
                HTML, CSS, JavaScript, ReactJS, TypeScript, Redux, Redux Toolkit, MaterialUI,
                StyledComponents, GitHub, Vite
              </p>
            </li>

            {/* <!-- <li className="content-list__item">
      <h2 className="title-2">Backend</h2>
      <p>NodeJS, NextJS, MongoDB</p>
    </li> --> */}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
