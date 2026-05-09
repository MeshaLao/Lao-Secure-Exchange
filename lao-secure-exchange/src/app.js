import { computePublicValue, computeSharedKey } from './utils/diffieHellman.js';
import { transformKey, encryptMessage, decryptBlock, blockToHex, chunkMessage } from './utils/aes.js';

const P = 199;
const G = 127;

export function runSimulation(privateKeyA, privateKeyB, message) {
  const pubA = computePublicValue(G, privateKeyA, P);
  const pubB = computePublicValue(G, privateKeyB, P);
  const sharedA = computeSharedKey(pubB, privateKeyA, P);
  const sharedB = computeSharedKey(pubA, privateKeyB, P);
  const aesKey = transformKey(sharedA);

  const plainChunks = chunkMessage(message);
  const encryptedBlocks = encryptMessage(message, aesKey);

  const encFull = encryptedBlocks.join('');
  const encChunks = [];
  for (let i = 0; i < encFull.length; i += 16) encChunks.push(encFull.slice(i, i + 16));

  const decryptedBlocks = encChunks.map(b => decryptBlock(b, aesKey));
  const decryptedMessage = decryptedBlocks.join('').replace(/@+$/, '');

  return {
    p: P, g: G,
    privateKeyA, privateKeyB,
    pubA, pubB,
    sharedA, sharedB,
    keysMatch: sharedA === sharedB,
    aesKey,
    plainChunks,
    encryptedBlocks,
    encryptedHex: encryptedBlocks.map(blockToHex),
    decryptedBlocks,
    decryptedMessage,
  };
}
