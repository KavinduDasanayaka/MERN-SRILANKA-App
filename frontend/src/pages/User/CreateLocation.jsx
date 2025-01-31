import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateLocationMutation,
  useUploadImageMutation,
} from "../../redux/api/location";
import { toast } from "react-toastify";

function CreateLocation() {

  const navigate = useNavigate();

  const [LocationData, setLocationData] = useState({
    name: "",
    detail: "",
    type: [],
    score: "",
    image: null,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const[CreateLocation,{isLoading:isCreatingLoading}] = useCreateLocationMutation()
  //,{error:createErrorDetails}

  const handleCreateLocation = async () => {
    try {
      if (!LocationData.name || !LocationData.detail || !LocationData.type.length || !selectedImage || !LocationData.score) {
        toast.error("Please fill all required fields");
        return;
      }
  
      let uploadedImagePath = null;
  
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);
  
        const uploadImageResponse = await uploadImage(formData);
  
        if (uploadImageResponse.error) {
          console.error("Failed to upload image: ", uploadImageResponse.error);
          toast.error("Failed to upload image");
          return;
        }
  
        uploadedImagePath = uploadImageResponse.data.image;
      }
  
      const createLocationResponse = await CreateLocation({
        ...LocationData,
        image: uploadedImagePath,
      });
  
      if (createLocationResponse.error) {
        console.error("Failed to create location: ", createLocationResponse.error);
        toast.error("Failed to create location");
        return;
      }
  
      toast.success("Location Added Successfully");
  
      setLocationData({
        name: "",
        detail: "",
        type: [],
        score: 0,
        image: null,
      });
  
      setSelectedImage(null);
    } catch (error) {
      console.error("Error creating location: ", error);
      toast.error("An error occurred while creating the location");
    }
  };
  
  
  
  
  const [uploadImage,{ isLoading: isUploadingImage, error: uploadImageErrorDetails }] = useUploadImageMutation();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  }


  return (
      
    <div className="flex justify-center flex-none h-screen pl-10 m-0 bg-gray-800">
          <div className="container flex  mt-4 items-center pr-0 mr-0 ">
              <form>
                <p className="text-green-300 w-[50rem] text-2xl mb-4">Create Location Post</p>
                <div className="mb-4">
                  <label className="inline">
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={LocationData.name}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="inline">
                    Detail:
                    <textarea
                      name="detail"
                      value={LocationData.detail}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    ></textarea>
                  </label>
                </div>
                <div className="mb-4">
                  <label className="inline">
                    type:(comma , seperated)
                    <input
                      type="text"
                      name="type"
                      value={LocationData.type.join(", ")}
                      onChange={(e) =>
                        setLocationData({ ...LocationData, type: e.target.value.split(", ") })
                      }
                      className="border px-2 py-1 w-full"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="inline">
                    Score:
                    <input
                      type="Number"
                      name="score"
                      value={LocationData.score}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    style={
                      !selectedImage
                        ? {
                            border: "1px solid #888",
                            borderRadius: "5px",
                            padding: "8px",
                          }
                        : {
                            border: "0",
                            borderRadius: "0",
                            padding: "0",
                          }
                    }
                  >
                    {!selectedImage && "Upload Image"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: !selectedImage ? "none" : "block" }}
                    />
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleCreateLocation}
                  className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-green-600"
                  disabled={isCreatingLoading || isUploadingImage}
                >
                  {isCreatingLoading || isUploadingImage ? "Creating..." : "Create Location"}
                </button>
              </form>
            </div>
            <img src="https://www.siemreapshuttle.com/wp-content/uploads/elementor/thumbs/Siem-Reap-Tours-to-Beng-Mealea-Koh-Ker-temple-tour-with-small-group-shared-tour-by-siemreapshuttle.com_-q7nb3u0cryuzh65zeyxkjq9h4c9559d36hz509a8h0.jpg" width={600} height={100} className="p-10 rounded-lg"></img>
    </div>

  )
}

export default CreateLocation
