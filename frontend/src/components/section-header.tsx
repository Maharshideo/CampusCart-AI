import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, action, className, align = "left" }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("space-y-1.5", align === "center" && "mx-auto max-w-2xl")}>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{title}</h2>
        {description && <p className="text-sm text-muted-foreground md:text-base">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
