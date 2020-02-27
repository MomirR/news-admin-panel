import React, { useEffect, useState } from "react";
import { FormWrapper } from "@forms";
import PropTypes from "prop-types";
import { withTokenAxios } from "@hooks";
import { Spinner, UserProfileShort } from "@components";

const EditUserProfilePage = ({ match }) => {
  const [userData, setUserData] = useState(null);
  const id = match.params.id;

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const res = await withTokenAxios.get(`user/getSingleUser/${id}`);
        const userData = res.data.user;
        setUserData(userData);
      } catch (error) {
        return error.response;
      }
    };

    fetchSingleUser();
  }, [id]);

  if (!userData) {
    return <Spinner />;
  }

  return (
    <>
      <UserProfileShort user={userData} />
      <FormWrapper userData={userData} />
    </>
  );
};

export default EditUserProfilePage;

EditUserProfilePage.propTypes = {
  id: PropTypes.string
};
