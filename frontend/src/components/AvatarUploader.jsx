import React from "react";
import { Input } from "./AvatarUploader.styles";

const AvatarUploader = ({ handleFileChange }) => {
  return (
    <form>
      <Input type="file" onChange={handleFileChange} accept="image/*" placeholder="Update Avatar" />

    </form>
  );
};

export default AvatarUploader;
