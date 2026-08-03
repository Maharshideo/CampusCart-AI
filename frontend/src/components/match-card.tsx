import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { Check, Clock } from "lucide-react";
import type { MatchSuggestion } from "@/types";
import { getPlatform } from "@/data/platforms";

export function MatchCard({ match }: { match: MatchSuggestion }) {
  const platform = getPlatform(match.platform);
  return (
    <Card className="border-border/70 shadow-sm transition-all hover:shadow-md">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <UserAvatar name={match.user.name} src={match.user.avatarUrl} size="lg" />
            <div>
              <p className="text-sm font-semibold text-foreground">{match.user.name}</p>
              <p className="text-xs text-muted-foreground">{match.hostel}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold tracking-tight text-primary">{match.matchPercent}%</div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">match</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: platform?.color }} />
            {platform?.name}
          </span>
          <span className="text-muted-foreground">Cart ₹{match.amount}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" /> {match.expiresInMin}m left
          </span>
        </div>

        <ul className="space-y-1.5">
          {match.reasons.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="gap-2 p-5 pt-0">
        <Button variant="outline" className="flex-1">View details</Button>
        <Button className="flex-1">Join order</Button>
      </CardFooter>
    </Card>
  );
}
