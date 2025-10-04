import { useReadContract } from 'wagmi';
import { erc20Abi } from './erc20Abi.ts';
import { formatUnits } from 'viem';

export function useErc20Balance(userAddress?: `0x${string}` | string, tokenAddress?: `0x${string}` | string) {
  const { data: decimals } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi as any,
    functionName: 'decimals',
    query: { enabled: Boolean(tokenAddress) },
  });

  const { data: balance } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi as any,
    functionName: 'balanceOf',
    args: userAddress ? [userAddress as `0x${string}`] : undefined,
    query: { enabled: Boolean(userAddress && tokenAddress) },
  });

  let balanceFormatted: string | null = null;
  if (balance != null && decimals != null) {
    try {
      const v = Number(formatUnits(balance as bigint, Number(decimals)));
      balanceFormatted = v.toFixed(2);
    } catch {
      balanceFormatted = null;
    }
  }

  return { balance, decimals, balanceFormatted };
}


