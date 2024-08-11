import React, { useState, useEffect } from "react";
import CustomerList from "./components/Customer/customerList";
import CustomerDetails from "./components/Customer/customerDetails";
import "./App.css";
import axios from "axios";
interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  description: string;
}

const customers: Customer[] = [
  { id: 1, name: 'John Doe', title: 'CEO', address: '123 Main St', description: 'John has been the CEO of the company for over a decade and is known for his strategic vision.' },
  { id: 2, name: 'Jane Smith', title: 'CTO', address: '456 Elm St', description: 'Jane is the mastermind behind our tech innovations and has over 15 years of experience in software development.' },
  { id: 3, name: 'Michael Johnson', title: 'CFO', address: '789 Maple Ave', description: 'Michael manages the financial operations and has been instrumental in driving the company\'s growth.' },
  { id: 4, name: 'Emily Davis', title: 'COO', address: '101 Pine Rd', description: 'Emily ensures the daily operations run smoothly and effectively.' },
  { id: 5, name: 'David Wilson', title: 'CMO', address: '202 Oak St', description: 'David is responsible for our marketing strategies and brand management.' },
  { id: 6, name: 'Susan Brown', title: 'CHRO', address: '303 Cedar Ln', description: 'Susan manages the human resources department, ensuring a positive work environment.' },
  { id: 7, name: 'Robert Taylor', title: 'CIO', address: '404 Birch Blvd', description: 'Robert oversees the company\'s IT strategy and infrastructure.' },
  { id: 8, name: 'Linda Anderson', title: 'VP Sales', address: '505 Willow Dr', description: 'Linda leads the sales team and has a strong track record of closing deals.' },
  { id: 9, name: 'James Thomas', title: 'VP Product', address: '606 Spruce Cir', description: 'James drives product development and innovation.' },
  { id: 10, name: 'Patricia Martinez', title: 'VP Customer Success', address: '707 Redwood Way', description: 'Patricia ensures our customers are successful and satisfied with our services.' },
  { id: 11, name: 'Charles Lee', title: 'VP Engineering', address: '808 Aspen Ct', description: 'Charles leads our engineering team with a focus on quality and efficiency.' },
  { id: 12, name: 'Barbara Harris', title: 'VP Finance', address: '909 Cypress Ln', description: 'Barbara oversees the financial planning and analysis for the company.' }
];

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _limit: 9,
          _start: Math.floor(Math.random() * 200) 
        }
      });
      setPhotos(response.data.map((photo: any) => photo.url));
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    if (selectedCustomerId !== null) {
      fetchPhotos(); 
      const id = setInterval(fetchPhotos, 10000);
      setIntervalId(id);
    } else {
      setPhotos([]); 
    }
    return () => {
      if (intervalId) clearInterval(intervalId); 
    };
  }, [selectedCustomerId]);

  return (
    <div>
      <div className="header-div">
        <header className="app-heading">This here is a heading.</header>
      </div>
      <div className="app">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
        {selectedCustomer && (
          <CustomerDetails
            name={selectedCustomer.name}
            title={selectedCustomer.title}
            description={selectedCustomer.description}
            photos={photos} 
          />
        )}
      </div>
    </div>
  );
};


export default App;
