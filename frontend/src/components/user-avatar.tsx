import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: "h-7 w-7 text-xs", md: "h-9 w-9 text-sm", lg: "h-12 w-12 text-base" };

export function UserAvatar({ name, src, size = "md", className }: Props) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  return (
    <Avatar className={cn(sizeMap[size], className)}>
      <AvatarFallback className="bg-accent text-accent-foreground font-medium">{initials}</AvatarFallback>
    </Avatar>
  );
}
