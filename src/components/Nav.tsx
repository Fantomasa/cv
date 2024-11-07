import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export type NavItem = { name: string; link: string; icon?: React.ReactNode };

export default function Nav({ navItems, className }: { navItems: Array<NavItem>; className?: string }) {
  return (
    <nav
      className={cn(
        "flex w-full md:w-1/2 fixed top-10 inset-x-0 mx-auto border rounded-full z-[150] py-2 px-4 items-center border-white/[0.2] bg-black-100/90 justify-between text-xs md:text-sm",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center justify-center gap-2">
          <Image className="size-8 rounded-full" width={100} height={100} src="/Fantomasa.png" alt="avatar" />
          <p>Ivaylo Georiev</p>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-2">
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={`/${navItem.link}`}
            className={cn("text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 ")}
          >
            <span>{navItem.icon}</span>
            <span>{navItem.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
