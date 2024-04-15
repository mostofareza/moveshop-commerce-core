import React from "react"
import IconProps from "../types/icon-type"

const FilterIcon: React.FC<IconProps> = ({
  size = "20px",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M9 0.998952C10.1135 0.998952 11.1797 1.20115 12.164 1.57084L10.9808 2.76329C10.3498 2.59096 9.68564 2.49895 9 2.49895C4.85786 2.49895 1.5 5.85682 1.5 9.99895C1.5 11.4238 1.89727 12.7882 2.63583 13.9693C2.93764 14.452 3.29368 14.8992 3.69639 15.3019C4.09848 15.7041 4.5449 16.0597 5.02668 16.3613C6.20844 17.101 7.57394 17.499 9 17.499C13.1421 17.499 16.5 14.1411 16.5 9.99895C16.5 9.34232 16.4156 8.70539 16.2571 8.09842L17.4505 6.89515C17.8059 7.86267 18 8.90815 18 9.99895C18 14.9695 13.9706 18.999 9 18.999C7.29039 18.999 5.64945 18.5207 4.23081 17.6327C3.65294 17.271 3.1177 16.8446 2.63566 16.3625C2.1529 15.8797 1.72601 15.3435 1.36401 14.7646C0.477401 13.3468 0 11.7071 0 9.99895C0 5.02839 4.02944 0.998952 9 0.998952ZM18.0602 0.6709L18.2062 0.806862C19.2817 1.88301 19.285 3.62611 18.2135 4.70622L11.9096 11.0607C11.7291 11.2427 11.5049 11.3753 11.2585 11.4461L7.04606 12.6549C6.78064 12.7311 6.50371 12.5777 6.42754 12.3122C6.40169 12.2221 6.40168 12.1266 6.42752 12.0365L7.63778 7.81685C7.70736 7.57427 7.83701 7.35317 8.01473 7.17402L14.3236 0.814102C15.3448 -0.215282 16.9803 -0.264587 18.0602 0.6709ZM15.3886 1.87048L9.07965 8.2304L8.36693 10.7153L10.8447 10.0042L17.1486 3.64981C17.6057 3.18895 17.6349 2.46407 17.2371 1.96949L17.1415 1.86343C16.6555 1.38132 15.8707 1.38448 15.3886 1.87048Z"
        fill="#242424"
      />
    </svg>
  )
}

export default FilterIcon