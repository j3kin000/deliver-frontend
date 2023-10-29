import { useState, useEffect } from "react";
import { checkAuth } from "../../api/endpoint";

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const response = await checkAuth(); // Replace with your authentication check logic
        if (response.success) {
          setIsAuthenticated(true);
          return;
        }
        setIsAuthenticated(false);
      } catch (error) {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
        console.log("ERRORRRRR", isAuthenticated);
      }
    };

    fetchAuth();
  }, []); // Empty dependency array, so it runs once on component mount

  return isAuthenticated;
};

export default useAuthentication;
