'use client';

import Link from 'next/link';

const Footer = () => (
  <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20"></div>
      <div className="absolute top-4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>
    
    {/* Decorative top border */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        
        {/* Logo and tagline section */}
        <div className="flex flex-col space-y-4">
          <div className="group cursor-pointer">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
              Resumetrics
            </h3>
            <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
              AI-powered resume optimization
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4">
            <Link href="#instagram" className="group p-2 rounded-lg bg-gray-800/50 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C4.85 2 2.5 4.35 2.5 7.25v9.5C2.5 19.65 4.85 22 7.75 22h8.5c2.9 0 5.25-2.35 5.25-5.25v-9.5C21.5 4.35 19.15 2 16.25 2h-8.5zm0 1.5h8.5c2.075 0 3.75 1.675 3.75 3.75v9.5c0 2.075-1.675 3.75-3.75 3.75h-8.5c-2.075 0-3.75-1.675-3.75-3.75v-9.5c0-2.075 1.675-3.75 3.75-3.75zm8.75 2.25a.75.75 0 0 0 0 1.5h.005a.75.75 0 0 0 0-1.5H16.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>  
              </svg>
            </Link>
            <Link href="#linkedin" className="group p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-600/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link href="#github" className="group p-2 rounded-lg bg-gray-800/50 hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="flex flex-col space-y-3">
            <h4 className="text-lg font-semibold text-purple-400">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Features</Link></li>
              <li><Link href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Pricing</Link></li>
              <li><Link href="#api" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">API</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-lg font-semibold text-cyan-400">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#help" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Blog</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-lg font-semibold text-emerald-400">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#privacy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Privacy</Link></li>
              <li><Link href="#terms" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Terms</Link></li>
              <li><Link href="#cookies" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="mt-12 pt-8 border-t border-gray-700/50">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            &copy; 2025 Resumetrics. All rights reserved.
          </div>
          
          {/* Newsletter signup */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-sm">Stay updated:</span>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-l-lg text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-r-lg text-sm hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating particles */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/3 left-3/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-1500"></div>
    </div>
  </footer>
);

export default Footer;