// CryptoBucks/src/components/Nacigation.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useWallet } from '../hooks/useWallet';


const Navigation = () => {
  const { wallet, connect, disconnect } = useWallet();

  return (
    <nav
      className="w-[40%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
      <button
          onClick={wallet ? disconnect : connect}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          {wallet ? `Disconnect (${wallet.address.slice(0, 6)}...)` : 'Connect Wallet'}
        </button>
    </nav>
  );
};

export default Navigation;
