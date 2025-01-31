import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setCredentials} from "../../redux/features/Auth/authSlice.js"
import {useRegisterMutation} from "../../redux/api/user.js"
import { toast } from "react-toastify";
import Loader from "../../components/Loader.jsx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[visability,setVisability] = useState(true)
    const [selected, setSelected] = useState("");

    console.log(selected)

  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [register, { isLoading }] = useRegisterMutation();
  
    const { userInfo } = useSelector((state) => state.auth);  //const authSlice = createSlice({  name: "auth" -> Methanin tham gannee
  

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/";
  
    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, redirect, userInfo]);
  
    const submitHandler = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
        toast.error("Password do not match");
      } else {
        try {
          const res = await register({ username, email, password,selected }).unwrap();
          dispatch(setCredentials({ ...res }));
          navigate(redirect);
          toast.success("User successfully registered.");
        } catch (err) {
          console.log(err);
          toast.error(err.data.message);
        }
      }
    };

    const handleCheck = () => {
      const now = visability;
      setVisability(!now);
    }
    return (
        <div className="pl-[7rem] flex flex-wrap">
          <div className="mr-[7rem]">
            <h1 className="text-2xl font-semibold">Register</h1>
    
            <form onSubmit={submitHandler} className="container w-[35rem]">
              <div className="my-[1rem]">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-0.5 p-2 border rounded w-full"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="my-[1rem]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-0.5 p-2 border rounded w-full"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Select your country
                </label>
              <ReactFlagsSelect
                className="  border rounded w-full text-black bg-white flex flex-wrap mr-[7rem] "
                selected={selected}
                onSelect={(code) => setSelected(code)}
                searchable = {true}
              />  
              <div className="my-[1rem]">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type={visability?"password":"text"}
                  id="password"
                  className="mt-0.5 p-2 border rounded w-full"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button"onClick={handleCheck}>{visability?<FaEyeSlash />:<FaEye/>}</button>
              </div>
              <div className="my-[0.5rem]">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-white"
                >
                  Confirm Password
                </label>

                <input
                  type={visability?"password":"text"}
                  id="confirmPassword"
                  className="mt-0.5 p-2 border rounded w-full"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
    
              <button
                disabled={isLoading}
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
    
              {isLoading && <Loader />}
            </form>
    
            <div className="mt-3">
              <p className="text-white">
                Already have an account?{" "}
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  className="text-teal-500 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          <img
            src="https://www.travelvoice.lk/wp-content/uploads/2024/08/1588843579185.jpg"
            alt=""
            className="h-[35rem] w-[50%] xl:block md:hidden sm:hidden rounded-lg"
          />
        </div>
      );
} 

export default Register