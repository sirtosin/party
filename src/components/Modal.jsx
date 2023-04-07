import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  //   border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 7,
};

export default function BasicModal({ handleClose, openModal }) {
  return (
    <div className="modal">
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p onClick={handleClose} className="close">
            <MdClose className="text-gray-500 font-bold" />
          </p>
          <h2 className="text-center capitalize font-bold mt-5">
            🎊 Thank you 💞 for becoming a member
          </h2>
        </Box>
      </Modal>
    </div>
  );
}
