import React from 'react';

const PgCard = ({ pg }) => { 
  
  return (
    <>
    <div className='d-flex justify-content-center aign-items-center'>

    
    <div className="container my-4 p-4 border rounded shadow-sm bg-light">
      <h2 className="mb-3 text-primary">PG Name: {pg.name}</h2>

      <div className="mb-2">
        <strong>Address:</strong> {pg.address} <br />
        <strong>Owner Contact:</strong> {pg.ownerNumber}
      </div>

      <div className="mb-3">
        <strong>Rating:</strong>
        <span className="text-warning ms-2">
          {'★'.repeat(Math.floor(pg.rating))} ({pg.rating}/5)
        </span>
      </div>

      <div className="mb-4">
        <h5 className="text-secondary">Amenities Provided</h5>
        <div className="row row-cols-2 row-cols-md-3 g-2">
          {pg.amenities.map((item, index) => (
            <div className="col" key={index}>
              <i className="bi bi-check-circle-fill text-success me-1"></i>{item}
            </div>
          ))}
        </div>  
      </div>
  
      <div className="mb-4">
        <h5 className="text-secondary">Room Availability & Pricing</h5>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between">
            Single Room
            <span className="badge bg-primary rounded-pill">₹{pg.price.single}/month</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            Double Room
            <span className="badge bg-success rounded-pill">₹{pg.price.double}/month</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            More Than Two
            <span className="badge bg-warning text-dark rounded-pill">₹{pg.price.moreThanTwo}/month</span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="text-secondary">Gender</h5>
        <span className="badge bg-info text-dark">{pg.gender}</span>
      </div>
    </div>

    </div>
    </>
  );
};

export default PgCard;
