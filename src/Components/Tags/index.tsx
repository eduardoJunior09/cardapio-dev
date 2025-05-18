import { ReactNode } from "react";

interface Props {
  label: string;
  icon?: ReactNode;
  select: boolean;
}

export default function Tags({ label, icon, select }: Props) {
  return (
    <button
      className={`flex items-center justify-center gap-1 px-3 py-1 rounded-xl font-medium duration-300 transition delay-300 ease-in
    ${
      select
        ? "bg-red-500 text-white hover:bg-red-600"
        : "bg-gray-200 hover:bg-gray-300 text-gray-500 "
    }`}
    >
      {icon}
      {label}
    </button>
  );
}
