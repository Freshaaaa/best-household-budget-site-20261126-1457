[![make.fun · best-household-budget-site-20261126-1457](https://make.fun/badge/best-household-budget-site-20261126-1457.svg)](https://make.fun/bounty/best-household-budget-site-20261126-1457?utm_source=github&utm_medium=readme&utm_campaign=best-household-budget-site-20261126-1457)
[![rank](https://make.fun/badge/best-household-budget-site-20261126-1457/Freshaaaa/best-household-budget-site-20261126-1457/rank.svg)](https://make.fun/bounty/best-household-budget-site-20261126-1457/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-household-budget-site-20261126-1457)
[![reward](https://make.fun/badge/best-household-budget-site-20261126-1457/Freshaaaa/best-household-budget-site-20261126-1457/reward.svg)](https://make.fun/bounty/best-household-budget-site-20261126-1457?utm_source=github&utm_medium=readme&utm_campaign=best-household-budget-site-20261126-1457)

# DompetKeluarga — Anggaran rumah tangga Indonesia: gaji Rp8,0 jt, 50/30/20, 15 pos belanja, UMP 12 provinsi, harga pokok 14 komoditas — 5 bagian, 5 grafik, 24 tips hemat Rp2,3 jt/bln

A single-file household budget site for Indonesia. One self-contained `app/index.html` (inline CSS + JS, Canvas 2D charts, no external libraries, no network) with hash routing across 5 sections — Kalkulator (50/30/20 calculator), Rincian Belanja (sortable expense table), UMP Provinsi, Harga Pokok, and 24 Tips Hemat — 5 charts, 3 family presets (Jakarta Rp8,0 jt, Bandung Rp5,8 jt, Yogyakarta Rp4,5 jt), a rule selector (50/30/20, 60/25/15, 70/20/10), and a savings projection. Works on desktop and phone, offline.

## Real data (2026, sources in the footer)

- **UMP 2026:** DKI Jakarta Rp5.729.876 (highest), Jawa Barat Rp2.317.601 (lowest), Jawa Tengah Rp2.327.386, DI Yogyakarta Rp2.417.495, Jawa Timur Rp2.446.880, Banten Rp3.100.881; UMK tertinggi Kota Bekasi Rp5.999.443. Source: Keputusan Gubernur, PP 49/2025.
- **Pengeluaran nasional:** Susenas Maret 2024 (BPS) — rata-rata Rp1.500.556 per orang per bulan, 50,1% untuk makanan. Rata-rata upah buruh Rp3,33 jt/bln (BPS Sakernas 2025); median upah riil 2024 sedikit di atas Rp2 jt/bln (studi UGM/IZA, Nov 2026).
- **Harga pokok (PIHPS Bank Indonesia, 25 Nov 2026):** beras medium Rp16.950/kg, beras super Rp18.300/kg, telur Rp28.000/kg, ayam ras Rp37.350/kg, daging sapi Rp151.050/kg, minyak curah Rp20.200/liter, gula premium Rp20.550/kg, bawang merah Rp40.400/kg. Keranjang bulanan keluarga 4 orang: Rp1.016.975.
- **Contoh Jakarta:** penghasilan Rp8,0 jt, belanja Rp7,7 jt (kebutuhan 70,6%, keinginan 13,1%, tabungan 12,5%), sisa Rp300 rb/bln. 24 tips hemat total potensi Rp2.325.000/bln.

## How to run

Open `app/index.html` in any browser (works offline), or serve it:

```sh
python3 -m http.server --directory app 8080
# then open http://localhost:8080/
```

Entry point (Node 22, standard library only):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to the output directory (`MAKEFUN_OUTPUT_DIR`, fallback `/output`) and writes `dossier.json` with the vendored make.fun library (`vendor/makefun-frontend.ts`).

## Screenshots

- `screenshots/1-kalkulator.png` — Kalkulator 50/30/20, desktop 1280×720
- `screenshots/2-kategori.png` — Rincian Belanja, desktop 1280×720
- `screenshots/3-provinsi.png` — UMP Provinsi, desktop 1280×720
- `screenshots/4-tips-phone.png` — 24 Tips Hemat, phone 390×844

## Note

`vendor/makefun-frontend.ts` is the make.fun kit file (unchanged, sha256-verified from the kit). It is fetched in a separate, user-approved step — see STATE.

- Competition: https://make.fun/competitions/best-household-budget-site-20261126-1457
- License: MIT

## v2 (2026-11-28, belum submit)

Overhaul presentasi untuk screenshot: hero 6 kartu stat gelap + strip perbandingan 3 preset (Jakarta/Bandung/Yogyakarta, angka dihitung live oleh preset v1) + banner verdict oranye + donat & bar aktual-vs-target baru dengan label % di dalam irisan + bar chart UMP 12 provinsi + strip top-5 tips hemat. Semua angka baru dibaca dari nilai live v1 (DOM + global yang sama) — tidak ada data baru yang diketik. `app/index.html` kini 555 baris. Playtest: 5 rute lolos, 0 JS error; dossier byte-identical (sha256 a62d481b2c9fa3960154404f0c27a87c4398ab08f0788d69ac264e436fb23648).
