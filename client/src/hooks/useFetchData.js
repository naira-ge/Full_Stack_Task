import { useState,useCallback, useEffect } from 'react';

import { getToken } from 'utils/token';

import {GET} from 'config/constants/methods';

const useFetchData = (
  initialData = {},
) => {
  const token = getToken();

  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = useCallback(async (url, method = GET, body) => {
    if (!url) return;
    setIsLoading(true);
    hasError && setHasError( null );
    
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify(body),
      });

      const responseData = await response.json();
      
      if( response.ok ) {
        setData( responseData );
        return responseData;
      } else {
        responseData?.error && setHasError(responseData.error)
      }
    } catch( error ) {
      setData(initialData);
      setHasError("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  },[hasError, initialData, token] );
  
  useEffect( () => {
    let isMounted = true;

    return () => {
      isMounted = false;
    }
  },[fetchData]);
  
  return { data, fetchData, isLoading, setData, hasError };
};

export default useFetchData;
