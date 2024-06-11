# MetaMask Wallet Integration Project

This project demonstrates the integration of a MetaMask wallet with the Holesky Testnet, allowing users to connect their wallets, view balances, and transfer FAKE_WETH tokens to a specified address.

## Initial Setup

To get started with the project, follow these detailed steps:

### MetaMask Configuration

1.  **Setup a New MetaMask Wallet**:

    - If you have MetaMask installed, consider setting it up in a new browser profile for testing purposes.
    - Enable 'Show test networks' in the MetaMask network dropdown menu.

2.  **Configure Holesky Testnet**:

    - **Network Name**: Holesky Testnet
    - **New RPC URL**: `https://ethereum-holesky.publicnode.com`
    - **Chain ID**: 17000
    - **Currency Symbol**: ETH
    - **Block Explorer URL**: `https://holesky.etherscan.io/`

3.  **Token Setup**:

    - Navigate to MetaMask's Tokens tab and select 'Import Token'.
    - **Token Contract Address**: `0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5`
    - **Token Symbol**: FAKE_WETH
    - **Token Decimal**: 18

## Technical Stack

- **React**: For building the frontend UI.
- **TypeScript**: Adds type safety at compile time.
- **CSS Modules**: For component scoped styling.
- **Wagmi & Viem**: Used for blockchain interaction.
- No state management libraries are required due to the application's manageable size.

## Features

- **Wallet Connection**: Connect MetaMask wallet to the Holesky Testnet.
- **Display Wallet Info**: Shows connected wallet's address, ETH balance, and FAKE_WETH balance.
- **Token Transfer**: Allows sending a fixed amount of FAKE_WETH to a predefined wallet address.

## Development and Deployment

- Develop in an environment conducive to your productivity. Internet browsing for documentation is recommended.
- The project is deployed at [Vercel App](https://prepo.vercel.app/).

## Submission Guidelines

- This task should be completed independently within a 4-hour time frame.
