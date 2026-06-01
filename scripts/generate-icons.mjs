import { deflateSync } from 'zlib';
import { writeFileSync } from 'fs';

const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
  crcTable[i] = c;
}
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (const b of buf) crc = crcTable[(crc ^ b) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const crcBuf = Buffer.alloc(4); crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcBuf]);
}

function makePNG(size, pixels) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8-bit RGB

  const row = Buffer.alloc(1 + size * 3);
  const raw = Buffer.alloc(size * row.length);
  for (let y = 0; y < size; y++) {
    raw[y * row.length] = 0; // filter: None
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixels(x, y, size);
      raw[y * row.length + 1 + x * 3] = r;
      raw[y * row.length + 2 + x * 3] = g;
      raw[y * row.length + 3 + x * 3] = b;
    }
  }

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// Icon: dark bg (#0f172a) with indigo rounded rect (#4f46e5) and white "G"
function iconPixels(x, y, size) {
  const cx = size / 2, cy = size / 2;
  const pad = size * 0.15;
  const radius = size * 0.22;

  // Rounded rect bounds
  const left = pad, right = size - pad, top = pad, bottom = size - pad;
  const inRect = x >= left && x <= right && y >= top && y <= bottom;

  // Corner rounding
  let inCorner = false;
  const corners = [[left + radius, top + radius], [right - radius, top + radius],
                   [left + radius, bottom - radius], [right - radius, bottom - radius]];
  for (const [cx2, cy2] of corners) {
    if (x < left + radius && x > left - 1 && y < top + radius && y > top - 1 ||
        x > right - radius && x < right + 1 && y < top + radius && y > top - 1 ||
        x < left + radius && x > left - 1 && y > bottom - radius && y < bottom + 1 ||
        x > right - radius && x < right + 1 && y > bottom - radius && y < bottom + 1) {
      const dx = x - cx2, dy = y - cy2;
      if (dx * dx + dy * dy > radius * radius) { inCorner = true; break; }
    }
  }

  if (!inRect || inCorner) return [3, 7, 18]; // bg #030712

  // "G" letterform — simple pixel test
  const nx = (x - cx) / (size * 0.28);
  const ny = (y - cy) / (size * 0.30);
  const r2 = nx * nx + ny * ny;
  const isRing = r2 > 0.55 && r2 < 1.0;
  const isBar = nx > 0.0 && nx < 1.0 && ny > -0.15 && ny < 0.15;
  const isOpen = nx > -0.3 && ny < -0.2;

  if ((isRing && !isOpen) || isBar) return [255, 255, 255]; // white G

  return [79, 70, 229]; // indigo #4f46e5
}

for (const size of [192, 512]) {
  writeFileSync(`public/icon-${size}.png`, makePNG(size, iconPixels));
  console.log(`Generated public/icon-${size}.png`);
}
