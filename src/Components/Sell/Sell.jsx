import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faArrowLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import './Sell.css';
import { useForm } from 'react-hook-form';

const Sell = () => {
    // const submit = () => {
    //     alert("Form submitted");
    // }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Add your form submission logic here
  };

  return (
    <div className='sell'>
      <div className="sell-nav">
        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow"/>
        <h2>Post Your Ad</h2>
      </div>
      
      <form className="sell-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="image-upload-section">
          <input 
            type="file" 
            id="image-upload" 
            accept="image/*"
            {...register('image', { required: 'Please upload an image' })}
            onChange={handleImageChange}
            hidden
          />
          <label htmlFor="image-upload" className="upload-area">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="preview-image"/>
            ) : (
              <>
                <FontAwesomeIcon icon={faUpload} className="upload-icon"/>
                <span>Click to upload image</span>
              </>
            )}
          </label>
          {errors.image && <p className="error-message">{errors.image.message}</p>}
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Product Name</label>
            <input 
              type="text"
              {...register('productName', { 
                required: 'Product name is required',
                minLength: { value: 3, message: 'Minimum 3 characters' }
              })}
              placeholder="What are you selling?"
            />
            {errors.productName && <p className="error-message">{errors.productName.message}</p>}
          </div>

          <div className="input-group">
            <label>Price</label>
            <div className="price-input">
              <span>₹</span>
              <input 
                type="number"
                {...register('price', { 
                  required: 'Price is required',
                  min: { value: 1, message: 'Price must be greater than 0' }
                })}
                placeholder="Enter price"
              />
            </div>
            {errors.price && <p className="error-message">{errors.price.message}</p>}
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input 
              type="tel"
              {...register('phoneNumber', { 
                required: 'Phone number is required',
                pattern: { 
                  value: /^[0-9]{10}$/,
                  message: 'Enter valid 10-digit number'
                }
              })}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
          </div>

          <div className="input-group">
            <label>Location</label>
            <input 
              type="text"
              {...register('location', { required: 'Location is required' })}
              placeholder="Enter your location"
            />
            {errors.location && <p className="error-message">{errors.location.message}</p>}
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea 
              {...register('description', { 
                required: 'Description is required',
                minLength: { value: 20, message: 'Minimum 20 characters' }
              })}
              placeholder="Describe what you're selling"
              rows="4"
            />
            {errors.description && <p className="error-message">{errors.description.message}</p>}
          </div>

          <button type="submit" className="post-button">
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;
