import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "public", "projects");

const publicProjects = [
  {
    name: "phylab",
    url: "https://phylab-fisica-i.vercel.app/",
    wait: 3500,
  },
  {
    name: "project-pulse",
    url: "https://project-pulse-mu.vercel.app/",
    wait: 3500,
  },
  {
    name: "amaranto-parfum",
    url: "https://amarantoparfum.com/",
    wait: 4500,
  },
];

async function captureMedsync(page) {
  const email = process.env.MEDSYNC_EMAIL;
  const password = process.env.MEDSYNC_PASSWORD;

  if (!email || !password) {
    console.warn("Skipping MedSync capture. Set MEDSYNC_EMAIL and MEDSYNC_PASSWORD to capture private screens.");
    return;
  }

  await page.goto("https://medsync-kappa.vercel.app/", { waitUntil: "networkidle", timeout: 60000 });
  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole("button", { name: /iniciar/i }).click();
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(2800);

  await page.screenshot({ path: path.join(outputDir, "medsync-dashboard.jpg"), type: "jpeg", quality: 84, fullPage: false });

  const views = [
    ["Cirugías", "medsync-cirugias.jpg"],
    ["Finanzas", "medsync-finanzas.jpg"],
    ["Inventario", "medsync-reportes.jpg"],
  ];

  for (const [label, file] of views) {
    await page.getByText(label, { exact: true }).first().click();
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.waitForTimeout(1800);
    await page.screenshot({ path: path.join(outputDir, file), type: "jpeg", quality: 84, fullPage: false });
  }

  console.log("Captured medsync private demo screens");
}

