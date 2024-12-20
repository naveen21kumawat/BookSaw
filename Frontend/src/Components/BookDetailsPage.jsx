// import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetailsPage = () => {
  const location = useLocation();

  // Parse query parameters
  const params = new URLSearchParams(location.search);
  const title = params.get('title');
  const description = params.get('description');

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BookDetailsPage;