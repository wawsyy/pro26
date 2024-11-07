# Contributing to Demo26 FHE Projects

Thank you for your interest in contributing to the Demo26 FHE (Fully Homomorphic Encryption) project collection! This document provides guidelines and information for contributors.

## Development Setup

### Prerequisites

- Node.js 20+
- npm or yarn
- Git
- A modern code editor (VS Code recommended)

### Initial Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/pro26.git
   cd pro26
   ```

3. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical fixes

### Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/) format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

### Pull Request Process

1. Create a feature branch from `develop`
2. Make your changes with clear commit messages
3. Test thoroughly on both local and test networks
4. Update documentation if needed
5. Submit a pull request with description
6. Wait for review and address feedback

## Code Quality

### TypeScript

- Use strict TypeScript configuration
- Avoid `any` types
- Proper type definitions for all functions
- Interface over type aliases for objects

### Testing

- Write unit tests for new features
- Integration tests for contract interactions
- Test on both Hardhat local network and Sepolia
- Minimum 80% code coverage

### Security

- Never commit private keys or secrets
- Use environment variables for sensitive data
- Follow FHE best practices
- Validate all inputs and outputs

## Project Structure

```
pro26/
├── contracts/          # Solidity smart contracts
├── deploy/            # Deployment scripts
├── test/              # Contract tests
├── frontend/          # Next.js application
│   ├── components/    # React components
│   ├── hooks/        # Custom React hooks
│   ├── fhevm/        # FHEVM integration
│   └── config/       # Configuration files
├── tasks/             # Hardhat tasks
└── scripts/           # Utility scripts
```

## Testing

### Local Development

```bash
# Start local Hardhat node
npm run node

# Deploy contracts
npm run deploy

# Run tests
npm test

# Start frontend
cd frontend && npm run dev
```

### Sepolia Testing

```bash
# Deploy to Sepolia
npm run deploy:sepolia

# Run Sepolia tests
npm run test:sepolia
```

## Deployment

### Local Deployment

```bash
npx hardhat node
npx hardhat deploy --network localhost
cd frontend && npm run genabi
```

### Sepolia Deployment

```bash
npx hardhat deploy --network sepolia
npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
```

## FHEVM Integration

- Use `@fhevm/hardhat-plugin` for contract compilation
- Implement proper encryption/decryption flows
- Handle proof generation and verification
- Test FHE operations thoroughly

## Support

- 📖 [FHEVM Documentation](https://docs.zama.ai/fhevm)
- 💬 [Discord Community](https://discord.gg/zama)
- 🐛 [Issue Tracker](https://github.com/wawsyy/pro26/issues)

## License

By contributing, you agree that your contributions will be licensed under the BSD-3-Clause-Clear license.
