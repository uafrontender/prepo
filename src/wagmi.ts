import { http, createConfig } from "wagmi";
import { holesky } from "wagmi/chains";

export const config = createConfig({
  chains: [holesky],
  ssr: true,
  transports: {
    [holesky.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
