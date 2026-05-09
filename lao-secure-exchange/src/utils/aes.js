const BLOCK_SIZE = 16;
const PAD_CHAR = '@';

export function transformKey(sharedKey) {
  const s = String(sharedKey);
  let pattern;
  if (s.length === 1)      pattern = s + 'C';
  else if (s.length === 2) pattern = s + 'DD';
  else                     pattern = s + 'F';
  let result = '';
  while (result.length < 16) result += pattern;
  return result.slice(0, 16);
}

export function chunkMessage(message) {
  const chunks = [];
  for (let i = 0; i < message.length; i += BLOCK_SIZE) {
    let chunk = message.slice(i, i + BLOCK_SIZE);
    if (chunk.length < BLOCK_SIZE) chunk = chunk.padEnd(BLOCK_SIZE, PAD_CHAR);
    chunks.push(chunk);
  }
  return chunks;
}

function xorBlock(block, key) {
  let out = '';
  for (let i = 0; i < block.length; i++) {
    out += String.fromCharCode(block.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return out;
}

export function encryptBlock(block, key) { return xorBlock(block, key); }
export function decryptBlock(block, key) { return xorBlock(block, key); }

export function encryptMessage(message, key) {
  return chunkMessage(message).map(chunk => encryptBlock(chunk, key));
}

export function blockToHex(block) {
  return Array.from(block)
    .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join(' ');
}
