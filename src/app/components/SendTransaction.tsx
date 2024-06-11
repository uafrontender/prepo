import * as React from "react";
import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { abi } from "../utils/abi";
import { parseEther } from "viem";
import styles from "../styles/Form.module.scss";
import Button from "./Button";

export function SendTransaction() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const amount = formData.get("amount") as string;
    writeContract({
      address: "0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5",
      abi: abi,
      functionName: "transfer",
      args: ["0xa13958aB1955F0CF91185982DE3A720cf4390362", parseEther(amount)],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <form onSubmit={submit} className={styles.formContainer}>
      <label className={styles.label} htmlFor="address">
        Address:
      </label>
      <input
        name="address"
        id="address"
        placeholder="0xA0Cf798816D4b9b9866b5330EEa46a18382f251e"
        defaultValue="0xA0Cf798816D4b9b9866b5330EEa46a18382f251e"
        readOnly
        className={styles.input}
      />

      <label className={styles.label} htmlFor="amount">
        Amount:
      </label>
      <input
        name="amount"
        id="amount"
        placeholder="1"
        defaultValue="1"
        readOnly
        required
        className={styles.input}
      />

      <Button className="submitButton" type="submit" disabled={isPending}>
        {isPending ? "Confirming..." : "Send Tokens"}
      </Button>

      {hash && <div className={styles.transactionInfo}>Transaction Hash: {hash}</div>}
      {isConfirming && <div className={styles.transactionInfo}>Waiting for confirmation...</div>}
      {isConfirmed && <div className={styles.transactionInfo}>Transaction confirmed.</div>}
      {error && (
        <div className={styles.errorInfo}>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  );
}
