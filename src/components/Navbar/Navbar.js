import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { MdMessage } from 'react-icons/md';
import { GiMeat, GiFruitBowl } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { CSSTransition } from 'react-transition-group';
import display from '../../transitions/display.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const handleNavToggle = () => {
    setIsNavToggle((prev) => {
      return !prev;
    });
  };
  return (
    <div className={styles.navBar}>
      <h1 className={styles.memo}>
        Gran selección de frutas y vegetales frescos.
      </h1>
      <div className={styles.navSearch}>
        <h1 className={styles.name}>
          El Amanecer{' '}
          <div className={styles.fresh} style={{ color: '#fe7621' }}>
            Fresh Market
          </div>
        </h1>
        <IoIosArrowDown
          onClick={handleNavToggle}
          className={styles.downArrow}
        />
        <div className={styles.img}>
          <img src={logo} alt='' />
        </div>
        <input type='text' placeholder='Busqueda...' />
      </div>
      <hr />
      <ul className={styles.navLinks}>
        <li>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            Inicio
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/carnes'>
            Carnes
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/vegetales'
          >
            Vegetales
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/frutas'>
            Frutas
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/contact'
          >
            Contactanos
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/about'>
            Sobre Nosotros
          </Link>
        </li>
      </ul>
      <CSSTransition
        in={isNavToggle}
        unmountOnExit
        timeout={500}
        classNames={display}
      >
        <div className={styles.dropDownMenu}>
          <ul>
            <li style={{ marginBottom: '1.5em' }}>
              <ImCross onClick={handleNavToggle} className={styles.menuCross} />{' '}
              Market
            </li>
            <li>
              <AiFillHome className={styles.icon} />
              <Link
                onClick={handleNavToggle}
                style={{ textDecoration: 'none', color: 'black' }}
                to='/'
              >
                Inicio
              </Link>
            </li>
            <li>
              <GiMeat className={styles.icon} />
              <Link
                onClick={handleNavToggle}
                style={{ textDecoration: 'none', color: 'black' }}
                to='/carnes'
              >
                Carnes
              </Link>
            </li>
            <li>
              <FaCarrot className={styles.icon} />
              <Link
                onClick={handleNavToggle}
                style={{ textDecoration: 'none', color: 'black' }}
                to='/vegetales'
              >
                Vegetales
              </Link>
            </li>
            <li>
              <GiFruitBowl className={styles.icon} />
              <Link
                onClick={handleNavToggle}
                style={{ textDecoration: 'none', color: 'black' }}
                to='/frutas'
              >
                Frutas
              </Link>
            </li>
            <li>
              <MdMessage className={styles.icon} />
              <Link
                onClick={handleNavToggle}
                style={{ textDecoration: 'none', color: 'black' }}
                to='/contact'
              >
                Contactanos
              </Link>
            </li>
            <li>
              <AiFillInfoCircle className={styles.icon} />
              <Link
                onClick={handleNavToggle}
                style={{ textDecoration: 'none', color: 'black' }}
                to='/about'
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
