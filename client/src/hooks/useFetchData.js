import { useState,useCallback } from 'react';

import { getToken } from 'utils/token';

import {GET} from 'config/constants/methods';

const useFetchData = (
  initialData = {},
) => {
  const token = getToken();

  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [ isLoading,setIsLoading ] = useState( false );
  
  const fetchData = useCallback(async (url, method = GET, data) => {
    if (!url) return;
    setIsLoading(true);
    hasError && setHasError( false );
    
    try {
      const response = await fetch( url,{
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify( data ),
      } );

      const responseData = await response.json();
    
      if( response.ok ) {
        setData( responseData );
      }
      
    } catch( error ) {
      setData( initialData );
      setHasError( true );

    } finally {
      setIsLoading( false );
    }
    
  },[hasError, initialData] );

  return { data, fetchData, isLoading, setData, hasError };
};

export default useFetchData;
