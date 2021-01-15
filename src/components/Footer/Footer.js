import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/transparent.jpg';
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className={styles.middle}>
        <div className={styles.img}>
          <img src={logo} alt='' />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.info} style={{ display: 'flex' }}>
            <GoLocation
              style={{
                color: 'white',
                fontSize: '1.25rem',
                marginLeft: '2em',
                marginRight: '0.5em',
              }}
            />
            <span>
              <div>365 Calle La Placita </div>
              <div>Patillas, PR</div>
            </span>
          </div>
          <div className={styles.info} style={{ display: 'flex' }}>
            <BsPhone
              style={{
                color: 'white',
                fontSize: '1.25rem',
                marginLeft: '2em',
                marginRight: '0.5em',
              }}
            />
            <span>
              <div>(787)-123-4567</div>
            </span>
          </div>
          <div className={styles.info} style={{ display: 'flex' }}>
            <AiOutlineMail
              style={{
                color: 'white',
                fontSize: '1.25rem',
                marginLeft: '2em',
                marginRight: '0.5em',
              }}
            />
            <span>
              <div>elamanecermarket@gmail.com</div>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {new Date().getFullYear()} &copy; El Amanecer Fresh Market
      </div>
    </footer>
  );
};

export default Footer;
