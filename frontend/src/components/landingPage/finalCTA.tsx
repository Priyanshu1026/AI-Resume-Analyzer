'use client';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const FinalCTA = () => {
    // useInView hook to detect when the component is in the viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will trigger only once
        threshold: 0.4,    //if value is 0.x, trigger when x*10% of the component is visible
    });

    return (
        // Attach the ref to the section. When this section is in view, 'inView' will become true.
        <section ref={ref} className="final-cta py-20 bg-gray-900 text-white">
            <div className="container text-center">
                {/* Heading with conditional animation classes */}
                <h2
                    className={`text-4xl font-extrabold mb-4 transform transition-all duration-700 ease-out 
                                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Ready to Transform Your Career?
                </h2>

                {/* Paragraph with conditional animation classes and a slight delay */}
                <p
                    className={`text-lg text-gray-400 mb-8 max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-200
                                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Join thousands of professionals who have already improved their resumes with our AI-powered analysis. Get started in seconds.
                </p>

                {/* Button with its own CSS class and conditional animation classes */}
                <Link
                    href="/analyze"
                    className={`cta-button transform transition-all duration-700 ease-out delay-300
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Get Started Free
                </Link>
            </div>
        </section>
    );
};

export default FinalCTA;