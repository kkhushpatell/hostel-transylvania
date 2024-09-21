import * as React from "react"
import { cn } from "@/utils/cn"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("block text-black font-semibold mb-2", className)}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
