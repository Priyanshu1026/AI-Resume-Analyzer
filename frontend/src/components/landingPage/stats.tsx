'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Stat({ value, label }: { value: string; label: string }) {
    const { ref, inView } = useInView({
        triggerOnce: true, // animate only once
        threshold: 0.5, // trigger when 50% visible
    });

    const isNumber = /^\d+/.test(value);
    const endValue = parseFloat(value.replace(/[^\d.]/g, ''));
    const suffix = value.replace(/[\d.]/g, '');

    return (
        <div className="stat-item" ref={ref}>
            <h3 className="text-3xl font-bold">
                {isNumber && inView ? (
                    <>
                        <CountUp end={endValue} duration={2.5} />
                        {suffix}
                    </>
                ) : (
                    value
                )}
            </h3>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    );
}

const Stats = () => (
    <section className="stats py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <Stat value="10000+" label="Resumes Analyzed" />
            <Stat value="95%" label="User Satisfaction" />
            <Stat value="3" label="More Interviews (x)" />
            <Stat value="24" label="AI Available (hrs/day)" />
        </div>
    </section>
);

export default Stats;
