export function Projects() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      {/* Map over project data here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-medium">Portfolio website</h3>
          <p className="text-sm text-muted-foreground">
            I'm creating my portfolio using NextJS and TailwindCSS as I learn.
          </p>
        </div>
      </div>
    </section>
  );
}