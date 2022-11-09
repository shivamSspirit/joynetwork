
function useFiles() {
  const uploadFiles = async (media, setMediaURL, setOpa, setDeleteToken) => {
    const mediaType = media?.type?.split("/")[0];
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_SECRET);
    const requestOptions = {
      method: "POST",
      body: data,
    };
    const url =
      mediaType === "video"
        ? "https://api.cloudinary.com/v1_1/ddwkxn8ak/video/upload"
        : "https://api.cloudinary.com/v1_1/ddwkxn8ak/image/upload";
    setOpa(true);
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json)
        setMediaURL(json.secure_url);
        setDeleteToken(json.delete_token)
        setOpa(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteFiles = async (deleteToken, setMediaURL, setDeleteToken) => {
    try {
      const formData = new FormData();
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_API_SECRET
      );
      formData.append("token", deleteToken);
      await fetch("https://api.cloudinary.com/v1_1/ddwkxn8ak/delete_by_token", {
        method: "POST",
        body: formData,
      });
      if (setDeleteToken) {
        setDeleteToken(null);
        setMediaURL("");
      }
    } catch (error) {
      console.error("deleteMedia: Error In deleting Media", error);
      if (setDeleteToken) {
        setDeleteToken(null);
        setMediaURL("");
      }
    }
  };

  return { uploadFiles, deleteFiles };
}

export { useFiles };