/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FullscreenModal.jsx
import React from "react";
import ReactModal from "react-modal";
import { IconButton } from "@chakra-ui/react";
import { FaCompress } from "react-icons/fa";

import CodeBlockForFullscreen from "../mainContent/function/CodeBlockForFullScreen";

const FullscreenModal = ({ code, language, isOpen, onRequestClose}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      height: "100vh",
      padding: 0,
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <IconButton
      h="33px"
        icon={<FaCompress />}
        onClick={onRequestClose}
        aria-label="Close fullscreen"
        position="absolute"
        right="10px"
        top="14px"
        zIndex="tooltip"
      />
      <CodeBlockForFullscreen code={code} language={language} />
    </ReactModal>
  );
};

export default FullscreenModal;
