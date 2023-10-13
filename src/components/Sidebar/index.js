import './index.scss';
import B from '../../assets/images/B.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img className='Bansi' src={B} alt="bansi"/>
    </Link>
    <nav>
      <NavLink exact={true} activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bansi-vaghasiya/'>
          <FontAwesomeIcon icon={faLinkedin} color='#ffffff'/>
        </a>
      </li>

      <li>
        <a target='_blank' rel='noreferrer' href='https://github.com/Bansi1007'>
          <FontAwesomeIcon icon={faGithub} color='#ffffff'/>
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
