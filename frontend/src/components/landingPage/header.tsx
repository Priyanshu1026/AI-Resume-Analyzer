'use client';

import Link from 'next/link';

const Header = () => (
  <header>
    <nav className="container flex justify-between items-center py-4">
      <div className="logo flex items-center gap-2 text-xl font-bold text-white">
        <div className="cube-loader">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        ResumeAI
      </div>

      <ul className="nav-links flex space-x-6">
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
