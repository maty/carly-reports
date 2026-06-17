import fs from 'fs';
import path from 'path';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function parseFilename(filename, reportsDir) {
  let name = filename.replace(/\.html$/, '');

  // Extract date YYYY-MM-DD from filename
  let date = null;
  const dateMatch = name.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (dateMatch) {
    const [, y, m, d] = dateMatch;
    date = `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`;
    name = name.replace(dateMatch[0], '').replace(/-+$/, '').trim();
  }

  // Fallback to file modification date if no date in filename
  if (!date && reportsDir) {
    try {
      const stat = fs.statSync(path.join(reportsDir, filename));
      const mtime = stat.mtime;
      date = `${MONTHS[mtime.getMonth()]} ${mtime.getDate()}, ${mtime.getFullYear()}`;
    } catch (_) {}
  }

  // Remove common prefixes
  name = name.replace(/^[Cc]arly[\s—\-_]+/, '');

  // Clean separators and capitalize
  name = name
    .replace(/[_\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, l => l.toUpperCase());

  // Detect category from original filename
  const lower = filename.toLowerCase();
  let category = 'Other';
  if (lower.includes('llm') || lower.includes('visibility') || lower.includes('ai-')) {
    category = 'AI Visibility';
  } else if (lower.includes('voucher')) {
    category = 'Voucher Reports';
  } else if (
    lower.includes('campaign') || lower.includes('valentine') ||
    lower.includes('xmas') || lower.includes('flash')
  ) {
    category = 'Campaign Performance';
  }

  return { file: filename, name, date, category };
}

const CATEGORY_ORDER = ['AI Visibility', 'Campaign Performance', 'Voucher Reports', 'Other'];
const CATEGORY_COLORS = {
  'AI Visibility': '#6366f1',
  'Campaign Performance': '#0ea5e9',
  'Voucher Reports': '#10b981',
  'Other': '#f59e0b',
};

export default function Home() {
  const reportsDir = path.join(process.cwd(), 'public', 'reports');
  const files = fs.readdirSync(reportsDir).filter(f => f.endsWith('.html'));

  const reports = files.map(f => parseFilename(f, reportsDir));

  // Group by category
  const grouped = {};
  for (const report of reports) {
    if (!grouped[report.category]) grouped[report.category] = [];
    grouped[report.category].push(report);
  }

  // Sort newest first within each category
  for (const items of Object.values(grouped)) {
    items.sort((a, b) => {
      if (!a.date && !b.date) return a.name.localeCompare(b.name);
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });
  }

  const categories = CATEGORY_ORDER.filter(c => grouped[c]);

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, #6366f1, #0ea5e9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: 18,
          }}>C</div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: '#111' }}>Carly Reports</h1>
        </div>
        <p style={{ margin: 0, color: '#6b7280', fontSize: 15 }}>
          Internal marketing reports — restricted access
        </p>
      </div>

      {/* Report groups */}
      {categories.map(categoryName => {
        const color = CATEGORY_COLORS[categoryName];
        return (
          <section key={categoryName} style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 4, height: 20, borderRadius: 2, background: color }} />
              <h2 style={{
                margin: 0, fontSize: 15, fontWeight: 600, color: '#374151',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                {categoryName}
              </h2>
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {grouped[categoryName].map(report => (
                <a
                  key={report.file}
                  href={`/reports/${encodeURIComponent(report.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-card"
                  style={{ '--category-color': color }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 20 }}>📊</span>
                    <span style={{ fontWeight: 500, color: '#111', fontSize: 15 }}>{report.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {report.date && (
                      <span style={{ fontSize: 13, color: '#9ca3af' }}>{report.date}</span>
                    )}
                    <span style={{ fontSize: 13, color, fontWeight: 500 }}>View →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      <footer style={{
        marginTop: 60, paddingTop: 20, borderTop: '1px solid #e5e7eb',
        color: '#9ca3af', fontSize: 13, textAlign: 'center',
      }}>
        Carly Internal Reports · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
