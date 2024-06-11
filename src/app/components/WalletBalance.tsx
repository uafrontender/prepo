import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";

function formatBalance(value: bigint, decimals = 18): string {
  const stringValue = value.toString();
  const integerPart = stringValue.slice(0, -decimals) || "0";
  const decimalPart = stringValue.slice(-decimals).padStart(decimals, "0");
  return `${integerPart}.${decimalPart}`.replace(/\.?0+$/, "");
}

const WalletBalance = () => {
  const { address: accountAddress } = useAccount();
  const [address, setAddress] = useState<`0x${string}` | undefined>(undefined);

  useEffect(() => {
    if (accountAddress && /^0x[a-fA-F0-9]+$/.test(accountAddress)) {
      setAddress(accountAddress);
    } else {
      setAddress(undefined); // Set to undefined if the address is disconnected or invalid
    }
  }, [accountAddress]);

  const ethBalance = useBalance({
    address,
  });

  const fakeWethBalance = useBalance({
    address,
    token: "0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5",
  });

  if (ethBalance.isLoading || fakeWethBalance.isLoading) return <div>Loading balances...</div>;
  if (ethBalance.isError || fakeWethBalance.isError)
    return <div>Error fetching balances. Please try again.</div>;
  if (!ethBalance.data || !fakeWethBalance.data) return <div>No balances found.</div>;

  return (
    <>
      <p>
        ETH Balance:{" "}
        {ethBalance.data ? formatBalance(ethBalance.data.value, ethBalance.data.decimals) : "N/A"}{" "}
        {ethBalance.data?.symbol}
      </p>
      <p>
        FAKE_WETH Balance:{" "}
        {fakeWethBalance.data
          ? formatBalance(fakeWethBalance.data.value, fakeWethBalance.data.decimals)
          : "N/A"}{" "}
        {fakeWethBalance.data?.symbol}
      </p>
    </>
  );
};

export default WalletBalance;
