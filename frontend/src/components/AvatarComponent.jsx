import React from "react";
import { Avatar } from "./AvatarComponent.styles";

const AvatarComponent = ({ avatarUrl }) => {
  const defaultAvatar = "http://localhost:3000/uploads/avatar-by-default.png";

  return (
    <div>
      <Avatar src={avatarUrl || defaultAvatar} alt="Avatar" width="200" />
    </div>
  );
};

export default AvatarComponent;
