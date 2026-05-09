# Secure Information Exchange Program Simulation

A web-based simulation of secure message exchange using **Diffie-Hellman Key Exchange** and **AES-128 Encryption**.

## Features
- Diffie-Hellman key exchange (p=199, g=127)
- AES-128 key derivation from shared key
- Message chunking into 16-character blocks
- Padding with `@` (0x40) for incomplete blocks
- XOR-based block encryption/decryption
- Full hex output for each block

## How to Run
Just open `index.html` in any browser — no server or dependencies needed.

Or serve locally:
```bash
npx serve .
# then open http://localhost:3000
```

## Usage
1. Enter Private Key A and Private Key B (decimal values)
2. Enter the message to encrypt
3. Click **Run Simulation**
4. View the key exchange details, encrypted blocks, and decrypted output

## Example
- Private Key A: `57` → Public A: `17`
- Private Key B: `167` → Public B: `75`
- Shared Key: `109` → AES-128 Key: `109F109F109F109F`
- Message: `The Mandalorian Must Always Recite, This is The Way!`
