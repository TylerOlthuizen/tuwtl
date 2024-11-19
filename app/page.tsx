import DexScreener from "./assets/dex-logo.svg";
import Raydium from "./assets/raydium-logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-8 pb-0 site-background">
      <main className="min-h-screen p-8 relative container mx-auto">
        <nav className="absolute top-0 left-0">
          <ul className="flex gap-6 flex-row items-center nav-list">
            <li>
              <a
                target="_blank"
                href="https://dexscreener.com/solana/hcpbh3owupmmydqucjrfnc2wgsgyvknxpdj8eg6sckn"
              >
                <DexScreener width={30} height="auto" />
              </a>
            </li>
            <li>
              <a href="https://x.com/tuwtl" target="_blank">
                <FaXTwitter size={30} />
              </a>
            </li>
            <li>
              <a href="https://t.me/tuwtl" target="_blank">
                <FaTelegramPlane size={30} />
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a
            className="cta "
            target="_blank"
            href="https://raydium.io/swap/?inputMint=sol&outputMint=7rXAyMke9CD3CMwZqcK5S89c9kgzRqCC5zzxBuLipump"
          >
            <Raydium width={30} height="auto" /> Choose Wed
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
