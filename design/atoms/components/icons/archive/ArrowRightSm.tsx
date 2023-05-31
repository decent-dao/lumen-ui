import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"
export const ArrowRightSm: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "ArrowRightSm",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpArrowRightSm)">
        <path d="M12.172 12 9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415L12.172 12Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpArrowRightSm">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
