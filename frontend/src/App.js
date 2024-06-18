import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { AppContainer } from "./App.styles";
import AnimatedTitle from "./components/AnimatedTitle";
import { queryClient } from "./index";
import InputNewName from "./components/InputNewName";
import AvatarUploader from "./components/AvatarUploader";
import AvatarComponent from "./components/AvatarComponent";
import axios from "./axios-instance";


function App() {
  const {
    data: myData,
    error,
    isLoading,
    refetch: refetchName,
  } = useQuery("myName", async () => {
    const response = await axios.get("/api/name");
    return response.data;
  });

  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(""); 

  const mutationName = useMutation(
    (newName) => axios.post("/api/name", { name: newName }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("myName");
        setName("");
      },
    }
  );

  const handleSubmitName = (e) => {
    e.preventDefault();
    mutationName.mutate(name);
  };

  const handleFileChange = async (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);

    try {
      const response = await axios.post("/api/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data && response.data.avatarUrl) {
      setAvatarUrl(response.data.avatarUrl);
      console.log(response.data.avatarUrl)
      refetchName(); 
    } else {
      console.error("Invalid response format:", response);
    }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error obtaining name: {error.message}</div>;

  return (
    <AppContainer>
      <AvatarComponent avatarUrl={avatarUrl || myData.defaultAvatarUrl} />
      <AvatarUploader handleFileChange={handleFileChange}/>
      <AnimatedTitle myData={myData} />
      <InputNewName
        name={name}
        setName={setName}
        handleSubmit={handleSubmitName}
        refetch={refetchName}
      />
    </AppContainer>
  );
}

export default App;
