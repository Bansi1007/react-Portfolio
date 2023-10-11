import './index.scss';
import logo from '../../assets/images/logo.png';
import Bansi from '../../assets/images/bansi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={logo} alt="logo"/>
      <img className='Bansi' src={Bansi} alt="bansi"/>
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
  </div>
);

export default Sidebar;
