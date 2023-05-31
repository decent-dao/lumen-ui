import React from 'react'
import { Text, Box } from "@chakra-ui/react";
interface ITitleBanner {
  title?: string;
}

export function TitleBanner({title}: ITitleBanner) {
  return (
    <Box bg="#2C2C2C" padding="8" borderRadius="8">
      <Text color="#FFFFFF" textStyle="display-lg">{title}</Text>
    </Box>
  )
}