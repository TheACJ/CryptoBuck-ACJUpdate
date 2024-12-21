// src/hooks/useWallet.js
import { useContext, useCallback } from 'react';
import { WalletContext } from '../context/WalletContext';

export const useWallet = () => {
  const context = useContext(WalletContext);
  
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  
  const { wallet, connect, disconnect } = context;
  
  const getBalance = useCallback(async (tokenAddress) => {
    // Implement balance checking logic
  }, [wallet]);
  
  return {
    wallet,
    connect,
    disconnect,
    getBalance,
  };
};