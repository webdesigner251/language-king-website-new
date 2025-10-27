import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";

const TestimonialVideoForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    video_url: "",
    video_placeholder_img: ""
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    fetchTestimonialVideo();
  }, []);

  const fetchTestimonialVideo = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/testimonial-video');
      if (response.data) {
        setFormData(response.data);
      }
    } catch (error) {
      console.error("Error fetching testimonial video:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file, fieldName) => {
    if (!file) return;

    setUploading(prev => ({ ...prev, [fieldName]: true }));
    
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/api/upload', uploadFormData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      setFormData(prev => ({
        ...prev,
        [fieldName]: response.data.filename
      }));
    } catch (error) {
      console.error('Upload error:', error);
      setToast({ show: true, message: 'Error uploading file. Please try again.', type: 'error' });
    } finally {
      setUploading(prev => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.video_url) {
      setToast({ show: true, message: "Please upload a video file", type: "error" });
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/testimonial-video", formData);
      setToast({ show: true, message: "Testimonial video updated successfully!", type: "success" });
      setTimeout(() => onBack(), 1500);
    } catch (error) {
      console.error("Error saving testimonial video:", error);
      setToast({ show: true, message: "Error saving testimonial video. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Testimonial Main Video</h2>
        <p className="text-gray-600">Upload the main video for "Why Students Love Learning With Us" section</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Video File <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileUpload(e.target.files[0], 'video_url')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={uploading.video_url}
            />
            {uploading.video_url && <p className="text-blue-600 text-sm">Uploading video...</p>}
            {formData.video_url && <p className="text-green-600 text-sm">✓ Video uploaded: {formData.video_url}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Video Placeholder Image</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e.target.files[0], 'video_placeholder_img')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={uploading.video_placeholder_img}
            />
            {uploading.video_placeholder_img && <p className="text-blue-600 text-sm">Uploading image...</p>}
            {formData.video_placeholder_img && (
              <div className="flex items-center gap-2">
                <img
                  src={`http://localhost:3000/uploads/${formData.video_placeholder_img}`}
                  alt="Video thumbnail"
                  className="w-16 h-12 object-cover rounded border"
                />
                <p className="text-green-600 text-sm">✓ Thumbnail uploaded</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            Update Video
          </button>
        </div>
      </form>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
    </div>
  );
};

export default TestimonialVideoForm;