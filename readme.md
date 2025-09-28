# AlgoFlow Sdk - Developer Focued Blockchain SDK

<div align="center">
  <img src="algorand-logo-white-CMYK.png" width="300" />

  ![Blockchain](https://img.shields.io/badge/Blockchain-Enabled-0078D7?style=for-the-badge&logo=blockchain)
  ![Algorand](https://img.shields.io/badge/Algorand-000000?style=for-the-badge&logo=algorand&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
</div>

---

## Overview

**Algoflow** is an innovative development toolkit that simplifies data storage and access processes for developers using the Algorand blockchain infrastructure. By automating the complexity of traditional blockchain operations (wallet connections, gas fees, private key management) in the background, it enables data to be written to and read from the blockchain with just a few function calls.

1. **Algoflow SDK** - A developer-friendly toolkit that simplifies Algorand blockchain integration
2. **POS Frontend** - A modern Next.js web application providing an intuitive interface for blockchain-based transactions

> **Making blockchain payments as simple as traditional card transactions for retail businesses!**

## What This Project Does

### For Businesses:
- **Seamless Payments**: Accept ALGO cryptocurrency payments with the same ease as credit cards
- **Low Transaction Fees**: Benefit from Algorand's minimal transaction costs
- **Instant Settlement**: Near-instant transaction confirmation
- **Modern Interface**: Clean, responsive POS interface built with modern web technologies

### For Developers:
- **Easy Integration**: Simple SDK functions abstract complex blockchain operations
- **Complete Toolkit**: Account creation, token transfers, NFT minting, and data storage
- **Production Ready**: Built with TypeScript, comprehensive error handling, and best practices

### For Customers:
- **Fast Payments**: Quick QR code or address-based payments
- **Transparent**: All transactions recorded on the immutable Algorand blockchain
- **Secure**: Cryptographic security built into every transaction

## Project Structure

```
algo-flow-app/
├── lib/                    # Algoflow SDK Package
│   ├── dist/              # Compiled TypeScript output
│   ├── fn/                # Core SDK functions
│   ├── api/               # API utilities
│   └── package.json       # SDK package configuration
├── frontend/              # Next.js POS Application
│   ├── src/
│   │   ├── app/           # Next.js 13+ App Router
│   │   ├── components/    # Reusable UI components
│   │   └── layouts/       # Page layouts
│   └── package.json       # Frontend dependencies
└── contracts/             # Smart contract code
```

## Key Features

### Account Management
- Generate secure Algorand accounts with mnemonic phrases
- Wallet integration and management
- Safe private key handling

### Payment Processing
- ALGO token transfers between accounts
- Real-time transaction status
- Automatic fee calculation

### Digital Assets (NFTs)
- Create and mint NFTs with metadata
- Supabase integration for metadata storage
- Digital receipt generation

### Data Storage
- Blockchain-based data persistence via smart contracts
- Immutable transaction records
- Custom data vault functionality

### Modern Interface
- Responsive design for tablets and desktop
- Dark/light theme support
- Interactive demo features
- Real-time transaction monitoring

## Quick Start

### Prerequisites
- Node.js 18+
- Yarn or npm
- Algorand TestNet account (for development)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/algo-pos-app.git
cd algo-pos-app
```

### 2. Install SDK Dependencies
```bash
cd lib
yarn install
yarn build
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
yarn install
```

### 4. Start Development Server
```bash
yarn dev
```

Visit `http://localhost:3000` to see the application running.

## SDK Usage

### Installation
```bash
# Install the Algoflow SDK
yarn add algoflow-sdk
```

### Basic Usage
```typescript
import {
  createAccount,
  sendToken,
  createNft,
  writeVault,
  getVault
} from 'algoflow-sdk'

// Create a new account
const newAccount = await createAccount()
console.log('Address:', newAccount.address)
console.log('Mnemonic:', newAccount.mnemonic)

// Send tokens
const result = await sendToken(
    "sender-mnemonic-phrase",
    "recipient-address",
    100000 // 0.1 ALGO
)

// Store data on blockchain
await writeVault("your-mnemonic", "Transaction data")
const data = await getVault() // Retrieve stored data
```

## Network Configuration

| Component | Network | Details |
|:----------|:--------|:--------|
| **Blockchain** | Algorand TestNet | `https://testnet-api.algonode.cloud` |
| **Smart Contract** | AlgoflowVault | App ID: `746498651` |
| **Environment** | Development | Automatic fee handling |

## Technology Stack

### Backend/SDK
- **Language**: TypeScript
- **Blockchain**: Algorand SDK (algosdk)
- **Tools**: AlgoKit Utils
- **Storage**: Supabase (metadata)

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: Zustand
- **Icons**: Lucide React

## Demo Features

The application includes interactive demos for:

1. **Account Creation** - Generate new Algorand accounts
2. **Token Transfer** - Send ALGO between accounts
3. **NFT Minting** - Create digital assets
4. **Data Storage** - Store information on blockchain
5. **Data Retrieval** - Fetch stored blockchain data

Access demos at `/dashboard/demo` after starting the development server.

## Development

### Building the SDK
```bash
cd lib
yarn build
```

### Running Frontend
```bash
cd frontend
yarn dev
```

### Environment Variables
Create a `.env.local` file in the frontend directory:
```env
# Add your environment variables here
NEXT_PUBLIC_ALGORAND_NETWORK=testnet
```

## Error Handling

The SDK includes comprehensive error handling for common scenarios:

- **NetworkError**: Connection issues with Algorand node
- **InsufficientFunds**: Not enough ALGO for transactions
- **InvalidMnemonic**: Malformed mnemonic phrases
- **TransactionFailed**: Blockchain transaction errors

Always wrap SDK calls in try-catch blocks:

```typescript
try {
  const account = await createAccount()
  console.log('Account created:', account.address)
} catch (error) {
  console.error('Error:', error.message)
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json files for details.

## Useful Links

- [Algorand Developer Portal](https://developer.algorand.org/)
- [AlgoKit Documentation](https://github.com/algorandfoundation/algokit-cli)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

## Use Cases

### Retail Stores
- Coffee shops accepting crypto payments
- Small businesses reducing payment processing fees
- International businesses avoiding currency conversion

### E-commerce
- Online stores with instant settlement
- Digital goods marketplaces
- Subscription services with transparent billing

### Enterprise
- Supply chain transparency with blockchain records
- Internal accounting with immutable transaction logs
- Customer loyalty programs with NFT rewards

---

<div align="center">

**⭐ Star this project if you find it useful!**

Built with ❤️ for the future of retail payments

![Powered by Algorand](https://img.shields.io/badge/Powered_by-Algorand-brightgreen?style=for-the-badge&logo=algorand&logoColor=white)

</div>