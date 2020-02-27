import React, { useContext } from "react";
import { useStyles } from "@hooks";
import { modalStyle } from "@assets/jss";
import { Modal as ModalUi, Paper, Backdrop, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import { DeleteUserModal } from "@components";
import { UiContext } from "@context";

const Modal = props => {
  const classes = useStyles(modalStyle);
  const { state, dispatch } = useContext(UiContext);

  const handleClose = () => {
    dispatch({ type: "toogleModal" });
  };

  const modalTypes = {
    deleteUser: DeleteUserModal
  };

  const ActiveModal = modalTypes[state.modal.type];

  return (
    <ModalUi
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={state.modal.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100
      }}
    >
      <Fade in={state.modal.open}>
        <Paper className={classes.paper}>
          {!ActiveModal ? null : <ActiveModal {...state.modal.props} />}
        </Paper>
      </Fade>
    </ModalUi>
  );
};

Modal.propTypes = {
  opened: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Modal;
