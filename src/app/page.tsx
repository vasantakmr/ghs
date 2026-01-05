import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-wrap gap-3 items-center justify-center antialiased">
      <Link
        href="/livohaus"
        className="text-lg px-6 py-2 bg-foreground text-background rounded-md"
      >
        ghs 1
      </Link>
      <Link
        href="/measure"
        className="text-lg px-6 py-2 bg-foreground text-background rounded-md"
      >
        ghs 2
      </Link>

      <Link
        href="/tessera"
        className="text-lg px-6 py-2 bg-foreground text-background rounded-md"
      >
        ghs-3
      </Link>
    </div>
  );
}
