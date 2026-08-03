import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";
import type { Order } from "@/types";
import { getPlatform } from "@/data/platforms";

export function OrderCard({ order }: { order: Order }) {
  const platform = getPlatform(order.platform);
  const filled = order.participants.length;
  const fillPct = Math.min(100, (filled / order.maxParticipants) * 100);

  return (
    <Card className="flex flex-col border-border/70 shadow-sm transition-all hover:shadow-md">
      <CardContent className="flex-1 space-y-4 p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <UserAvatar name={order.creatorName} src={order.participants[0]?.avatarUrl} />
            <div>
              <p className="text-sm font-semibold text-foreground">{order.creatorName}</p>
              <p className="text-xs text-muted-foreground">{order.hostel}</p>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: platform?.color }} />
            {platform?.name}
          </span>
        </div>

        {order.note && (
          <p className="line-clamp-2 text-sm text-muted-foreground">"{order.note}"</p>
        )}

        <div className="grid grid-cols-3 gap-3 rounded-lg bg-muted/40 p-3 text-center">
          <div>
            <p className="text-xs text-muted-foreground">Cart</p>
            <p className="text-sm font-semibold text-foreground">₹{order.amount}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">You save</p>
            <p className="text-sm font-semibold text-primary">₹{order.savingsPerPerson}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Closes</p>
            <p className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
              <Clock className="h-3 w-3" /> 18m
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-3 w-3" /> {filled}/{order.maxParticipants} joined
            </span>
            <div className="flex -space-x-2">
              {order.participants.slice(0, 3).map((p) => (
                <UserAvatar key={p.userId} name={p.name} src={p.avatarUrl} size="sm" className="ring-2 ring-card" />
              ))}
            </div>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${fillPct}%` }} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2 p-5 pt-0">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/app/orders/${order.id}`}>Details</Link>
        </Button>
        <Button className="flex-1">Join Order</Button>
      </CardFooter>
    </Card>
  );
}
