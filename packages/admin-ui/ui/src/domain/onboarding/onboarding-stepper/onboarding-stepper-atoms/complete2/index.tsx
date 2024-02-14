import { clx } from "../../../../../utils/clx"
import { Check } from "@medusajs/icons"

const IconStepperArrowComplete2 = ({
  className,
  cssId,
}: {
  className?: string
  cssId: string
}) => {
  return (
    <div
      id={cssId}
      className={clx(" absolute  flex items-center justify-center", className)}
    >
      <div className="flex gap-1 text-white ">
        <div className="flex  h-[24px] w-[24px] items-center justify-center rounded-full bg-white">
          <Check className=" text-black " />
        </div>
        <h4>Product Type</h4>
      </div>
    </div>
  )
}

export default IconStepperArrowComplete2
