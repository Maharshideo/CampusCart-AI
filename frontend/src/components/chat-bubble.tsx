import { UserAvatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";

export function ChatBubble({ message }: { message: ChatMessage }) {
  const self = !!message.self;
  return (
    <div className={cn("flex gap-2.5", self && "flex-row-reverse")}>
      <UserAvatar name={message.userName} src={message.avatarUrl} size="sm" />
      <div className={cn("flex max-w-[75%] flex-col gap-1", self && "items-end")}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{self ? "You" : message.userName}</span>
          <span>{message.timestamp}</span>
        </div>
        <div
          className={cn(
            "rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
            self
              ? "rounded-tr-sm bg-primary text-primary-foreground"
              : "rounded-tl-sm bg-muted text-foreground",
          )}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}
