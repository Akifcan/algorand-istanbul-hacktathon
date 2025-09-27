# Algoflow SDK

<img src="algorand-logo-white-CMYK.png" width="300" />

![Blockchain](https://img.shields.io/badge/Blockchain-Enabled-0078D7?style=for-the-badge&logo=blockchain)
![Algorand](https://img.shields.io/badge/Algorand-000000?style=for-the-badge&logo=algorand&logoColor=white)
![Built on Algorand](https://img.shields.io/badge/Built_on-Algorand-brightgreen?style=for-the-badge&logo=algorand&logoColor=white)
![Powered by Algorand](https://img.shields.io/badge/Powered_by-Algorand-blue?style=for-the-badge&logo=algorand&logoColor=white)


It is an innovative SDK that simplifies data storage and access processes for developers using the Algorand blockchain infrastructure. By automating the complexity of traditional blockchain operations (wallet connections, gas fees, private key management) in the background, it enables data to be written to and read from the blockchain with just a few function calls.

## Installation

### Local Development
```bash
# Install from local package
yarn add ./lib-1.2.3.tgz
```

### Package.json Reference
```json
{
  "dependencies": {
    "algoflow-sdk": "file:./lib-1.2.3.tgz"
  }
}
```

## Features

- = Account creation and management
- =� Token transfers on Algorand TestNet
- <� NFT creation with metadata support
- =� Data storage and retrieval via smart contracts
- =� Intereact with blochain insfructre via algorand.

## Quick Start

### Import Functions
```typescript
import {
  createAccount,
  sendToken,
  createNft,
  writeVault,
  getVault
} from 'algoflow-sdk'
```

## API Reference

### Account Management

#### `createAccount()`
Creates a new Algorand account with mnemonic and address.

```typescript
const newAccount = await createAccount()
// Returns: { mnemonic: string, address: string }
```

### Token Operations

#### `sendToken(mnemonic, recipient, amount)`
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

### NFT Operations

#### `createNft(mnemonic, options)`
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

### Data Storage (Smart Contract)

#### `writeVault(mnemonic, data)`
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

#### `getVault()`
Retrieves stored data from the smart contract.

```typescript
const storedData = await getVault()
// Returns: string
```

**Example Usage:**
```typescript
export async function GET(req: Request, context: any) {
    const res = await getVault()
    return Response.json({res: res});
}
```

## Network Configuration

The SDK is configured for **Algorand TestNet**:
- **Node URL:** `https://testnet-api.algonode.cloud`

## Error Handling

All functions return promises and should be wrapped in try-catch blocks:

```typescript
try {
    const account = await createAccount()
    console.log('Account created:', account)
} catch (error) {
    console.error('Error creating account:', error)
}
```
### Build Process
The SDK includes TypeScript definitions and is pre-compiled for immediate use.

## Dependencies

Core dependencies included:
- `algosdk`: Algorand JavaScript SDK
- `@algorandfoundation/algokit-utils`: Algorand development utilities
- `@supabase/supabase-js`: Supabase client for metadata storage

## Support

For issues and feature requests, please refer to the project repository or contact the development team.