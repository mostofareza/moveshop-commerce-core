import clsx from "clsx"
import React from "react"

type IconBadgeProps = {
  variant?:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "ghost"
    | "default"
    | "disabled"
} & React.HTMLAttributes<HTMLDivElement>

const IconCircle: React.FC<IconBadgeProps> = ({
  children,
  variant,
  className,
  ...rest
}) => {
  return (
    <>
      <div className={clsx("h-6  w-6  rounded-full bg-black", className)}></div>
    </>
  )
}

export default IconCircle
