/* eslint-disable react/prop-types */
import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import useColorModeColors from "../../hooks/useColorModeColors";

function CustomDescription({ description, word, seeMoreButton }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const useSeeMoreButton = seeMoreButton !== undefined ? seeMoreButton : true;
  const displayThreshold = word !== undefined ? word : 500;
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();

  const truncatedDescription = showFullDescription
    ? description || "No description available"
    : description
      ? `${description.slice(0, displayThreshold)}...`
      : "No description available";

  const handleSeeMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Text marginTop="12px">
        {truncatedDescription}{" "}
        {description?.length > displayThreshold && useSeeMoreButton && (
          <Button
            size=""
            fontSize="10px"
            paddingY="3px"
            paddingX="4px"
            color={addButtonTextColor}
            backgroundColor={addButtonBgColor}
            _hover={{ backgroundColor: addButtonHoverColor }}
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
