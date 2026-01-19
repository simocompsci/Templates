import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-white border-b border-gray-100 py-6 px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Left: Search */}
                <div className="flex-1 flex justify-start">
                    <button className="group flex items-center gap-3 text-gray-500 hover:text-gray-800 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-0.5"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <span className="text-sm font-light uppercase tracking-wide">Search</span>
                    </button>
                </div>

                {/* Center: Logo */}
                <div className="flex-1 flex justify-center">
                    <Link href="/" className="inline-block relative">
                        <h1 className="text-5xl md:text-6xl text-[#6B8E7B] font-normal leading-none tracking-tighter" style={{ fontFamily: 'var(--font-libre-bodoni)' }}>
                            LOGO
                        </h1>
                        {/* Overlay the "O" to create the monogram effect if possible, or just use text for now */}
                        {/* For now, just "THE" text centered as per screenshot structure */}
                    </Link>
                </div>

                {/* Right: Account & Cart */}
                <div className="flex-1 flex justify-end items-center gap-6 md:gap-8">
                    <Link href="/account" className="text-xs md:text-xs text-gray-500 hover:text-gray-800 uppercase tracking-wider font-light transition-colors">
                        Account
                    </Link>
                    <Link href="/cart" className="text-xs md:text-xs text-gray-500 hover:text-gray-800 uppercase tracking-wider font-light transition-colors">
                        Cart (0)
                    </Link>
                </div>
            </div>
        </nav>
    );
}
