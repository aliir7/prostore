import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import logoImg from "../../../public/images/logo.svg";

function Logo() {
  return (
    <Link href="/" className="flex-start">
      <Image
        src={logoImg}
        alt={`${APP_NAME}`}
        priority={true}
        width={48}
        height={48}
      />
      <span className="ml-3 hidden text-2xl font-bold lg:block">
        {APP_NAME}
      </span>
    </Link>
  );
}

export default Logo;
