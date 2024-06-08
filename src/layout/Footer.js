import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  useEffect(() => {
    // This will execute once the component has mounted
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure this effect only runs once

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>

      {showScrollButton && (
        <div id="scrollup" style={{ color: "white" }} className="show" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}

      <footer className="footer bg-clr">
        <div className="container">
          <div className="bx-footer-detail">
            <div className="bx-copy">
              Copyright &copy;
              <a onClick={(e) => handleSubmit(e)} className="site-name" href="/"> Borox </a> all rights reserved. Powered by Borox.
            </div>
            <div className="bx-privacy">
              <a onClick={(e) => handleSubmit(e)} href="/">Privacy Policy</a>
              <a onClick={(e) => handleSubmit(e)} href="/">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
