"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-black flex items-center justify-center min-h-screen flex-col gap-4 p-4">
      <h2 className="font-bold text-2xl">Oops! Something went wrong</h2>
      <p className="text-gray-600 max-w-md text-center">
        {error?.message || "An unexpected error occurred"}
      </p>
      <button className={cn(buttonVariants())} onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
