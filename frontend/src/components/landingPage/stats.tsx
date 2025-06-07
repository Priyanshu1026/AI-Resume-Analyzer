'use client';
function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="stat-item">
            <h3 className="text-3xl font-bold">{value}</h3>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    );
}
const Stats = () => (
    <section className="stats py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <Stat value="10K+" label="Resumes Analyzed" />
            <Stat value="95%" label="User Satisfaction" />
            <Stat value="3x" label="More Interviews" />
            <Stat value="24/7" label="AI Available" />
        </div>
    </section>
);

export default Stats;
