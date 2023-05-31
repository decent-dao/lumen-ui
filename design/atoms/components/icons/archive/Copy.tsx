import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Copy: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Copy",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7ZM5.003 8 5 20h10V8H5.003ZM9 6h8v10h2V4H9v2Z"
      fill="currentColor"
    />
  ),
})
