// DompetKeluarga — household budget site for Indonesia (Node 22, stdlib only).
//
// The entry is app/index.html: one self-contained page (inline CSS + JS,
// Canvas 2D charts, hash routing, no network, no external libraries) plus
// four screenshots in screenshots/. This script hands it in: it copies
// app/ and screenshots/ next to this file into the output directory and
// writes dossier.json there with the vendored make.fun library.
// vendor/makefun-frontend.ts stays untouched: the scorer rebuilds the
// dossier with its own copy and compares byte for byte.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The output directory comes from the environment only, never argv[2]:
// the grader runs `node /bot/main.ts` with /bot read-only.

import { cpSync, existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SHOTS = ['1-kalkulator.png', '2-kategori.png', '3-provinsi.png', '4-tips-phone.png'];

// Fail fast with a named item instead of handing in a half entry.
function checkInputs(): void {
  const indexPath = join(here, 'app', 'index.html');
  if (!existsSync(indexPath)) throw new Error('app/index.html is missing: ' + indexPath);
  if (statSync(indexPath).size > 1024 * 1024) throw new Error('app/index.html is over the 1 MiB cap');
  const shotsDir = join(here, 'screenshots');
  if (!existsSync(shotsDir)) throw new Error('screenshots/ is missing: hand in 4 PNG screenshots');
  for (const name of SHOTS) {
    const p = join(shotsDir, name);
    if (!existsSync(p)) throw new Error('screenshot is missing: screenshots/' + name);
    if (statSync(p).size > 262144) throw new Error('screenshots/' + name + ' is over the 256 KiB cap');
  }
}

checkInputs();

mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });

// Caps from this competition's kit starter: text_max_bytes shapes the
// dossier text; the rest refuse an entry the scorer would refuse
// (more than 4 screenshots or one over 256 KiB; app/ over 993 entries
// or 16 MiB, counting beside /output's own 1000-entry cap).
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, { text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 }, app_max_files: 993, app_max_bytes: 16777216 }),
);

process.stdout.write('dompetkeluarga: app/ + 4 screenshots copied to ' + out + ', dossier.json written\n');
