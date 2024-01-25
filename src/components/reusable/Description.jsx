/* eslint-disable react/prop-types */
import { Text } from "@chakra-ui/react";

import { useState } from "react";
import { Button } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";
function CustomDescription({ description, word }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const displayThreshold = `${word ? word : 500}`;
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();

  const truncatedDescription = showFullDescription
    ? description
    : `${description?.slice(0, displayThreshold)}...`;

  const handleSeeMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Text marginTop="12px">
        {truncatedDescription}{" "}
        {description?.length > displayThreshold && (
          <Button
            size=""
            fontSize="10px"
            paddingY="3px"
            paddingX="4px"
            color={addButtonTextColor}
            backgroundColor={addButtonBgColor}
            _hover={{ backgroundColor: `${addButtonHoverColor}` }}
            onClick={handleSeeMoreClick}
          >
            {showFullDescription ? "See Less" : "See More"}
          </Button>
        )}
      </Text>
    </>
  );
}

export default CustomDescription;
