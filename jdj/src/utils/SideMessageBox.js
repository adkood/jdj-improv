import { Box } from "@chakra-ui/react";
import React from "react";

const SideMessageBox = () => {
  return (
    <Box
      position="fixed"
      bottom={50}
      right={4}
      p={4}
      backgroundColor="lightGreen"
      width={"120px"}
      height={"55px"}
      color="grey.500"
      borderRadius="10px" 
      boxShadow="md"
      zIndex={9999}
      _before={{
        content: "''",
        position: "absolute",
        bottom: "-1px",
        left: "-6px",
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: "10px solid lightGreen",
      }}
    >
      Contact-Us
    </Box>
  );
};

export default SideMessageBox;
