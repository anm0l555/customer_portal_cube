import React from 'react';

interface CustomerDetailsProps {
  name: string;
  title: string;
  description: string;
  photos: string[];
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ name, title, description, photos }) => {
  return (
    <div className="customer-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
