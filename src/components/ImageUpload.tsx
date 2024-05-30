import { uploadImage } from "@/services/ImageService";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

type ImageUploadProps = {
  onImageUrlChange: (imageUrl: string) => void;
};

export default function ImageUpload({ onImageUrlChange }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      setPreviewUrl(URL.createObjectURL(event.target.files[0]));
    } else {
      setPreviewUrl("");
    }

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await uploadImage(formData);
        console.log("RESPONSE", response);
        const imageUrl = response.imageUrl;
        console.log("URL", imageUrl);
        onImageUrlChange(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error al cargar la imagen. Inténtalo de nuevo.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="py-2 px-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 cursor-pointer"
      />
      {previewUrl ? (
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-md">
          <img alt="preview horse" src={previewUrl} className="w-full" />
        </div>
      ) : null}
    </div>
  );
}
