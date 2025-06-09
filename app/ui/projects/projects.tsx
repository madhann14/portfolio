export function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-medium">Dundie Awards</h3>
          <p className="text-sm text-muted-foreground">
            Gamified employee recognition system inspired by The Office. Built with React, Zustand, Tailwind.
          </p>
        </div>
        <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-medium">Mifflin Metrics</h3>
          <p className="text-sm text-muted-foreground">
            Real-time dashboard for office performance metrics using Next.js and Chart.js
          </p>
        </div>
      </div>
    </section>
  );
}