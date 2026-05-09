export function modPow(base, exp, mod) {
  let result = 1n;
  base = BigInt(base) % BigInt(mod);
  exp = BigInt(exp);
  mod = BigInt(mod);
  while (exp > 0n) {
    if (exp % 2n === 1n) result = (result * base) % mod;
    exp = exp / 2n;
    base = (base * base) % mod;
  }
  return Number(result);
}

export function computePublicValue(g, privateKey, p) {
  return modPow(g, privateKey, p);
}

export function computeSharedKey(otherPublic, privateKey, p) {
  return modPow(otherPublic, privateKey, p);
}
