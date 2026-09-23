import "./globals.css";
import Link from "next/link";
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><header className="topbar"><div className="container nav"><Link className="brand" href="/">BUILD<span>TRACK</span></Link><nav className="navlinks"><Link href="/garage">Garage</Link><Link href="/builds">Builds</Link><Link href="/community">Community</Link><Link href="/help">Help</Link></nav><Link className="btn" href="/garage">My Garage</Link></div></header>{children}</body></html>
}
