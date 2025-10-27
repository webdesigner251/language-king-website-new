import { useState, useEffect } from 'react';
import Toast from './Toast';

const FreeEbookBanner = () => {
  const [formData, setFormData] = useState({
    banner_bg_image: '',
    new_tips_image: '',
    expert_text: '',
    expert_name: '',
    expert_title: '',
    expert_avatar: '',
    main_heading: '',
    main_description: '',
    learn_heading: '',
    learn_point_1: '',
    learn_point_2: '',
    learn_point_3: '',
    cta_button_text: '',
    save_text: '',
    other_books_heading: '',
    other_books_subheading: '',
    book_1_image: '',
    book_2_image: '',
    book_3_image: '',
    book_4_image: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/free-ebook/banner?t=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error('Failed to fetch banner data');
        setToast({ 
          show: true, 
          message: 'Failed to load banner data', 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Error fetching banner data:', error);
      setToast({ 
        show: true, 
        message: 'Error loading banner data', 
        type: 'error' 
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formDataUpload
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({
          ...prev,
          [fieldName]: data.filename
        }));
        setToast({ show: true, message: 'Image uploaded successfully!', type: 'success' });
      } else {
        const errorData = await response.json();
        setToast({ 
          show: true, 
          message: errorData.message || 'Error uploading image', 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setToast({ 
        show: true, 
        message: 'Network error while uploading image. Please try again.', 
        type: 'error' 
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/free-ebook/banner', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // const result = await response.json();
        // setToast({ 
        //   show: true, 
        //   message: 'Banner updated successfully! Changes will appear on the frontend shortly.', 
        //   type: 'success' 
        // });
        
        // Refresh the form data to show latest updates
        setTimeout(() => {
          fetchBannerData();
        }, 1000);
      } else {
        const errorData = await response.json();
        setToast({ 
          show: true, 
          message: errorData.message || 'Error updating banner', 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Error updating banner:', error);
      setToast({ 
        show: true, 
        message: 'Network error. Please check your connection and try again.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Free E-Book Banner Management</h2>
          <p className="text-gray-600 mt-2">Manage the banner section content for Free E-book page</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Background Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'banner_bg_image')}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {formData.banner_bg_image && (
                <img src={`http://localhost:3000/uploads/${formData.banner_bg_image}`} alt="Banner" className="mt-2 h-20 object-cover rounded" />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Tips Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'new_tips_image')}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {formData.new_tips_image && (
                <img src={`http://localhost:3000/uploads/${formData.new_tips_image}`} alt="Tips" className="mt-2 h-20 object-cover rounded" />
              )}
            </div>
          </div>

          {/* Expert Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Expert Section</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expert Text</label>
                <input
                  type="text"
                  name="expert_text"
                  value={formData.expert_text}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="LEARN FROM THE EXPERT + MORE:"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expert Avatar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'expert_avatar')}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {formData.expert_avatar && (
                  <img src={`http://localhost:3000/uploads/${formData.expert_avatar}`} alt="Avatar" className="mt-2 h-16 w-16 object-cover rounded-full" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expert Name</label>
                <input
                  type="text"
                  name="expert_name"
                  value={formData.expert_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Abhishek"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expert Title</label>
                <input
                  type="text"
                  name="expert_title"
                  value={formData.expert_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="PTE Master Trainer"
                />
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Main Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Heading</label>
                <input
                  type="text"
                  name="main_heading"
                  value={formData.main_heading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="PTE Reading Blanks Free E-book"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Description</label>
                <textarea
                  name="main_description"
                  value={formData.main_description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Learn how to solve PTE Reading Blanks..."
                />
              </div>
            </div>
          </div>

          {/* Learning Points Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Learning Points</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Learn Heading</label>
                <input
                  type="text"
                  name="learn_heading"
                  value={formData.learn_heading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="YOU'LL LEARN HOW TO:"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Learning Point 1</label>
                  <input
                    type="text"
                    name="learn_point_1"
                    value={formData.learn_point_1}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Attempt R&W blanks"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Learning Point 2</label>
                  <input
                    type="text"
                    name="learn_point_2"
                    value={formData.learn_point_2}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Difference b/w linkers, starters and connectors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Learning Point 3</label>
                  <input
                    type="text"
                    name="learn_point_3"
                    value={formData.learn_point_3}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Quiz to test your learning"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Call to Action</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
                <input
                  type="text"
                  name="cta_button_text"
                  value={formData.cta_button_text}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Start 7-Day Free Trial"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Save Text</label>
                <input
                  type="text"
                  name="save_text"
                  value={formData.save_text}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Save $33 by using AI Portal + Prediction File + 6 Books"
                />
              </div>
            </div>
          </div>

          {/* Books Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Books Section</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Books Heading</label>
                <input
                  type="text"
                  name="other_books_heading"
                  value={formData.other_books_heading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Other Books"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Books Subheading</label>
                <input
                  type="text"
                  name="other_books_subheading"
                  value={formData.other_books_subheading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="PTE Study Material"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Book {num}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, `book_${num}_image`)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {formData[`book_${num}_image`] && (
                    <img src={`http://localhost:3000/uploads/${formData[`book_${num}_image`]}`} alt={`Book ${num}`} className="mt-2 h-20 object-cover rounded" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="border-t pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Banner'}
            </button>
          </div>
        </form>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )}
    </div>
  );
};

export default FreeEbookBanner;