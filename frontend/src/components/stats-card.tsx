import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  value: string | number;
  icon: LucideIcon;
  hint?: string;
  trend?: string;
  className?: string;
}

export function StatsCard({ label, value, icon: Icon, hint, trend, className }: Props) {
  return (
    <Card className={cn("border-border/70 shadow-sm", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
            {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        {trend && <p className="mt-3 text-xs font-medium text-primary">{trend}</p>}
      </CardContent>
    </Card>
  );
}
