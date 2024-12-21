// src/contexts/WalletContext.js
import React, { createContext, useState, useCallback } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  const connect = useCallback(async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        // Set wallet address if account is connected
        if (accounts.length > 0) {
          setWallet({ address: accounts[0] });
        }
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  }, []);

  const disconnect = useCallback(() => {
    setWallet(null); // Reset wallet state
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};
