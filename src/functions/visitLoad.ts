import {useEffect} from "react";
import {useLocation} from "react-router";
import {useNavigate} from "react-router";
import {useLocalStorage} from "usehooks-ts";

const VisitLoad = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [agree] = useLocalStorage("agree", "");

  useEffect(() => {
    if (agree === "" && location.pathname !== "/confirm") {
      navigate("/confirm");
    }
  }, [location.pathname, navigate, agree]);

  return null;
};

export default VisitLoad;
