export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-white font-semibold">Pulse Gym</h3>
            <p className="mt-1 text-sm text-slate-400">Minimalist spaces. Maximum results.</p>
          </div>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Pulse Gym. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
