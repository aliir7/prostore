"use client";

import { APP_NAME } from "@/lib/constants";
import logoImg from "../public/images/logo.svg";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image src={logoImg} alt={`${APP_NAME} logo`} width={48} height={48} />
      <div className="w-1/3 rounded-lg p-6 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          onClick={() => redirect("/")}
          className="mt-4 ml-2"
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
