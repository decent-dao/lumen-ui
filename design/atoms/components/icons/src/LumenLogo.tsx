import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const LumenLogo: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "LumenLogo",
  viewBox: "0 0 24 24",
  path: <path fillRule="evenodd" clipRule="evenodd"
    d="M0.525061 8.78904L8.56827 13.2412L0 13.2412L2.28882e-06 15.7671L10.8294 15.7671C10.6873 15.4161 10.6091 15.0324 10.6091 14.6305C10.6091 12.9564 11.9662 11.5993 13.6403 11.5993C13.9955 11.5993 14.3365 11.6604 14.6533 11.7727L14.6533 0.232424L12.1273 0.232422L12.1273 9.65463L7.40829 1.49462L5.22164 2.75917L10.1061 11.2053L1.74836 6.57904L0.525061 8.78904Z"
    fill="#0332DB" />,
})
