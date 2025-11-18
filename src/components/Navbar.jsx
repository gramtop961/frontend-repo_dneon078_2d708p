import { Menu, Dumbbell } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#programs" },
    { label: "Plans", href: "#plans" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/20">
                <Dumbbell className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-white">Pulse Gym</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {i.label}
                </a>
              ))}
              <a
                href="#plans"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-rose-500/30 hover:opacity-95"
              >
                Join Now
              </a>
            </div>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <Menu />
            </button>
          </nav>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((i) => (
                  <a
                    key={i.label}
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    {i.label}
                  </a>
                ))}
                <a
                  href="#plans"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-rose-500/30 hover:opacity-95"
                >
                  Join Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
