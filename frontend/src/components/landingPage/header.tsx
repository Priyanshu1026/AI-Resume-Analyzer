'use client';

import Link from 'next/link';
import AnimatedLinkText from '@/components/animatedScrollText';

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
        <Link href="/" className="brand-cyber-glitch" id="brand16" data-text="Resumetrics">Resumetrics</Link>
      </div>

      <ul className="nav-links flex space-x-6">
        <li><Link href="#features"><AnimatedLinkText text="FEATURES" delay={0} /></Link></li>
        <li><Link href="#pricing"><AnimatedLinkText text="PRICING" delay={200} /></Link></li>
        <li><Link href="#about"><AnimatedLinkText text="ABOUT" delay={400} /></Link></li>
        <li><Link href="#contact"><AnimatedLinkText text="CONTACT" delay={600} /></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
