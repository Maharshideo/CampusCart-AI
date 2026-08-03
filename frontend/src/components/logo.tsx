import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <ShoppingCart className="h-4 w-4" strokeWidth={2.5} />
      </div>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          CampusCart
        </span>
      )}
    </div>
  );
}
