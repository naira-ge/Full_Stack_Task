import { useState, useEffect, useCallback } from 'react';

import { POST, GET, DELETE } from 'config/constants/methods';

const useFetchData = (
  initialData = {},
  method = GET,
) => {
  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (url, data) => {
    if (!url) return;
    setIsLoading(true);
    hasError && setHasError(false);

    const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    } );
    
    if (response.ok) {
      setData(response.data);
    } else {
      setData(initialData);
      !hasError && setHasError(true);
    }

    setIsLoading(false);
    return response;
  },[ hasError,initialData,method ] );

  return { data, fetchData, isLoading, setData, hasError };
};

export default useFetchData;
