export function Contributions() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Open Source Contributions</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="font-medium">Zustand DevTools Enhancer</h3>
          <p className="text-sm text-muted-foreground">Added plugin to improve debugging experience in large apps</p>
        </li>
        <li>
          <h3 className="font-medium">React Email Templates</h3>
          <p className="text-sm text-muted-foreground">Contributed responsive fixes for dark mode support</p>
        </li>
      </ul>
    </section>
  );
}