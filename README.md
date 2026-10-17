# Center of Agility (COA) — website

Astro static site, Bahasa Indonesia. Dev server: `coa-website` (port 4324, `~/dev/.claude/launch.json`).

- **Konten**: semua teks di `src/data/site.ts` (sumber: *COA Slide Deck – Profile & Program 140626* dan *COA Micro Credential Deck 290126*).
- **Desain**: font & look mengikuti referensi "Dreams Have No Boundaries" (DM Serif Display + Open Sans + Caveat, sapuan kuas, foto duotone, coretan tangan, blok warna). Warna dari feed IG @centerofagility (violet → magenta, kuning). Token di `src/styles/global.css`.
- **Foto**: `src/assets/events/` = foto Dropbox `Center of Agility/Event`, diperkecil ke 2400px q90 (tidak pecah/blur). Duotone dibuat dengan blend-mode CSS; foto asli tetap utuh di galeri.
- **Logo**: `src/assets/brand/` dari Dropbox `Logo & Design/*Hijrah Logos*/Center of Agiity` (maks. 371px — minta file vektor/SVG untuk hasil paling tajam).
- **Review screenshot**: tambahkan `?static` pada URL untuk menampilkan semua section tanpa animasi.

## Deploy
`.github/workflows/deploy.yml` → GitHub Pages `darudewayanto/coa-profile` (noindex). Belum dibuat/di-push.

## Checklist go-live
- [ ] Konfirmasi: kurikulum Level 1–5 (deck berlabel CONFIDENTIAL) boleh tayang publik
- [ ] Konfirmasi wording akreditasi (IG: "Accredited internationally by ICF & MyBrain"; deck: "compliance & soon to be accredited")
- [ ] Nomor WA & email khusus COA (sementara kontak HADE)
- [ ] Domain + hosting (mis. centerofagility.id) → set SITE_URL, hapus PUBLIC_NOINDEX
- [ ] Logo COA versi vektor
- [ ] Testimoni mahasiswa/kampus, angka peserta & lulusan micro-credential
- [ ] Caption foto yang belum pasti nama kampusnya
