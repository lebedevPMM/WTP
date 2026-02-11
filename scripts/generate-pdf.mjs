import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --bg: #e0e0e0;
    --border: #c4c4c4;
    --text: #1a1a1a;
    --text2: #555;
    --meta: #777;
    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --mono: "SF Mono", "Consolas", "Monaco", monospace;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    width: 210mm;
    min-height: 297mm;
    padding: 16mm 20mm 14mm 20mm;
    font-size: 9.5px;
    line-height: 1.35;
  }

  /* ---- HEADER ---- */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }

  .header-left h1 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 4px;
  }

  .header-left p {
    font-size: 9px;
    color: var(--text2);
    max-width: 340px;
    line-height: 1.4;
  }

  .header-right {
    text-align: right;
    padding-top: 4px;
  }

  .header-right .tag {
    font-family: var(--mono);
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--meta);
    margin-bottom: 6px;
  }

  .header-right .cta {
    display: inline-block;
    background: var(--text);
    color: #fff;
    font-size: 9px;
    font-weight: 500;
    padding: 5px 14px;
    border-radius: 12px;
    margin-top: 4px;
  }

  .brand-dot {
    width: 18px;
    height: 18px;
    border: 1px dashed var(--text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
  }

  .brand-dot::after {
    content: "";
    width: 3px;
    height: 3px;
    background: currentColor;
    border-radius: 50%;
  }

  /* ---- SECTION ---- */
  .section {
    margin-bottom: 12px;
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 7px;
  }

  .section-head h2 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .section-head .mono {
    font-family: var(--mono);
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--meta);
  }

  /* ---- BENEFIT CARDS (2x2) ---- */
  .cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .card {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 68px;
    position: relative;
  }

  .card-icon {
    width: 22px;
    height: 22px;
    border: 1px solid var(--text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    margin-bottom: 5px;
  }

  .card-icon.dashed { border-style: dashed; border-radius: 8px; }
  .card-icon.dotted { border-style: dotted; border-width: 2px; }

  .card h3 {
    font-size: 10.5px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .card p {
    font-size: 8px;
    color: var(--text2);
    line-height: 1.35;
    max-width: 90%;
  }

  .card .num {
    position: absolute;
    bottom: 8px;
    right: 10px;
    font-size: 10px;
    color: var(--meta);
  }

  /* ---- PROCESS LIST ---- */
  .list-group {
    border-top: 1px solid var(--border);
  }

  .list-row {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid var(--border);
  }

  .row-icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    font-size: 8px;
    font-weight: bold;
    flex-shrink: 0;
  }

  .row-icon.dark { background: #333; color: #fff; }
  .row-icon.accent { background: #cd3e30; color: #fff; }

  .row-content { flex: 1; }

  .row-title {
    font-size: 10px;
    font-weight: 500;
  }

  .row-meta {
    font-size: 8px;
    color: var(--text2);
    font-family: var(--mono);
  }

  .row-action {
    font-family: var(--mono);
    font-size: 8px;
    color: var(--meta);
    flex-shrink: 0;
  }

  .row-action::after { content: " →"; }

  /* ---- RISK POLICY ---- */
  .risk-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 8px;
  }

  .risk-card {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 12px;
    min-height: 55px;
  }

  .risk-card .ri {
    width: 20px;
    height: 20px;
    border: 1px solid var(--text);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    margin-bottom: 5px;
  }

  .risk-card .ri.dashed { border-style: dashed; }

  .risk-card h3 {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .risk-card p {
    font-size: 8px;
    color: var(--text2);
    line-height: 1.35;
  }

  .engagement-bar {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 7px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 9px;
  }

  .engagement-bar strong { font-weight: 600; }

  .engagement-bar .mono {
    font-family: var(--mono);
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--meta);
  }

  /* ---- FOOTER ---- */
  .footer {
    margin-top: auto;
    padding-top: 10px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-col {
    flex: 1;
  }

  .footer-label {
    font-family: var(--mono);
    font-size: 7px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--meta);
    margin-bottom: 3px;
  }

  .footer-value {
    font-size: 10px;
    font-weight: 500;
    color: var(--text);
    line-height: 1.3;
  }
</style>
</head>
<body>

<!-- ===== HEADER ===== -->
<div class="header">
  <div class="header-left">
    <div class="brand-dot"></div>
    <h1>Reliable execution<br>from intent to outcome.</h1>
    <p>WTP is an on-the-ground operator in the UAE. We run a banking-first process built around bankability, compliance, and predictable delivery without reputational risk.</p>
  </div>
  <div class="header-right">
    <div class="tag">UAE EXECUTION PARTNER ::: BROKERS & ADVISORS</div>
    <div class="cta">Request Partner Kit</div>
  </div>
</div>

<!-- ===== PARTNER BENEFITS ===== -->
<div class="section">
  <div class="section-head">
    <h2>Partner Benefits</h2>
    <span class="mono">Why WTP</span>
  </div>
  <div class="cards-grid">
    <div class="card">
      <div class="card-icon dashed">⊞</div>
      <div>
        <h3>Ownership Protection</h3>
        <p>We never bypass the partner. We don't sell directly around you.</p>
      </div>
      <div class="num">01</div>
    </div>
    <div class="card">
      <div class="card-icon">::</div>
      <div>
        <h3>Transparency</h3>
        <p>Clear status updates, scope change control, and defined checkpoints.</p>
      </div>
      <div class="num">02</div>
    </div>
    <div class="card">
      <div class="card-icon dotted">○</div>
      <div>
        <h3>Control</h3>
        <p>Decisions made upfront: can we proceed, and under what conditions?</p>
      </div>
      <div class="num">03</div>
    </div>
    <div class="card">
      <div class="card-icon">✦</div>
      <div>
        <h3>Quality</h3>
        <p>Optimized for banks and regulators, not "speed at any cost."</p>
      </div>
      <div class="num">04</div>
    </div>
  </div>
</div>

<!-- ===== DELIVERY PROCESS ===== -->
<div class="section">
  <div class="section-head">
    <h2>Delivery Process</h2>
    <span class="mono">4 Stages</span>
  </div>
  <div class="list-group">
    <div class="list-row">
      <div class="row-icon dark">1</div>
      <div class="row-content">
        <div class="row-title">Pre-screen</div>
        <div class="row-meta">Docs / KYC / Risk Map</div>
      </div>
      <div class="row-action">D: PRE-ACTION</div>
    </div>
    <div class="list-row">
      <div class="row-icon">2</div>
      <div class="row-content">
        <div class="row-title">Banking Scenario</div>
        <div class="row-meta">Routing / Requirements Selection</div>
      </div>
      <div class="row-action">D: STRATEGY</div>
    </div>
    <div class="list-row">
      <div class="row-icon">3</div>
      <div class="row-content">
        <div class="row-title">Delivery</div>
        <div class="row-meta">Setup / Accounts / Visas</div>
      </div>
      <div class="row-action">D: EXECUTION</div>
    </div>
    <div class="list-row">
      <div class="row-icon">4</div>
      <div class="row-content">
        <div class="row-title">Ongoing Support</div>
        <div class="row-meta">Retainer / Stability / LTV</div>
      </div>
      <div class="row-action">D: MAINTENANCE</div>
    </div>
  </div>
</div>

<!-- ===== RISK POLICY ===== -->
<div class="section">
  <div class="section-head">
    <h2>Risk Policy</h2>
    <span class="mono">Gatekeeping</span>
  </div>
  <div class="risk-grid">
    <div class="risk-card">
      <div class="ri">✓</div>
      <h3>We Accept</h3>
      <p>Transparent rationale, document readiness, realistic expectations.</p>
    </div>
    <div class="risk-card">
      <div class="ri dashed">⚠</div>
      <h3>Conditions Apply</h3>
      <p>High risk or complex structures require enhanced control and fixed scope.</p>
    </div>
  </div>
  <div class="engagement-bar">
    <div><strong>Engagement Models:</strong> Referral (Commission) or White-label (Subcontractor)</div>
    <span class="mono">SELECT MODEL →</span>
  </div>
</div>

<!-- ===== PRODUCT LINES ===== -->
<div class="section">
  <div class="section-head">
    <h2>Product Lines</h2>
    <span class="mono">Scope</span>
  </div>
  <div class="list-group">
    <div class="list-row">
      <div class="row-icon accent">B</div>
      <div class="row-content">
        <div class="row-title">Banking</div>
        <div class="row-meta">Personal & Corporate, Payments, Compliance</div>
      </div>
      <div class="row-action">VIEW</div>
    </div>
    <div class="list-row">
      <div class="row-icon">S</div>
      <div class="row-content">
        <div class="row-title">Business Setup</div>
        <div class="row-meta">Registration, Licensing, Tax</div>
      </div>
      <div class="row-action">VIEW</div>
    </div>
    <div class="list-row">
      <div class="row-icon">R</div>
      <div class="row-content">
        <div class="row-title">Residency</div>
        <div class="row-meta">Visas, Emirates ID</div>
      </div>
      <div class="row-action">VIEW</div>
    </div>
    <div class="list-row">
      <div class="row-icon">A</div>
      <div class="row-content">
        <div class="row-title">Assets & Wealth</div>
        <div class="row-meta">Real Estate, Wills, Foundations</div>
      </div>
      <div class="row-action">VIEW</div>
    </div>
  </div>
</div>

<!-- ===== FOOTER ===== -->
<div class="footer">
  <div class="footer-col">
    <div class="footer-label">Pilot Program</div>
    <div class="footer-value">Get the Partner Kit and run a case</div>
  </div>
  <div class="footer-col">
    <div class="footer-label">Contact</div>
    <div class="footer-value">Telegram / Email</div>
  </div>
  <div class="footer-col">
    <div class="footer-label">Update</div>
    <div class="footer-value">New Banking Scenarios added</div>
  </div>
</div>

</body>
</html>`;

(async () => {
  const outputPath = path.join(__dirname, '..', 'WTP_One_Pager.pdf');
  const screenshotPath = path.join(__dirname, '..', 'WTP_One_Pager_preview.png');

  console.log('🚀 Generating PDF...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Load the print-optimized HTML directly
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Generate PDF — A4, no margins (handled in CSS)
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log('✅ PDF saved:', outputPath);

  // ---- VERIFICATION: take a screenshot for visual QA ----
  await page.setViewport({ width: 794, height: 1123 }); // A4 at 96 DPI
  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });

  console.log('📸 Preview screenshot saved:', screenshotPath);

  // ---- VERIFICATION: check for overflow / clipping issues ----
  const diagnostics = await page.evaluate(() => {
    const body = document.body;
    const bodyRect = body.getBoundingClientRect();
    const pageHeightMM = 297;
    const pagePaddingMM = 30; // 16mm top + 14mm bottom
    const usableHeightMM = pageHeightMM - pagePaddingMM;
    const dpi = 96;
    const mmPerPx = 25.4 / dpi;
    const contentHeightMM = bodyRect.height * mmPerPx;

    const sections = Array.from(document.querySelectorAll('.section, .header, .footer'));
    const overflows = [];

    sections.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom > bodyRect.height) {
        const tag = el.className || el.tagName;
        overflows.push(tag + ' extends beyond body');
      }
    });

    // Check for overlapping siblings
    const overlaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const a = sections[i].getBoundingClientRect();
      const b = sections[i + 1].getBoundingClientRect();
      if (a.bottom > b.top + 2) {
        overlaps.push(
          (sections[i].className || 'el') + ' overlaps with ' + (sections[i + 1].className || 'el')
        );
      }
    }

    return {
      contentHeightMM: Math.round(contentHeightMM),
      usableHeightMM,
      fitsOnOnePage: contentHeightMM <= pageHeightMM,
      overflows,
      overlaps,
      sectionCount: sections.length,
    };
  });

  console.log('');
  console.log('─── DESIGN VERIFICATION ───');
  console.log('Content height:', diagnostics.contentHeightMM + 'mm');
  console.log('Page usable area:', diagnostics.usableHeightMM + 'mm');
  console.log('Fits on one page:', diagnostics.fitsOnOnePage ? '✅ YES' : '❌ NO');
  console.log('Sections found:', diagnostics.sectionCount);

  if (diagnostics.overlaps.length > 0) {
    console.log('❌ OVERLAPPING ELEMENTS:');
    diagnostics.overlaps.forEach((o) => console.log('   •', o));
  } else {
    console.log('✅ No overlapping elements');
  }

  if (diagnostics.overflows.length > 0) {
    console.log('❌ OVERFLOWING ELEMENTS:');
    diagnostics.overflows.forEach((o) => console.log('   •', o));
  } else {
    console.log('✅ No overflowing elements');
  }

  console.log('───────────────────────────');

  await browser.close();

  if (!diagnostics.fitsOnOnePage || diagnostics.overlaps.length > 0 || diagnostics.overflows.length > 0) {
    console.log('');
    console.log('⚠️  Issues detected — review WTP_One_Pager_preview.png');
    process.exit(1);
  } else {
    console.log('');
    console.log('🎉 All checks passed. PDF is clean.');
  }
})();
