import { StoryLayout } from "../../../shared/StoryLayout"
import { Box, Flex, Text } from "@chakra-ui/react"
import v1Font from "../../foundations/textStyles"

export function DisplayTypography() {
  const font = Object.entries(v1Font)
  return (
    <StoryLayout title="Typography">
      <Box>
        {font.map(([textStyleKey, fontValues]) => (
          <Flex key={textStyleKey} marginY="4" direction="column">
            <Flex alignItems="center" justifyContent="space-between" rounded="lg" color="#000" mb="2">
              <Text textStyle="display-lg">
                {textStyleKey}
              </Text>
              <Text textStyle={textStyleKey}>Lorem aliqua deserunt officia ut.</Text>
            </Flex>
            <Flex direction="column" alignItems="center" border="1px solid" borderColor="platinum.500">
              {Object.entries(fontValues).map(([fontProperty, value]: any, i) => {
                return (
                  <Flex key={i} py="2" px="4" justifyContent="space-between" w="full">
                    <Text textStyle="body-base-semibold" color="#2C2C2C">{fontProperty}:</Text>
                    <Text textStyle="body-base-semibold">{value}</Text>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>
        ))}
      </Box>
    </StoryLayout>
  )
}
