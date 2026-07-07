"use client";

import IconAboutMe from "@/icons/IconAboutMe";

export default function FilterSelect({
  label,
  options,
  value,
  onChange,
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="
          appearance-none

          rounded-xl

          border
          border-zinc-800

          bg-zinc-950/60

          px-4
          pr-10
          py-3

          text-sm
          text-zinc-300

          outline-none

          transition

          hover:border-zinc-700

          focus:border-green-500
          focus:ring-2
          focus:ring-green-500/20
        "
      >
        <option value="">
          {label}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      <IconAboutMe
        className="
          pointer-events-none

          absolute

          right-3
          top-1/2

          -translate-y-1/2

          size-4

          text-zinc-500
        "
      />
    </div>
  );
}