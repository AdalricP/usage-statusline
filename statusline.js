#!/usr/bin/env node
// Claude Code status line: subscription usage as bars.
let raw = '';
process.stdin.on('data', d => (raw += d)).on('end', () => {
  const s = JSON.parse(raw || '{}');
  const rl = s.rate_limits || {};
  const bar = p => {
    const n = Math.round(Math.min(100, p) / 10);
    return '█'.repeat(n) + '░'.repeat(10 - n);
  };
  const left = t => {
    if (!t) return '';
    const ms = (typeof t === 'number' ? (t < 1e12 ? t * 1000 : t) : Date.parse(t)) - Date.now();
    if (!(ms > 0)) return '';
    const h = Math.floor(ms / 3.6e6), m = Math.floor((ms % 3.6e6) / 6e4);
    return h >= 24 ? ` ${Math.floor(h / 24)}d${h % 24}h` : ` ${h}h${m}m`;
  };
  const part = (label, w) =>
    w && w.used_percentage != null
      ? `${label} ${bar(w.used_percentage)} ${Math.round(w.used_percentage)}%${left(w.resets_at)}`
      : `${label} –`;
  const model = s.model?.display_name || '';
  console.log([model, part('5h', rl.five_hour), part('week', rl.seven_day)].filter(Boolean).join('  '));
});
