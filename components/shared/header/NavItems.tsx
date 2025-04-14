import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";

function NavItems() {
  return (
    <div className="space-x-2">
      <Button asChild variant="ghost">
        <Link href="/cart">
          <ShoppingCart />
          Cart
        </Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/sign-in">
          <UserIcon />
          Sign In
        </Link>
      </Button>
    </div>
  );
}

export default NavItems;
