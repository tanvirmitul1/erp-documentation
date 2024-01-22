// src/hooks/usePrivateRoute.js
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function usePrivateRoute(isUserLoggedIn) {
  const navigate = useNavigate();
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  const renderElement = (component) => {
    if (isUserLoggedIn) {
      setElement(component);
    }
  };

  return { element, renderElement };
}

export default usePrivateRoute;
