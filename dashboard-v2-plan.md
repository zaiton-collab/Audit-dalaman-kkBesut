# Dashboard Audit KK Besut 2026 — Plan Tambah Baik v2

## Gambaran Keseluruhan

Menambah 4 ciri keutamaan tinggi kepada dashboard sedia ada tanpa mengubah struktur data dummy atau reka bentuk asas. Semua ciri menggunakan data dari objek `DATA` dalam `dashboard.js`. Tiada backend, tiada perubahan data.

---

## Sub-Tugas 1 — Carian & Penapis Jadual

**Intent:** Benarkan pengguna menapis rekod dalam jadual Audit, Penemuan, dan Tindakan Susulan menggunakan input carian teks dan dropdown pilihan status.

**Expected Outcomes:**
- Setiap bahagian jadual ada bar carian dan dropdown penapis status di atasnya
- Jadual rerender secara langsung apabila pengguna taip atau pilih nilai
- Menunjukkan mesej "Tiada rekod ditemui" jika tiada padanan

**Todo List:**
- [ ] Tambah elemen `<div class="table-controls">` dengan `<input>` carian dan `<select>` penapis di atas setiap jadual dalam `index.html`
- [ ] Tukar `buildTable()` dalam `dashboard.js` supaya terima parameter data yang boleh ditapis (bukan hardcoded dari DATA)
- [ ] Tulis fungsi `filterAndRender(section)` yang membaca nilai input/select semasa dan memanggil `buildTable()` semula
- [ ] Ikat event listener `input` dan `change` kepada setiap kawalan penapis
- [ ] Tambah CSS untuk `.table-controls` dalam `style.css`

**Relevant Context:**
- `dashboard.js`: `buildTable(id, headers, rows)` — fungsi pembina jadual sedia ada (baris ~100)
- `dashboard.js`: `DATA.audits`, `DATA.findings`, `DATA.actions` — sumber data
- `index.html`: `id="audit-table"`, `id="findings-table"`, `id="actions-table"` — sasaran jadual
- `style.css`: `.table-wrapper` — wrapper jadual untuk meletakkan kawalan penapis

**Status:** [ ] pending

---

## Sub-Tugas 2 — Eksport PDF dan Excel

**Intent:** Benarkan pengguna mengeksport data jadual yang sedang dipaparkan (termasuk data yang telah ditapis) ke format Excel (.xlsx) dan PDF.

**Expected Outcomes:**
- Butang "📥 Excel" dan "📄 PDF" muncul di atas setiap jadual
- Klik butang Excel → muat turun fail .xlsx dengan data jadual berkenaan
- Klik butang PDF → muat turun fail .pdf dengan jadual berformat
- Nama fail eksport mengandungi nama jadual dan tarikh semasa

**Todo List:**
- [ ] Tambah CDN SheetJS (`xlsx`) ke `index.html`
- [ ] Tambah CDN jsPDF dan jspdf-autotable ke `index.html`
- [ ] Tambah elemen butang eksport dalam `<div class="table-controls">` (dari Sub-Tugas 1)
- [ ] Tulis fungsi `exportExcel(tableId, filename)` dalam `dashboard.js`
- [ ] Tulis fungsi `exportPDF(tableId, title, filename)` dalam `dashboard.js`
- [ ] Tambah CSS untuk butang eksport dalam `style.css`

**Relevant Context:**
- CDN SheetJS: `https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js`
- CDN jsPDF: `https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js`
- CDN AutoTable: `https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js`
- Eksport mengambil kandungan dari elemen `<table>` di DOM (bukan dari DATA secara terus) supaya data yang ditapis turut dieksport

**Status:** [ ] pending

---

## Sub-Tugas 3 — Notifikasi Alert Tindakan Tertunggak

**Intent:** Maklumkan pengguna secara proaktif tentang tindakan susulan yang telah lampau tarikh atau hampir tarikh akhir melalui banner alert dan badge di sidebar.

**Expected Outcomes:**
- Banner amaran merah muncul di bawah topbar jika ada tindakan "Lampau Tarikh"
- Badge nombor merah muncul pada nav item "Tindakan Susulan" di sidebar
- Banner boleh ditutup (dismiss) oleh pengguna

**Todo List:**
- [ ] Tambah elemen `<div id="alert-banner">` di bawah `<header>` dalam `index.html`
- [ ] Tambah elemen `<span class="nav-badge">` dalam nav item tindakan susulan dalam `index.html`
- [ ] Tulis fungsi `initAlerts()` dalam `dashboard.js` yang mengira bilangan tindakan "Lampau Tarikh" dari `DATA.actions`
- [ ] Paparkan banner dengan mesej ringkas dan bilangan tindakan tertunggak
- [ ] Kemas kini badge nombor di sidebar
- [ ] Tambah CSS untuk `#alert-banner` dan `.nav-badge` dalam `style.css`

**Relevant Context:**
- `DATA.actions` — tapis `status === "Lampau Tarikh"` untuk mendapat bilangan
- `index.html`: `.sidebar-nav` — tempat meletakkan badge pada nav item
- `style.css`: `.topbar` — banner perlu muncul tepat di bawah topbar

**Status:** [ ] pending

---

## Sub-Tugas 4 — Modal Butiran Klik Baris

**Intent:** Benarkan pengguna melihat maklumat penuh sesuatu rekod (audit, penemuan, atau tindakan) dengan mengklik mana-mana baris jadual.

**Expected Outcomes:**
- Klik mana-mana baris dalam jadual → overlay modal terbuka dengan semua butiran rekod
- Modal paparkan semua medan data (bukan hanya yang ditunjukkan dalam jadual)
- Menutup modal: klik butang × atau klik di luar modal (backdrop)

**Todo List:**
- [ ] Tambah elemen `<div id="modal-overlay">` dengan `<div id="modal-box">` global di hujung `<body>` dalam `index.html`
- [ ] Tulis fungsi `openModal(type, id)` dalam `dashboard.js` yang cari rekod dari `DATA` berdasarkan jenis dan ID
- [ ] Bina kandungan modal secara dinamik (`innerHTML`) berdasarkan jenis rekod (audit/penemuan/tindakan)
- [ ] Tambah `data-type` dan `data-id` pada setiap `<tr>` semasa `buildTable()` dipanggil
- [ ] Ikat event listener klik pada `<tbody>` jadual untuk membuka modal
- [ ] Tambah fungsi `closeModal()` dan ikat kepada butang × dan backdrop
- [ ] Tambah CSS untuk `#modal-overlay`, `#modal-box`, animasi masuk/keluar dalam `style.css`

**Relevant Context:**
- `dashboard.js`: `buildTable(id, headers, rows)` — perlu diubah untuk terima parameter `dataItems` bagi membolehkan `data-id` diikat pada `<tr>`
- `DATA.audits`, `DATA.findings`, `DATA.actions` — sumber data untuk isi kandungan modal
- `style.css`: Tiada modal sedia ada — perlu dibina dari awal

**Status:** [ ] pending
