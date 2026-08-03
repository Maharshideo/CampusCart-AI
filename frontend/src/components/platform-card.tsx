import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Platform } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  platform: Platform;
  activeOrders?: number;
  onClick?: () => void;
  className?: string;
}

export function PlatformCard({ platform, activeOrders = 0, onClick, className }: Props) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "group cursor-pointer border-border/70 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: platform.color }}
              aria-hidden
            />
            <div>
              <h3 className="text-base font-semibold text-foreground">{platform.name}</h3>
              <p className="text-xs text-muted-foreground">{platform.category}</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </div>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            Free above <span className="font-semibold text-foreground">₹{platform.freeDeliveryThreshold}</span>
          </span>
          <span className="rounded-full bg-accent px-2 py-0.5 font-medium text-accent-foreground">
            {activeOrders} active
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
