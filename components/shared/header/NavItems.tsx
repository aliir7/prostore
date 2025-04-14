import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import CartMenu from "./CartMenu";

function NavItems() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden w-full max-w-xs gap-1 md:flex">
        <ThemeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </nav>
      <CartMenu />
    </div>
  );
}

export default NavItems;
