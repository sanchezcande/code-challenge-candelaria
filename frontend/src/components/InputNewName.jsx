import React from "react";
import { InputContainer } from "./InputNewName.styles";

export default function InputNewName({ name, setName, handleSubmit, refetch }) {
  return (
    <InputContainer onSubmit={handleSubmit}>
      <input
        id="newName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='change "my" name'
        onClick={() => refetch()}
      />
      <button type="submit">Submit</button>
    </InputContainer>
  );
}
