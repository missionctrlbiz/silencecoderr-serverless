import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/useAppContext'; 
import ContentLoader from 'react-content-loader';

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { state } = useAppContext(); // Access context
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

  // Skeleton Loader for Footer Name
  const FooterNameSkeleton = () => (
    <ContentLoader 
      speed={2}
      width={150}
      height={20}
      viewBox="0 0 150 20"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="150" height="20" />
    </ContentLoader>
  );

  return (
    <>

      {showScrollButton && (
        <div id="scrollup" style={{ color: "white" }} className="show" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}

<footer className="footer bg-clr" style={{ paddingBottom: '30px' }}>
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <div className="bx-footer-detail text-center">
            <div className="bx-copy">
              Copyright © {currentYear}{' '}
              <a onClick={handleSubmit} className="site-name" href="/">
                {state.loading ? (
                  <FooterNameSkeleton />
                ) : (
                  state.heroData.name // Assuming your name is in heroData
                )} 
              </a>{' '}
              All rights reserved. <br />
              Powered by <Link to="https://instagram.com/missionctrl.biz">MissionCTRL Creative Labs</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;