import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Igor</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://www.notion.so/e86eaf68cd44401da5a7c323ef418f50?pvs=4"
          target="_blank"
          className="btn">
          View CV
        </a>
      </div>
    </header>
  );
}

export default Header;
