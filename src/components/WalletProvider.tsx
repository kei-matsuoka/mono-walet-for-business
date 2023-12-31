'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, publicClient } = configureChains(
    [polygon, polygonMumbai],
    [
      alchemyProvider({ apiKey: 'ZXNfHjHigW2Mq9Byq_4jq23A5p0-qgO_' }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'MonoWallet',
    projectId: '8b0722834fe89703ad8f058571d46d00',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: '#000',
          borderRadius: 'medium',
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
