import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

function CartMenu() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start">
          <SheetTitle>Menu</SheetTitle>
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </SheetContent>
        <SheetDescription></SheetDescription>
      </Sheet>
    </nav>
  );
}

export default CartMenu;
