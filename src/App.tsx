import React from 'react';
import { Box, Button, Heading, Text } from "rimble-ui";
 
interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <Box>
        <Heading>Your Heading</Heading>
        <Text>Some of text of yours here</Text>
        <Button> click me! </Button>
      </Box>
    </div>
  );
}

export default App;
