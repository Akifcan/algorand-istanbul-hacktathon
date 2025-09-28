# 🚀 Algoflow SDK

<div align="center">
  <img src="algorand-logo-white-CMYK.png" width="300" />

  ![Blockchain](https://img.shields.io/badge/Blockchain-Enabled-0078D7?style=for-the-badge&logo=blockchain)
  ![Algorand](https://img.shields.io/badge/Algorand-000000?style=for-the-badge&logo=algorand&logoColor=white)
  ![Built on Algorand](https://img.shields.io/badge/Built_on-Algorand-brightgreen?style=for-the-badge&logo=algorand&logoColor=white)
  ![Powered by Algorand](https://img.shields.io/badge/Powered_by-Algorand-blue?style=for-the-badge&logo=algorand&logoColor=white)

  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
</div>

[Official Documentation Links is Here](https://algorand-istanbul-hacktathon.vercel.app/docs)

---

## 🌟 Overview

**Algoflow SDK** is an innovative development toolkit that simplifies data storage and access processes for developers using the Algorand blockchain infrastructure. By automating the complexity of traditional blockchain operations (wallet connections, gas fees, private key management) in the background, it enables data to be written to and read from the blockchain with just a few function calls.

> 💡 **Perfect for developers who want to integrate blockchain functionality without the complexity!**

## 📦 Installation

### 🛠️ Local Development
```bash
# Install via yarn
yarn add algoflow-sdk
```

### 📄 Package.json Reference
```json
{
  "dependencies": {
    "algoflow-sdk": "2.0.0"
  }
}
```

## ✨ Features

- = Account creation and management
- =� Token transfers on Algorand TestNet
- <� NFT creation with metadata support
- =� Data storage and retrieval via smart contracts
- =� Intereact with blochain instructure via algorand.

## 🚀 Quick Start

### 📚 Table of Contents
- [🔐 Account Management](#-account-management)
- [💰 Token Operations](#-token-operations)
- [🎨 NFT Operations](#-nft-operations)
- [📦 Data Storage](#-data-storage-smart-contract)
- [📦 Asset Opt In](#-asset-opt-in)


### 📦 Import Functions
```typescript
import {
  createAccount,
  sendToken,
  createNft,
  writeVault,
  getVault,
  getNft,
  optIn
} from 'algoflow-sdk'
```

## 📖 API Reference

---

### 🔐 Account Management

#### 🔑 `createAccount()`

> **Description:** Creates a new Algorand account with secure mnemonic and address generation.

**Signature:**
```typescript
function createAccount(): Promise<{
  mnemonic: string;
  address: string;
}>
```

**Usage:**
```typescript
const newAccount = await createAccount()
console.log('New Account:', newAccount.address)
console.log('Mnemonic:', newAccount.mnemonic)
```

**Returns:**
- `mnemonic` (string): 25-word mnemonic phrase
- `address` (string): Algorand wallet address

---

### 💰 Token Operations

#### 💸 `sendToken(mnemonic, recipient, amount)`
Transfers ALGO tokens between accounts on TestNet.

**Parameters:**
- `mnemonic` (string): Sender's 25-word mnemonic phrase
- `recipient` (string): Recipient's Algorand address
- `amount` (number): Amount in microALGOs (1 ALGO = 1,000,000 microALGOs)

```typescript
const result = await sendToken(
    "your 25-word mnemonic phrase here",
    "RECIPIENT_ADDRESS_HERE",
    100_000 // 0.1 ALGO
)
```

---

### 🎨 NFT Operations

#### 🖼️ `createNft(mnemonic, options)`
Creates an NFT with metadata stored on Supabase.

**Parameters:**
- `mnemonic` (string): Creator's 25-word mnemonic phrase
- `options` (object): NFT configuration

```typescript
const newNft = await createNft("your-mnemonic", {
    metadata: {
        "name": "Your NFT Name",
        "description": "NFT Description",
        "image": "https://your-image-url.com/image.png",
        "image_mimetype": "image/png",
        "unitname": "SYMBOL"
    },
    metadataURL: "https://your-metadata-url.json"
})

// Returns: { assetId: number, txIds: string[] }
```

#### 🖼️ `getNft(assetId: number)`
Creates an NFT with metadata stored on Supabase.

**Parameters:**
- `assetId` (number): Number of the asset

```typescript
const res = await getNft(746497619)
return res.asset.params.url
```

---

### 📦 Data Storage (Smart Contract)

#### 📝 `writeVault(mnemonic, data)`
Stores data in Algorand smart contract (AlgoflowVault).

**Parameters:**
- `mnemonic` (string): Account's 25-word mnemonic phrase
- `data` (string): Data to store in the vault

```typescript
const result = await writeVault(
    "your-mnemonic",
    "Your data to store"
)
```

#### 📥 `getVault()`
Retrieves stored data from the smart contract.

```typescript
const storedData = await getVault()
// Returns: string
```

#### 📥 `optIn()`
You need to authorize wallet before send an asset.

**Parameters:**
- `mnemonic` (string): Account's 25-word mnemonic phrase
- `assetId` (number): NFT or Token assetId


```typescript
await optIn("25 KEY MNEMONIC", 746497619)
// Returns: string
```

**Example Usage:**
```typescript
export async function GET(req: Request, context: any) {
    const res = await getVault()
    return Response.json({res: res});
}
```

---

## ⚙️ Network Configuration

<div align="center">

| 🌐 **Network** | 🔗 **Endpoint** | 📊 **Chain ID** |
|:---:|:---:|:---:|
| Algorand TestNet | `https://testnet-api.algonode.cloud` | TestNet |
| Smart Contract | AlgoflowVault | App ID: `746498651` |

</div>

### 🔧 Configuration Details
- **Environment:** Algorand TestNet (Development & Testing)
- **Node Provider:** AlgoNode (Free tier)
- **Smart Contract:** AlgoflowVault for data storage
- **Gas Fees:** Automatically handled by the SDK

---

## 🐛 Error Handling

### ⚠️ Best Practices

All SDK functions return promises and should be wrapped in try-catch blocks for proper error handling:

```typescript
try {
    const account = await createAccount()
    console.log('✅ Account created:', account.address)
} catch (error) {
    console.error('❌ Error creating account:', error.message)
}
```

### 🔍 Common Error Types

| Error Type | Description | Solution |
|:---:|:---:|:---:|
| `NetworkError` | Connection issues with Algorand node | Check internet connection |
| `InsufficientFunds` | Not enough ALGO for transaction | Add funds to account |
| `InvalidMnemonic` | Malformed mnemonic phrase | Verify 25-word mnemonic |
| `TransactionFailed` | Blockchain transaction error | Check transaction parameters |
---

## 🛠️ Development & Build

### 📦 Build Process
The SDK includes TypeScript definitions and is pre-compiled for immediate use. No additional build steps required!

```bash
# SDK Structure
lib/
├── dist/           # Compiled JavaScript + Type definitions
├── fn/            # Individual function modules
├── api/           # API integration utilities
└── package.json   # Package configuration
```

---

## 📚 Dependencies

### 🔧 Core Dependencies

<div align="center">

| Package | Version | Purpose |
|:---:|:---:|:---:|
| ![algosdk](https://img.shields.io/badge/algosdk-3.5.2-blue?style=flat&logo=algorand) | `^3.5.2` | Algorand JavaScript SDK |
| ![algokit-utils](https://img.shields.io/badge/algokit--utils-9.1.2-green?style=flat&logo=algorand) | `^9.1.2` | Algorand development utilities |
| ![supabase](https://img.shields.io/badge/supabase-2.58.0-darkgreen?style=flat&logo=supabase) | `^2.58.0` | Metadata storage client |

</div>

---

## 🤝 Support & Community

<div align="center">

### 📞 Getting Help

| Resource | Description |
|:---:|:---:|
| 📖 **Documentation** | Complete API reference and examples |
| 🐛 **Issues** | Report bugs and request features |
| 💬 **Community** | Join our developer community |
| 📧 **Contact** | Direct support from development team |

</div>

### 🔗 Useful Links
- [Algorand Developer Portal](https://developer.algorand.org/)
- [AlgoKit Documentation](https://github.com/algorandfoundation/algokit-cli)
- [Supabase Documentation](https://supabase.com/docs)

---

<div align="center">

**⭐ Star this project if you find it useful!**

Made with ❤️ by the Algoflow team

![Footer](https://img.shields.io/badge/Powered_by-Algorand-brightgreen?style=for-the-badge&logo=algorand&logoColor=white)

</div>