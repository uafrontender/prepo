"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import WalletBalance from "./components/WalletBalance";
import { SendTransaction } from "./components/SendTransaction";
import Button from "./components/Button";
import styles from "./styles/IndexPage.module.scss";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.box}>
          <h2>Connect:</h2>
          <dl className={styles.defList}>
            <dt>Connect with:</dt>
            <dd>
              {connectors.map((connector) => (
                <Button
                  key={connector.uid}
                  disabled={account.status === "connected"}
                  className="connectButton"
                  onClick={() => connect({ connector })}
                >
                  {connector.name}
                </Button>
              ))}
            </dd>
            <dt>Connection status:</dt>
            <dd>{status}</dd>
            {error && (
              <>
                <dt>Error:</dt>
                <dd>{error?.message}</dd>
              </>
            )}
          </dl>
        </div>
        <div className={styles.box}>
          <h2>Account:</h2>
          <dl className={styles.defList}>
            <dt>Account status:</dt>
            <dd>{account.status}</dd>
            {account.status === "connected" && (
              <>
                <dt>Address:</dt>
                <dd>{account.addresses[0]}</dd>
                <dt>Balance:</dt>
                <dd>
                  <WalletBalance />
                </dd>
              </>
            )}
          </dl>
          {account.status === "connected" && (
            <Button className="disconnectButton" onClick={() => disconnect()}>
              Disconnect
            </Button>
          )}
        </div>
      </div>
      {account.status === "connected" && (
        <div className={styles.box}>
          <h2>Send FAKE_WETH Tokens:</h2>
          <SendTransaction />
        </div>
      )}
    </div>
  );
}

export default App;
