"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/quotes", label: "Quotes" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 p-4 backdrop-blur-md bg-background/80 border-b border-border/50">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "inline-flex items-center justify-center h-7 px-2.5 rounded-lg text-sm font-medium transition-all duration-300",
            pathname === link.href
              ? "bg-primary text-primary-foreground scale-105"
              : "hover:bg-muted hover:text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
