/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
import React from "react"
import { Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { SteppedContext } from "../../components/molecules/modal/stepped-modal"
import { LayeredModalContext } from "../../components/molecules/modal/layered-modal"
import StepperMVN from "../../moveshop-ui/components/molecules/stepper"
import { clx } from "../../utils/clx"
import Panels from "../../moveshop-ui/steps/panels"
import Example from "../../moveshop-ui/steps/circles"
import IconCircle from "../../moveshop-ui/components/fundamentals/icon-circle"

type StepProps = {
  label: string
  title: string
  subtitle: string
}

const Step = () => {
  return (
    <>
      <div>step</div>
    </>
  )
}
interface ProgressStepProps {
  isComplete?: boolean
  label?: string
  icon?: boolean
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  isComplete,
  label,
  icon,
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="46"
          viewBox="0 0 192 46"
          fill="none"
        >
          <path d="M0 0H176L192 23L176 46H0V0Z" fill="#171717" />
        </svg>
      </div>
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform  ">
        <div className="flex">
          <div>
            <p>Business Need</p>
          </div>
          <div className={clx("rounded-lg border bg-white")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.37473 9.66787L2.47949 6.77264L3.2033 6.04883L5.37473 8.22025L10.035 3.55994L10.7589 4.28375L5.37473 9.66787Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProgressStepper = () => {
  return (
    <div className={clx("flex justify-center")}>
      <div className={clx("flex")}>
        <ProgressStep />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="210"
            height="46"
            viewBox="0 0 210 46"
            fill="none"
          >
            <path
              d="M0 0H191.852L210 23L191.852 46H0L16.4667 23L0 0Z"
              fill="#171717"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="187"
            height="46"
            viewBox="0 0 187 46"
            fill="none"
          >
            <path d="M169 46H0L17.5 23L0 0H169L187 23L169 46Z" fill="#EEEEEE" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const StepHeader = () => {
  return (
    <>
      <div className="text-center">
        <p className={clx("text-large ")}>
          Hey Ahsan, we’re excited to have you!
        </p>
        <h1 className={clx("mt-3 text-2xl font-medium ")}>
          Where would you like to sell?
        </h1>
      </div>
    </>
  )
}

const StepCardBusiness = ({ icon, title }) => {
  return (
    <>
      <div
        className={clx(
          " flex w-full flex-col items-center justify-between rounded-lg border-2 border-black p-5"
        )}
      >
        <label htmlFor="business" className="flex flex-col items-center  gap-3">
          {icon}
          <input type="checkbox" id="business" className="hidden" />
          <span className="text-large">{title}</span>
        </label>
      </div>
    </>
  )
}

const StepCardSell = ({ icon, title }) => {
  return (
    <>
      <div className={clx(" items-center rounded-lg border border-black p-5")}>
        <label
          htmlFor={`${title}`}
          className="mb-3  flex items-center  justify-between gap-3"
        >
          {icon}
          <input type="checkbox" id={`${title}`} className={clx(" h-4 w-4")} />
        </label>
        <h3 className="text-large font-semibold">
          Products I buy or make myself
        </h3>
        <p className="text-large">{title}</p>
      </div>
    </>
  )
}

const Step1 = () => {
  return (
    <>
      <div>
        <StepHeader />
        <div className="mt-4">
          <p>What is your Business Need?</p>

          <div className="mt-4 flex justify-between gap-3">
            <StepCardBusiness
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business1"}
            />
            <StepCardBusiness
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business2"}
            />
          </div>
          <p className="mt-12">What are you planning to sell in your store?</p>
          <div className="mt-4 flex flex-col gap-3">
            <StepCardSell
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business Online3"}
            />
            <StepCardSell
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business Online4"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const Step2 = () => {
  return (
    <>
      <div>
        <StepHeader />
        <div className="mt-4">
          <p className="mt-12">What are you planning to sell in your store?</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <StepCardSell
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business Online11"}
            />
            <StepCardSell
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business Online22"}
            />

            <StepCardSell
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business Online33"}
            />
            <StepCardSell
              icon={<IconCircle className="h-10 w-10" />}
              title={"I’m just starting my Business Online44"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const Step3 = () => {
  return (
    <>
      <div>
        <StepHeader />

        <div className="mt-4">
          <label htmlFor="business">
            <span>Where is your business located?</span>
          </label>
          <div className="mb-3 flex gap-3 rounded-lg border p-4">
            <input type="checkbox" id="business" />
            <span>Bangladesh</span>
          </div>
          <div className="flex gap-3 ">
            <div className=" rounded-lg  border p-3">
              Bangladeshi Taka (BDT)
            </div>
            <div className="  rounded-lg border p-3">
              Bangladeshi Taka (BDT)
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="business">
            <span>Where is your business located?</span>
          </label>
          <div className="mb-3 flex gap-3 rounded-lg border p-4">
            <input type="checkbox" id="business" />
            <span>Bangladesh</span>
          </div>
          <div className="flex gap-3 ">
            <div className=" rounded-lg  border p-3">
              Bangladeshi Taka (BDT)
            </div>
            <div className="  rounded-lg border p-3">
              Bangladeshi Taka (BDT)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const OnboardingIndex = () => {
  const { t } = useTranslation()

  const steppedContext = React.useContext(SteppedContext)
  const layeredContext = React.useContext(LayeredModalContext)

  return (
    <>
      {/* <Panels /> */}
      {/* <Example /> */}
      {/* <ProgressStepper /> */}
      <div className={clx("")}>
        <div className="">
          <StepperMVN
            layeredContext={layeredContext}
            context={steppedContext}
            onSubmit={() => {
              alert("onsubmit")
            }}
            steps={[<Step1 />, <Step2 />, <Step3 />]}
            handleClose={() => {
              alert("handleClose")
            }}
            handleSkip={() => {
              alert("handleSkip")
            }}
          />

          <div className="mb-5 text-center text-2xl ">
            <a href="/a/home">
              click here go to{" "}
              <span className="underline"> admin dashboard </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

const Onboarding = () => {
  return (
    <Routes>
      <Route index element={<OnboardingIndex />} />
    </Routes>
  )
}

export default Onboarding
