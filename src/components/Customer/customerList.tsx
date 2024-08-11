import React from "react";
import CustomerCard from "./customerCard";

interface Customer {
  id: number;
  name: string;
  title: string;
  description:string;
}

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          name={customer.name}
          description={customer.description}
          onClick={() => onSelectCustomer(customer.id)}
          isSelected={customer.id === selectedCustomerId}
        />
      ))}
    </div>
  );
};

export default CustomerList;
