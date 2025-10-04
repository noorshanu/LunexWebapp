import { createAppKit } from '@reown/appkit/react';
import { arbitrum, mainnet, polygon } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || import.meta.env.VITE_PROJECT_ID || '2f4da7b40d4f371ee01ffcee4851dff2';

const networks = [mainnet, arbitrum];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'Lunex',
    description: 'Lunex Webapp',
    url: 'http://localhost:5173',
    icons: ['/images/logo.png'],
  },
  features: { analytics: true },
});


