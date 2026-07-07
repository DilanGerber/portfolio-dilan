"use client";

import IconDownload from "@/icons/IconDownload";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-full max-w-sm">
      <IconDownload
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          size-4
          text-zinc-500
        "
      />

      <input
        value={value}
        onChange={onChange}
        placeholder="Buscar templates..."
        className="
          w-full

          rounded-xl

          border
          border-zinc-800

          bg-zinc-950/60

          pl-11
          pr-4
          py-3

          text-sm
          text-zinc-100

          placeholder:text-zinc-500

          outline-none

          transition-all

          focus:border-green-500
          focus:ring-2
          focus:ring-green-500/20
        "
      />
    </div>
  );
}