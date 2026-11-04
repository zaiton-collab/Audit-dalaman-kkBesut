// ============================================================
//  DATA DUMMY — Dashboard Audit KK Besut 2026
// ============================================================

const DATA = {
  audits: [
    { id: "A001", tajuk: "Audit Kewangan Q1",      auditor: "Ahmad Farid",  mula: "01/01/2026", tamat: "15/01/2026", status: "Selesai",       pct: 100 },
    { id: "A002", tajuk: "Audit Perolehan",         auditor: "Siti Nora",   mula: "10/02/2026", tamat: "28/02/2026", status: "Selesai",       pct: 100 },
    { id: "A003", tajuk: "Audit Aset Tetap",        auditor: "Razif Hamdan",mula: "01/03/2026", tamat: "31/03/2026", status: "Dalam Proses",  pct: 65  },
    { id: "A004", tajuk: "Audit ICT",               auditor: "Nurul Ain",   mula: "15/04/2026", tamat: "30/04/2026", status: "Tertangguh",    pct: 30  },
    { id: "A005", tajuk: "Audit Sumber Manusia",    auditor: "Ahmad Farid", mula: "01/05/2026", tamat: "31/05/2026", status: "Belum Mula",    pct: 0   },
    { id: "A006", tajuk: "Audit Perbelanjaan Q2",   auditor: "Siti Nora",   mula: "01/06/2026", tamat: "30/06/2026", status: "Selesai",       pct: 100 },
    { id: "A007", tajuk: "Audit Pengurusan Risiko", auditor: "Razif Hamdan",mula: "01/07/2026", tamat: "31/07/2026", status: "Dalam Proses",  pct: 45  },
  ],

  findings: [
    { id: "P001", audit: "A001", penemuan: "Resit tidak difailkan dengan betul",    kategori: "Dokumentasi", risiko: "Sederhana", status: "Tindakan Diambil" },
    { id: "P002", audit: "A001", penemuan: "Pembayaran lewat kepada pembekal",      kategori: "Kewangan",    risiko: "Tinggi",    status: "Belum Selesai"   },
    { id: "P003", audit: "A002", penemuan: "Sebut harga tidak mencukupi",           kategori: "Perolehan",   risiko: "Tinggi",    status: "Dalam Tindakan"  },
    { id: "P004", audit: "A002", penemuan: "Kontrak tamat tempoh",                  kategori: "Perolehan",   risiko: "Sederhana", status: "Selesai"          },
    { id: "P005", audit: "A003", penemuan: "Aset tidak berlabel",                   kategori: "Aset",        risiko: "Rendah",    status: "Dalam Tindakan"  },
    { id: "P006", audit: "A003", penemuan: "Rekod aset tidak dikemaskini",          kategori: "Dokumentasi", risiko: "Sederhana", status: "Belum Selesai"   },
    { id: "P007", audit: "A004", penemuan: "Sistem ICT tidak mempunyai backup",     kategori: "ICT",         risiko: "Tinggi",    status: "Belum Selesai"   },
    { id: "P008", audit: "A006", penemuan: "Kelulusan perbelanjaan tidak lengkap",  kategori: "Kewangan",    risiko: "Sederhana", status: "Selesai"          },
  ],

  actions: [
    { id: "T001", penemuan: "Pembayaran lewat kepada pembekal",   pic: "Ketua Unit Kewangan",  tarikh: "30/04/2026", status: "Lampau Tarikh" },
    { id: "T002", penemuan: "Sebut harga tidak mencukupi",        pic: "Pegawai Perolehan",    tarikh: "15/05/2026", status: "Lampau Tarikh" },
    { id: "T003", penemuan: "Rekod aset tidak dikemaskini",       pic: "Pegawai Aset",         tarikh: "30/06/2026", status: "Akan Datang"   },
    { id: "T004", penemuan: "Sistem ICT tidak mempunyai backup",  pic: "Pegawai ICT",          tarikh: "31/07/2026", status: "Akan Datang"   },
    { id: "T005", penemuan: "Resit tidak difailkan dengan betul", pic: "Penolong Tadbir",      tarikh: "15/04/2026", status: "Lampau Tarikh" },
  ],

  auditors: [
    { nama: "Ahmad Farid",   jawatan: "Auditor Kanan",  audit: 8, selesai: 6, status: "Aktif" },
    { nama: "Siti Nora",     jawatan: "Auditor",        audit: 6, selesai: 5, status: "Aktif" },
    { nama: "Razif Hamdan",  jawatan: "Auditor",        audit: 5, selesai: 3, status: "Aktif" },
    { nama: "Nurul Ain",     jawatan: "Auditor Muda",   audit: 3, selesai: 1, status: "Aktif" },
  ],

  trend: {
    bulan: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"],
    nilai: [65, 70, 68, 72, 75, 78, 74, 80, 83, 79, null, null]
  }
};

