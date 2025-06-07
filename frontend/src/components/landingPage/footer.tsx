'use client';

import Link from 'next/link';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
            <div className="logo text-xl font-bold">ResumeAI</div>
            <ul className="footer-links flex space-x-4 mt-4 md:mt-0">
                <li><Link href="#privacy">Privacy</Link></li>
                <li><Link href="#terms">Terms</Link></li>
                <li><Link href="#support">Support</Link></li>s
                <li><Link href="#blog">Blog</Link></li>
            </ul>
            <div className="mt-4 md:mt-0">&copy; 2025 ResumeAI. All rights reserved.</div>
        </div>
    </footer>
);

export default Footer;
