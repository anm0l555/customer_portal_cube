import React from 'react';

interface CustomerCardProps {
  name: string;
  description:string;
  onClick: () => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, description, onClick, isSelected }) => {
  return (
    <div onClick={onClick} className={`customer-card ${isSelected ? 'selected' : ''}`}>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CustomerCard;
