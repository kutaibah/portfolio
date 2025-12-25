"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 p-4 backdrop-blur-md bg-background/80 border-b border-border/50">
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant={pathname === link.href ? "default" : "ghost"}
          size="sm"
          nativeButton={false}
          render={<Link href={link.href} />}
          className={cn(
            "transition-all duration-300",
            pathname === link.href && "scale-105"
          )}
        >
          {link.label}
        </Button>
      ))}
    </nav>
  );
}

