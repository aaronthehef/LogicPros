import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Avatar = ({ avatarVariant, className }) => {
  return <div className={`avatar ${className}`} />;
};

Avatar.propTypes = {
  avatarVariant: PropTypes.oneOf(["default"]),
};