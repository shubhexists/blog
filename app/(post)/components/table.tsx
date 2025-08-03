import type { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {children}
      </table>
    </div>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>;
}

export function TBody({ children }: { children: ReactNode }) {
  return (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </tbody>
  );
}

export function TR({ children }: { children: ReactNode }) {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      {children}
    </tr>
  );
}

export function TH({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white tracking-wider ${className}`}
    >
      {children}
    </th>
  );
}

export function TD({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={`px-6 py-4 text-sm text-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </td>
  );
}

export function CompactTable({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700">
        {children}
      </table>
    </div>
  );
}

export function CompactTH({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 ${className}`}
    >
      {children}
    </th>
  );
}

export function CompactTD({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={`px-4 py-2 text-sm text-gray-600 dark:text-gray-300 ${className}`}
    >
      {children}
    </td>
  );
}

export function StateTable({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg border border-blue-200 dark:border-gray-600">
        {children}
      </table>
    </div>
  );
}

export function StateHeader({ children }: { children: ReactNode }) {
  return (
    <th className="px-6 py-4 text-left font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-100 dark:bg-gray-800 border-b-2 border-indigo-200 dark:border-gray-600">
      {children}
    </th>
  );
}

export function StateCell({
  children,
  color,
}: {
  children: ReactNode;
  color?: "red" | "green" | "blue";
}) {
  const colorClasses = {
    red: "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-l-4 border-red-400",
    green:
      "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-l-4 border-green-400",
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-l-4 border-blue-400",
  };

  return (
    <td
      className={`px-6 py-4 text-sm ${
        color ? colorClasses[color] : "text-gray-700 dark:text-gray-300"
      }`}
    >
      {children}
    </td>
  );
}
