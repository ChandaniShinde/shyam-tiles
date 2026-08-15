export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        color-scheme: light dark;
        --page-bg: #f8fafc;
        --page-fg: #111827;
        --muted-fg: #4b5563;
        --card-bg: #ffffff;
        --card-border: #d1d5db;
        --primary-bg: #111827;
        --primary-fg: #ffffff;
        --secondary-bg: #ffffff;
        --secondary-fg: #111827;
        --secondary-border: #d1d5db;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --page-bg: #0f172a;
          --page-fg: #f8fafc;
          --muted-fg: #cbd5e1;
          --card-bg: #111827;
          --card-border: #334155;
          --primary-bg: #f8fafc;
          --primary-fg: #111827;
          --secondary-bg: #111827;
          --secondary-fg: #f8fafc;
          --secondary-border: #334155;
        }
      }
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: var(--page-bg); color: var(--page-fg); display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 1rem; box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: var(--muted-fg); margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: var(--primary-bg); color: var(--primary-fg); }
      .secondary { background: var(--secondary-bg); color: var(--secondary-fg); border-color: var(--secondary-border); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