// ============================================================
//  NAVIGATION
// ============================================================
const titles = {
  overview: "Ringkasan Eksekutif",
  audits:   "Senarai Audit",
  findings: "Penemuan Audit",
  actions:  "Tindakan Susulan",
  auditors: "Senarai Auditor"
};

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const sec = item.dataset.section;
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    item.classList.add("active");
    document.getElementById("section-" + sec).classList.add("active");
    document.getElementById("page-title").textContent = titles[sec];
  });
});

// ============================================================
//  HELPERS
// ============================================================
function statusBadge(s) {
  const map = {
    "Selesai":        "badge green",
    "Dalam Proses":   "badge yellow",
    "Tertangguh":     "badge red",
    "Belum Mula":     "badge grey",
    "Tindakan Diambil":"badge blue",
    "Belum Selesai":  "badge red",
    "Dalam Tindakan": "badge yellow",
    "Lampau Tarikh":  "badge red",
    "Akan Datang":    "badge yellow",
    "Aktif":          "badge green",
  };
  return `<span class="${map[s] || 'badge grey'}">${s}</span>`;
}

function riskBadge(r) {
  const map = { "Tinggi": "badge red", "Sederhana": "badge yellow", "Rendah": "badge green" };
  return `<span class="${map[r] || 'badge grey'}">${r}</span>`;
}

function progressBar(pct) {
  const cls = pct === 100 ? "progress-fill green" : pct >= 50 ? "progress-fill yellow" : "progress-fill red";
  return `<div class="progress-wrap"><div class="${cls}" style="width:${pct}%"></div></div><small>${pct}%</small>`;
}

function buildTable(id, headers, rows) {
  const table = document.getElementById(id);
  table.innerHTML = `
    <thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  `;
}

// ============================================================
//  TABLES
// ============================================================
buildTable("audit-table",
  ["ID", "Tajuk Audit", "Auditor", "Tarikh Mula", "Tarikh Tamat", "Status", "Kemajuan"],
  DATA.audits.map(a => [a.id, a.tajuk, a.auditor, a.mula, a.tamat, statusBadge(a.status), progressBar(a.pct)])
);

buildTable("findings-table",
  ["ID", "Audit", "Penemuan", "Kategori", "Risiko", "Status"],
  DATA.findings.map(f => [f.id, f.audit, f.penemuan, f.kategori, riskBadge(f.risiko), statusBadge(f.status)])
);

buildTable("actions-table",
  ["ID", "Penemuan", "PIC", "Tarikh Akhir", "Status"],
  DATA.actions.map(t => [t.id, t.penemuan, t.pic, t.tarikh, statusBadge(t.status)])
);

// ============================================================
//  AUDITOR CARDS
// ============================================================
const grid = document.getElementById("auditor-grid");
DATA.auditors.forEach(a => {
  const initials = a.nama.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase();
  grid.innerHTML += `
    <div class="auditor-card">
      <div class="auditor-avatar">${initials}</div>
      <div class="auditor-name">${a.nama}</div>
      <div class="auditor-role">${a.jawatan}</div>
      <div class="auditor-stats">
        <div><span class="stat-val">${a.audit}</span><span class="stat-lbl">Jumlah Audit</span></div>
        <div><span class="stat-val green-text">${a.selesai}</span><span class="stat-lbl">Selesai</span></div>
      </div>
      ${statusBadge(a.status)}
    </div>
  `;
});

// ============================================================
//  CHARTS
// ============================================================

// Chart 1 — Trend Kepatuhan
new Chart(document.getElementById("trendChart"), {
  type: "line",
  data: {
    labels: DATA.trend.bulan,
    datasets: [{
      label: "% Kepatuhan",
      data: DATA.trend.nilai,
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59,130,246,0.1)",
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#3b82f6",
      spanGaps: false
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 50, max: 100, ticks: { callback: v => v + "%" } }
    }
  }
});

// Chart 2 — Taburan Risiko
new Chart(document.getElementById("riskChart"), {
  type: "doughnut",
  data: {
    labels: ["Tinggi", "Sederhana", "Rendah"],
    datasets: [{
      data: [
        DATA.findings.filter(f => f.risiko === "Tinggi").length,
        DATA.findings.filter(f => f.risiko === "Sederhana").length,
        DATA.findings.filter(f => f.risiko === "Rendah").length,
      ],
      backgroundColor: ["#ef4444", "#f59e0b", "#22c55e"],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom" } }
  }
});

// Chart 3 — Status Audit
new Chart(document.getElementById("statusChart"), {
  type: "bar",
  data: {
    labels: ["Selesai", "Dalam Proses", "Tertangguh", "Belum Mula"],
    datasets: [{
      label: "Bilangan Audit",
      data: [
        DATA.audits.filter(a => a.status === "Selesai").length,
        DATA.audits.filter(a => a.status === "Dalam Proses").length,
        DATA.audits.filter(a => a.status === "Tertangguh").length,
        DATA.audits.filter(a => a.status === "Belum Mula").length,
      ],
      backgroundColor: ["#22c55e", "#f59e0b", "#ef4444", "#94a3b8"],
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
  }
});
