
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState(""); // Add role state

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5000",
        {},
        { withCredentials: true }
      );

      console.log(data);
      const { status, user, role } = data; 
      setUsername(user);
      setRole(role); 
      return status
        ? toast(`Hello ${user}`, {  
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h6>
          Welcome <span>{username}</span> to the Workflow Approval system
        </h6>
        {role === "Employee" ? (
          <Link to="/edashboard" className="mt-4 bg-blue-500 text-white p-2 rounded">
            Go to Employee Dashboard
          </Link>
        ) : (
          <Link to="/mdashboard" className="mt-4 bg-blue-500 text-white p-2 rounded">
            Go to Manager Dashboard
          </Link>
        )}
        
        
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;


