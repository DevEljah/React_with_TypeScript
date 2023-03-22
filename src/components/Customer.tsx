import { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "Dev",
    address: {
      ctiy: "Berlin",
      zipCode: 13127,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 11111 },
    });
  };
  return (
    <div>
      <h4> {customer.address.zipCode} </h4>
      <button onClick={handleClick} className="btn btn-primary">
        zipCode btn
      </button>
    </div>
  );
};

export default Customer;
