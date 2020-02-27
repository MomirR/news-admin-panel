import React from "react";
import { Typography } from "@material-ui/core";
import { CustomButton } from "@components";

const DeleteUserModal = ({ handleClick, user }) => {
  return (
    <>
      <Typography variant="h5">
        Brisanje korisnika {user.firstName + " " + user.lastName}
      </Typography>
      <Typography variant="body1"> Da li ste sigurni?</Typography>
      <CustomButton
        // className={c.button}
        variant="danger"
        handleClick={() => handleClick(user._id)}
      >
        Obriši
      </CustomButton>
      <CustomButton variant="default">Nazad</CustomButton>
    </>
  );
};

export default DeleteUserModal;
