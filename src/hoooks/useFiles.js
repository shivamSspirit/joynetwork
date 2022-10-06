import { setpostsData } from "../actions/post";

function useFiles() {
  const uploadFiles = async (media, setMediaURL, setOpa, setDeleteToken) => {
    const mediaType = media?.type?.split("/")[0];
    //   if (mediaType === "video" && Math.round(media.size / 1024000) > 10)
    //     toast.error("Video size should be less than 10MB");
    //   else if (Math.round(media.size / 1024000) > 4)
    //     toast.error("Image size should be less than 4MB");
    //   else {
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
        // toast.error("Media Uploading failed");
      });
    //   }
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