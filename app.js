/* Passa — shared shell: sidebar, copy buttons, data */

const PASSA_LOGO = `<img src="assets/Passa Logo@2x.png" alt="Passa Logo" style="height: 28px; max-width: 100%; object-fit: contain; display: block;" />`;

const APPROVALS_COUNT = 3;

const ICONS = {
  payments: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  approvals: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  logs: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/><path d="M18 21V10l-6-6H6a2 2 0 0 0-2 2v15"/></svg>`,
  policies: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  agents: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  rails: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>`,
  webhooks: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>`,
  apikeys: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>`,
  panelLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>`
};

const PASSA_NAV = [
  { label: 'Monitor', items: [
    { key: 'payments', label: 'Payments', href: 'index.html', icon: ICONS.payments },
    { key: 'approvals', label: 'Approvals', href: 'approval.html', badge: APPROVALS_COUNT, icon: ICONS.approvals },
    { key: 'logs', label: 'Logs', icon: ICONS.logs },
  ]},
  { label: 'Control', items: [
    { key: 'policies', label: 'Policies', href: 'policies.html', icon: ICONS.policies },
    { key: 'agents', label: 'Agents', icon: ICONS.agents },
    { key: 'rails', label: 'Rails', icon: ICONS.rails },
  ]},
  { label: 'Develop', items: [
    { key: 'webhooks', label: 'Webhooks', href: 'webhooks.html', icon: ICONS.webhooks },
    { key: 'apikeys', label: 'API keys', href: 'developers.html', icon: ICONS.apikeys },
  ]},
];

function renderSidebar() {
  const mount = document.getElementById('sidebar');
  if (!mount) return;
  const active = document.body.dataset.nav || '';
  const isCollapsed = localStorage.getItem('passa_sidebar_collapsed') === 'true';
  
  let html = `<aside class="sidebar ${isCollapsed ? 'collapsed' : ''}" id="app-sidebar">
    <div class="sb-brand">${PASSA_LOGO}</div>`;
  for (const group of PASSA_NAV) {
    html += `<div class="sb-label">${group.label}</div><div class="sb-group">`;
    for (const item of group.items) {
      const cls = 'sb-item' + (item.key === active ? ' active' : '');
      const badge = item.badge ? `<span class="sb-count">${item.badge}</span>` : '';
      const content = `<span class="sb-icon">${item.icon}</span><span class="sb-text">${item.label}</span>${badge}`;
      html += item.href
        ? `<a class="${cls}" href="${item.href}" title="${item.label}">${content}</a>`
        : `<span class="${cls}" title="${item.label}">${content}</span>`;
    }
    html += `</div>`;
  }
  html += `<div class="sb-foot">
             <div class="sb-profile"><span class="sb-avatar">AC</span><span class="sb-org">acme-dev</span></div>
             <button class="sb-toggle" id="sb-toggle" title="Toggle Sidebar">${ICONS.panelLeft}</button>
           </div></aside>`;
  mount.outerHTML = html;

  document.getElementById('sb-toggle')?.addEventListener('click', () => {
    const sb = document.getElementById('app-sidebar');
    sb.classList.toggle('collapsed');
    localStorage.setItem('passa_sidebar_collapsed', sb.classList.contains('collapsed'));
  });
}

/* Copy-to-clipboard buttons: <button class="copy-btn" data-copy="text">copy</button> */
function bindCopyButtons(root) {
  (root || document).querySelectorAll('[data-copy]').forEach((btn) => {
    if (btn._copyBound) return;
    btn._copyBound = true;
    btn.addEventListener('click', () => {
      try { navigator.clipboard.writeText(btn.dataset.copy); } catch (e) {}
      btn.textContent = 'copied ✓';
      clearTimeout(btn._copyTimer);
      btn._copyTimer = setTimeout(() => { btn.textContent = 'copy'; }, 1600);
    });
  });
}

/* Approvals dataset (Pending and Past 30 days) */
const PASSA_APPROVALS = [
  { id: 'appr_1Aa2bC', time: '14:38:12', date: 'Jul 19', user: 'usr_8Wb6tYcK', reason: 'Emergency server upgrade limit', merchant: 'AWS', amt: '$3,500.00', agent: 'devops-bot', st: 'pending', expires_in: '14m 59s' },
  { id: 'appr_2Xx3yZ', time: '14:30:05', date: 'Jul 19', user: 'usr_5Vd3pQzX', reason: 'Last minute travel flight exception', merchant: 'Delta Air Lines', amt: '$850.00', agent: 'travel-bot', st: 'pending', expires_in: '06m 12s' },
  { id: 'appr_3Mm4nN', time: '12:15:40', date: 'Jul 19', user: 'usr_7Tq5nWjL', reason: 'Client dinner over budget', merchant: 'Fogo de Chao', amt: '$420.00', agent: 'sales-bot', st: 'pending', expires_in: '02m 05s' },
  { id: 'appr_9Lp2mV', time: '14:05:00', date: 'Jul 18', user: 'usr_4Nc8wTjZ', reason: 'Team offsite lunch at iFood', merchant: 'iFood', amt: '$23.00', agent: 'errand-runner', st: 'completed' },
  { id: 'appr_4Nc8wT', time: '09:30:11', date: 'Jul 16', user: 'usr_2Fh8kRsN', reason: 'AWS Infrastructure Bill', merchant: 'AWS', amt: '$1,240.00', agent: 'devops-bot', st: 'declined' },
  { id: 'appr_7Tq5nW', time: '16:45:22', date: 'Jul 10', user: 'usr_9Kp2mVxR', reason: 'Software License Renewal', merchant: 'Figma', amt: '$85.00', agent: 'admin-assistant', st: 'completed' }
];

/* Payments dataset (Jul 18, 2026) */
const PASSA_PAYMENTS = [
  { id: 'pay_8fK2mQxT4vLp', time: '14:03:56', user: 'usr_4Nc8wTjZ', reason: "Ordering lunch for Saturday's team offsite", merchant: 'iFood', rail: 'PIX', amt: '$23.00', st: 'completed' },
  { id: 'pay_7Lm4nRwS9qXe', time: '14:02:40', user: 'usr_9Kp2mVxR', reason: 'Monthly transit top-up for commute card', merchant: 'Metrô SP', rail: 'PIX', amt: '$12.50', st: 'pending_approval' },
  { id: 'pay_6Jd8kTvN2mYc', time: '13:58:12', user: 'usr_7Tq5nWjL', reason: 'Grocery restock — same basket as last week', merchant: 'BigBasket', rail: 'UPI', amt: '$46.20', st: 'awaiting_rail' },
  { id: 'pay_5Hs3jQpM8wZb', time: '13:51:03', user: 'usr_2Fh8kRsN', reason: 'Electronics purchase outside allowed categories', merchant: 'Lazada', rail: 'GCASH', amt: '$310.00', st: 'declined' },
  { id: 'pay_3jW9rTnB7xKe', time: '13:44:37', user: 'usr_4Nc8wTjZ', reason: 'Weekly grocery restock from Rappi', merchant: 'Rappi', rail: 'CARD', amt: '$18.40', st: 'completed' },
  { id: 'pay_2Fg7hPnL5vXa', time: '13:39:58', user: 'usr_5Vd3pQzX', reason: 'Prescription refill pickup fee', merchant: 'Farma Pago', rail: 'PIX', amt: '$8.75', st: 'failed' },
  { id: 'pay_9Tb6wKmR3nYd', time: '13:31:20', user: 'usr_9Kp2mVxR', reason: 'Team dinner deposit for Friday', merchant: 'Swiggy', rail: 'UPI', amt: '$64.00', st: 'pending_approval' },
  { id: 'pay_4Xc5vJnQ8mWf', time: '13:27:44', user: 'usr_8Wb6tYcK', reason: 'Office snacks for sprint review', merchant: 'GrabFood', rail: 'GCASH', amt: '$31.90', st: 'completed' },
  { id: 'pay_1Zd4tHmP6kVg', time: '13:19:08', user: 'usr_7Tq5nWjL', reason: 'Lunch order — recurring weekday meal plan', merchant: 'Zomato', rail: 'UPI', amt: '$9.10', st: 'completed' },
  { id: 'pay_8Ye3sGlN5jUh', time: '13:04:51', user: 'usr_2Fh8kRsN', reason: 'Courier fee for document delivery', merchant: 'Loggi', rail: 'PIX', amt: '$6.20', st: 'awaiting_rail' },
  { id: 'pay_7Wf2rFkM4iTj', time: '12:56:33', user: 'usr_5Vd3pQzX', reason: 'Birthday cake pickup for teammate', merchant: 'iFood', rail: 'PIX', amt: '$27.35', st: 'completed' },
  { id: 'pay_6Vg1qEjL3hSk', time: '12:41:17', user: 'usr_8Wb6tYcK', reason: 'Late-night dinner — outside allowed hours', merchant: 'FoodPanda', rail: 'GCASH', amt: '$22.60', st: 'declined' },
];

const STATUS_ICONS = {
  completed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  pending_approval: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  awaiting_rail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  declined: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  failed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
};

function pillHtml(status, large) {
  const icon = STATUS_ICONS[status] || STATUS_ICONS.pending_approval;
  return `<span class="pill ${status}${large ? ' lg' : ''}">${icon}${status.replace('_', ' ')}</span>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  bindCopyButtons();
});
