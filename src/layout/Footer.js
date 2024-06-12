import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/useAppContext';

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { state } = useAppContext();
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollButton && (
        <div
          id="scrollup"
          style={{ color: 'white' }}
          className="show"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}

      <footer className="footer bg-clr" style={{ paddingBottom: '30px' }}>
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <div className="bx-footer-detail text-center">
            <div className="bx-copy">
              Copyright © {currentYear}{' '}
              {state.aboutData?.name && (
                <a onClick={handleSubmit} className="site-name" href="/">
                  {state.aboutData.name}.
                </a>
              )}{' '}
              All rights reserved. <br />
              Powered by{' '}
              <Link to="https://instagram.com/missionctrl.biz">
                MissionCTRL Creative Labs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;