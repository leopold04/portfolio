import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom">
      <div className="fixed bottom-0 inset-x-0 h-20 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <nav className="z-50 pointer-events-auto relative mx-auto flex items-center gap-2 px-4 py-3 h-14 bg-background rounded-lg border [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "default" }),
              "flex items-center gap-2 h-10 px-4 text-base"
            )}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </Link>
        ))}
        <Separator orientation="vertical" className="h-8" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "flex items-center gap-2 h-10 px-4 text-base"
              )}
            >
              <social.icon className="size-5" />
              <span>{name}</span>
            </Link>
          ))}
        <Separator orientation="vertical" className="h-8" />
        <ModeToggle />
      </nav>
    </div>
  );
}
