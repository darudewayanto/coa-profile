# Center of Agility (COA) — website

Astro static site, Bahasa Indonesia. Dev server: `coa-website` (port 4324, `~/dev/.claude/launch.json`).

- **Konten**: semua teks di `src/data/site.ts` (sumber: *COA Slide Deck – Profile & Program 140626* dan *COA Micro Credential Deck 290126*).
- **Desain**: font & look mengikuti referensi "Dreams Have No Boundaries" (DM Serif Display + Open Sans + Caveat, sapuan kuas, foto duotone, coretan tangan, blok warna). Warna dari feed IG @centerofagility (violet → magenta, kuning). Token di `src/styles/global.css`.
- **Foto**: `src/assets/events/` = foto Dropbox `Center of Agility/Event`, diperkecil ke 2400px q90 (tidak pecah/blur). Duotone dibuat dengan blend-mode CSS; foto asli tetap utuh di galeri.
- **Logo**: `src/assets/brand/` dari Dropbox `Logo & Design/*Hijrah Logos*/Center of Agiity` (maks. 371px — minta file vektor/SVG untuk hasil paling tajam).
- **Review screenshot**: tambahkan `?static` pada URL untuk menampilkan semua section tanpa animasi.

## Tayang di coa.belajaragile.com (Firebase)

- Live: https://coa.belajaragile.com (situs Firebase `coa-belajaragile` di project `hade-community`; CNAME di Jagoan Hosting)
- Deploy manual: `npm run deploy:firebase` (perlu `firebase login`). Git push TIDAK meng-update situs ini.
- Masih noindex. Hapus `PUBLIC_NOINDEX=true` di script itu saat siap diindeks Google.

## Deploy GitHub Pages
`.github/workflows/deploy.yml` → GitHub Pages `darudewayanto/coa-profile` (noindex), live di https://darudewayanto.github.io/coa-profile/ — push ke main = auto deploy.

## Checklist go-live
- [x] Kurikulum Level 1–5 boleh tayang publik (Daru, 17 Okt 2026)
- [x] Wording akreditasi pakai versi IG: "Accredited internationally by ICF & MyBrain" (Daru, 17 Okt 2026)
- [x] Nomor WA COA = nomor HADE (Daru, 17 Okt 2026)
- [ ] Email khusus COA (sementara salam@hijrahcoach.co.id)
- [x] Domain: coa.belajaragile.com (Firebase) — tinggal hapus PUBLIC_NOINDEX saat siap diindeks
- [ ] Logo COA versi vektor (PNG kiriman 17 Okt identik dengan yang sudah dipakai, 290–371px)
- [ ] Testimoni mahasiswa/kampus, angka peserta & lulusan micro-credential
- [ ] Caption foto yang belum pasti nama kampusnya
