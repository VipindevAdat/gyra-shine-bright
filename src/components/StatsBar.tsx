const stats = [
  { value: "5+", label: "Countries" },
  { value: "2,000+", label: "Students" },
  { value: "100+", label: "Mentors & Advisors" },
  { value: "100+", label: "Partner Schools" },
];

const StatsBar = () => (
  <section className="bg-gradient-hero py-16">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="animate-count-up">
            <div className="text-3xl lg:text-4xl font-heading font-extrabold text-primary-foreground mb-1">
              {s.value}
            </div>
            <div className="text-sm text-primary-foreground/70 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
