import React, { useState, useEffect } from 'react';

function AnimatedHead() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = `
    .animated-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #333;
      color: white;
      transition: background-color 0.3s ease;
    }

    .animated-header.scrolled {
      background-color: #555;
    }

    nav ul {
      list-style: none;
      display: flex;
    }

    nav li {
      margin-right: 20px;
      cursor: pointer;
    }
    /* Add additional styling as needed */
  `;

  return (
    <>
      <style>{styles}</style>
      <header className={`animated-header ${isScrolled ? 'scrolled' : ''}`}>
        <h1>Your Logo</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default AnimatedHead;
