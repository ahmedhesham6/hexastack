"use client";
import { Button } from "@hexastack/ui/components/button";
import { useSession } from "@/lib/auth";

export default function Page() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-2xl">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
