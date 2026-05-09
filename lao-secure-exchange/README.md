# Lao-Secure-Exchange

Secure Information Exchange Program Simulation using **Diffie-Hellman Key Exchange** and **AES-128 Encryption**.

## Project Structure

```
lao-secure-exchange/
├── index.html              # Main UI
├── package.json
├── README.md
└── src/
    ├── app.js              # Main simulation logic
    └── utils/
        ├── diffieHellman.js  # DH key exchange functions
        └── aes.js            # AES-128 encryption/decryption
```

## How to Run

```bash
npm start
```
Then open [http://localhost:3000](http://localhost:3000)

## Parameters
- Prime `p = 199`, Generator `g = 127`
- Private keys are decimal ASCII values

## Example Output
- Private Key A: `57` → Public A: `17`
- Private Key B: `167` → Public B: `75`
- Shared Key: `109` → AES-128 Key: `109F109F109F109F`
- Message: `The Mandalorian Must Always Recite, This is The Way!`
