"use client";

import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useChainId } from "wagmi";
import { useFhevm } from "../fhevm/useFhevm";

export function Header() {
  const chainId = useChainId();
  const { isLoaded: fhevmLoaded } = useFhevm();

  const getNetworkName = (id: number) => {
    switch (id) {
      case 31337: return "Local Hardhat";
      case 11155111: return "Sepolia";
      case 1: return "Ethereum Mainnet";
      default: return `Chain ${id}`;
    }
  };

  return (
    <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/power-logo.svg"
          alt="Power Usage Logo"
          width={60}
          height={60}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900">Power Usage Log</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className={`w-2 h-2 rounded-full ${fhevmLoaded ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <span>FHEVM: {fhevmLoaded ? 'Ready' : 'Loading'}</span>
            <span>•</span>
            <span>Network: {getNetworkName(chainId)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <ConnectButton />
      </div>
    </nav>
  );
}

