import { getToken } from "utils/token";

const useAuth = () => {
  const user = getToken();

  if ( user ) {
    return true;
  } else {
    return false;
  }
};
  
export default useAuth;
	