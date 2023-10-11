import './style.css';

import gitHub from './../../img/icons/gitHub.svg';
import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/i.senichev" target="_blank">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/igor_senichev" target="_blank">
                <img src={instagram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a href="https://github.com/igor-senichev" target="_blank">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/игорь-сеничев-6098b990" target="_blank">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 DevNexus.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
