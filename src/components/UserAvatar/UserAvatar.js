import React from "react";
import PropTypes from "prop-types";


import { Avatar } from "@material-ui/core";


const UserAvatar = props => {
    const {imageSrc ,firstName, lastName, ...other} = props
    return (
        <Avatar src={imageSrc} {...other}/>
    )
}

export default UserAvatar;

UserAvatar.propTypes = {
    imageSrc: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    other: PropTypes.object
}