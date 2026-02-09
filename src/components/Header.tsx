import React, { useState, useEffect } from 'react';
import './header.css';

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Sections found in the code or implicit
  // Replacing old links with the site's actual links but structure of new header
  const links = [
    { name: 'Our Services', href: '#' },
    { name: 'Our Creations', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Help & Guidance', href: '#' },
  ];

  return (
    <header className={`main_h ${sticky ? 'sticky' : ''} ${mobileMenuOpen ? 'open-nav' : ''}`}>
      <div className="row">
        <a className="logo" href="#">DIY DEALER DESIGNS</a>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={closeMobileMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
