import { useState, useCallback } from 'react';

import {GET} from 'config/constants/methods';

const useFetchData = (
  initialData = {},
) => {
  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [ isLoading,setIsLoading ] = useState( false );
  
  const fetchData = useCallback(async (url, method = GET, data) => {
    if (!url) return;
    setIsLoading(true);
    hasError && setHasError(false);

    const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    } );
    
    const responseData = await response.json();
    
    if (response.ok) {
      setData(responseData.data);
    } else {
      setData(initialData);
      !hasError && setHasError(true);
    }
    setIsLoading(false);
    return responseData;
  },[hasError, initialData] );

  return { data, fetchData, isLoading, setData, hasError };
};

export default useFetchData;
