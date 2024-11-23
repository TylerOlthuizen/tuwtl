import DexScreener from "./assets/dex-logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-8 lg:p-12 xl:p-10 pb-0 site-background">
      <main className="min-h-screen relative mx-auto">
        <nav className="absolute top-0 left-0">
          <ul className="flex gap-8 flex-row items-center nav-list">
            <li>
              <a
                target="_blank"
                href="https://dexscreener.com/solana/hcpbh3owupmmydqucjrfnc2wgsgyvknxpdj8eg6sckn"
              >
                <DexScreener width={35} />
              </a>
            </li>
            <li>
              <a href="https://x.com/tuwtl" target="_blank">
                <FaXTwitter size={40} color="white" />
              </a>
            </li>
            <li>
              <a href="https://t.me/tuwtl" target="_blank">
                <FaTelegramPlane size={40} color="white" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="cta" target="_blank" href="https://x.com/tuwtl">
            x.com/tuwtl
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