async function createPrivateMedsyncFallback(page) {
  await page.setContent(`
    <html>
      <head>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            width: 1440px;
            height: 960px;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            color: #edf7f5;
            background: #071015;
          }
          .app {
            display: grid;
            grid-template-columns: 250px 1fr;
            min-height: 100vh;
            background:
              radial-gradient(circle at 78% 10%, rgba(46, 196, 182, 0.18), transparent 34%),
              linear-gradient(135deg, #081015 0%, #101a23 55%, #071015 100%);
          }
          aside {
            padding: 34px 24px;
            border-right: 1px solid rgba(255,255,255,0.08);
            background: rgba(4, 10, 14, 0.72);
          }
          .brand {
            display: flex;
            gap: 12px;
            align-items: center;
            font-weight: 800;
            letter-spacing: 0.02em;
            font-size: 26px;
          }
          .mark {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: linear-gradient(135deg, #45e1c9, #6aa6ff);
          }
          nav { display: grid; gap: 10px; margin-top: 46px; }
          nav span {
            padding: 14px 16px;
            border-radius: 12px;
            color: #b8c7c9;
            background: rgba(255,255,255,0.035);
          }
          nav span:first-child { color: #061015; background: #7ce7d6; font-weight: 700; }
          main { padding: 36px; }
          header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 28px;
          }
          h1 { margin: 0 0 10px; font-size: 42px; letter-spacing: 0; }
          p { margin: 0; color: #aabbbd; font-size: 17px; }
          .pill {
            color: #9ff3e6;
            border: 1px solid rgba(124,231,214,.36);
            border-radius: 999px;
            padding: 10px 16px;
            font-weight: 700;
            background: rgba(124,231,214,.09);
          }
          .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
          .stat, .panel {
            border: 1px solid rgba(255,255,255,0.09);
            border-radius: 16px;
            background: rgba(255,255,255,0.055);
            box-shadow: 0 24px 70px rgba(0,0,0,0.24);
          }
          .stat { padding: 22px; }
          .label { color: #9cafb2; font-size: 13px; text-transform: uppercase; letter-spacing: .08em; }
          .value { margin-top: 12px; font-size: 34px; font-weight: 800; }
          .grid {
            display: grid;
            grid-template-columns: 1.2fr .8fr;
            gap: 16px;
            margin-top: 16px;
          }
          .panel { padding: 24px; min-height: 300px; }
          h2 { margin: 0 0 18px; font-size: 22px; }
          .bars { display: grid; gap: 14px; }
          .bar { height: 34px; border-radius: 999px; background: rgba(255,255,255,.07); overflow: hidden; }
          .bar span { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #7ce7d6, #75a7ff); }
          table { width: 100%; border-collapse: collapse; }
          td { padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,.08); color: #cbd8da; }
          td:last-child { text-align: right; color: #7ce7d6; font-weight: 700; }
          .timeline { display: grid; gap: 14px; }
          .item { padding: 16px; border-radius: 12px; background: rgba(255,255,255,.055); }
          .item strong { display: block; margin-bottom: 6px; }
        </style>
      </head>
      <body>
        <div class="app">
          <aside>
            <div class="brand"><div class="mark"></div>MedSync</div>
            <nav>
              <span>Dashboard</span><span>Pacientes</span><span>Cirugias</span><span>Finanzas</span><span>Inventario</span><span>Reportes</span>
            </nav>
          </aside>
          <main>
            <header>
              <div><h1>Panel hospitalario privado</h1><p>Vista representativa sin datos reales ni credenciales visibles.</p></div>
              <div class="pill">Proyecto en desarrollo</div>
            </header>
            <section class="stats">
              <div class="stat"><div class="label">Pacientes</div><div class="value">248</div></div>
              <div class="stat"><div class="label">Cirugias</div><div class="value">18</div></div>
              <div class="stat"><div class="label">Cuentas por cobrar</div><div class="value">Q 84K</div></div>
              <div class="stat"><div class="label">Inventario critico</div><div class="value">7</div></div>
            </section>
            <section class="grid">
              <div class="panel">
                <h2>Finanzas y reportes</h2>
                <div class="bars">
                  <div class="bar"><span style="width: 86%"></span></div>
                  <div class="bar"><span style="width: 64%"></span></div>
                  <div class="bar"><span style="width: 72%"></span></div>
                  <div class="bar"><span style="width: 48%"></span></div>
                </div>
              </div>
              <div class="panel">
                <h2>Cirugias programadas</h2>
                <div class="timeline">
                  <div class="item"><strong>08:30</strong>Quirofano 1 · Preparacion</div>
                  <div class="item"><strong>11:00</strong>Quirofano 2 · En proceso</div>
                  <div class="item"><strong>14:15</strong>Quirofano 1 · Seguimiento</div>
                </div>
              </div>
            </section>
            <section class="panel" style="margin-top: 16px; min-height: 190px;">
              <h2>Cuentas por cobrar</h2>
              <table>
                <tr><td>Paciente privado</td><td>Q 12,800</td></tr>
                <tr><td>Aseguradora</td><td>Q 31,500</td></tr>
                <tr><td>Procedimiento quirurgico</td><td>Q 22,100</td></tr>
              </table>
            </section>
          </main>
        </div>
      </body>
    </html>
  `, { waitUntil: "domcontentloaded" });
  await page.screenshot({ path: path.join(outputDir, "medsync-dashboard.jpg"), type: "jpeg", quality: 86, fullPage: true });
}

await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, deviceScaleFactor: 1 });

for (const project of publicProjects) {
  try {
    await page.goto(project.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(project.wait);
    await page.screenshot({
      path: path.join(outputDir, `${project.name}.jpg`),
      type: "jpeg",
      quality: 84,
      fullPage: false,
    });
    console.log(`Captured ${project.name}`);
  } catch (error) {
    console.warn(`Could not capture ${project.name}: ${error.message}`);
  }
}

await captureMedsync(page);

try {
  await fs.access(path.join(outputDir, "medsync-dashboard.jpg"));
} catch {
  await createPrivateMedsyncFallback(page);
}

await browser.close();
console.log("Project visuals ready.");
