import React, { forwardRef } from "react";
import { styled } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import PropTypes from "prop-types";
import clsx from "clsx";
import Paper from "@mui/material/Paper";

const CreateTaskFormule = ({ open = false, handleClose }) => {

  return (
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <Paper sx={{ width: 500, padding: "1.5em" }} p={2}>
        <h2 id="unstyled-modal-title" className="modal-title">
          Text in a modal
        </h2>
        <p id="unstyled-modal-description" className="modal-description">
          Aliquid amet deserunt earum!
        </p>
      </Paper>
    </Modal>
  );
};

const Backdrop = forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default CreateTaskFormule