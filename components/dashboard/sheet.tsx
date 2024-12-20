import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type sheetProps = {
  side: "left" | "right";
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const CustomSheet = ({
  side,
  trigger,
  children,
  className,
}: sheetProps) => {
  return (
    <Sheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent side={side} className="p-0">
        {children}
      </SheetContent>
    </Sheet>
  );
};
