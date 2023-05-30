import { StoryLayout } from "../../../shared/StoryLayout"
import { Box, Flex, Text } from "@chakra-ui/react"
import v1Font from "../../foundations/textStyles"

export function DisplayTypography() {
  const font = Object.entries(v1Font)
  return (
    <StoryLayout title="Typography">
      <Box>
        <Box>
          {font.map(([textStyleKey, fontValues]) => (
            <Flex key={textStyleKey} marginY="4" direction="column">
              <Flex alignItems="center" justifyContent="space-between" rounded="lg" color="grayscale.white" mb="2">
                <Text textStyle="text-lg-mono-semibold">
                  {textStyleKey}
                </Text>
                <Text textStyle={textStyleKey}>Lorem aliqua deserunt officia ut.</Text>
              </Flex>
              <Flex direction="column" alignItems="center" border="1px solid" borderColor="black.100" bg="chocolate.900">
                {Object.entries(fontValues).map(([fontProperty, value]: any, i) => {
                  return (
                    <Flex key={i} py="2" px="4" justifyContent="space-between" w="full">
                      <Text textStyle="text-base-mono-semibold" color="grayscale.400">{fontProperty}:</Text>
                      <Text textStyle="text-base-mono-semibold">{value}</Text>
                    </Flex>
                  )
                })}
              </Flex>
            </Flex>
          ))}
        </Box>
      </Box>
    </StoryLayout>
  )
}
