import React from 'react'
import {useState ,useEffect} from "react"
import {toast} from "react-toastify"    
import { Link ,useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/Auth/authSlice";
import { useLoginMutation } from "C:/Users/MSI/OneDrive/Desktop/MERN App/frontend/src/redux/api/user.js";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Loader from '../../components/Loader';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[visability,setVisability] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  console.log(useLoginMutation())
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

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
  
    // Check if email and password are both filled
    if (!email || !password) {
      toast.error("Please fill in both email and password!");
      return; // Don't submit the form if any field is empty
    }
  
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  

  const handleCheck = () => {
    const now = visability;
    setVisability(!now);
  }

  return (
    <div>
      <section className="pl-[7rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

          <form onSubmit={submitHandler} className="container w-[30rem]">
            <div className="my-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-[2rem]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type={visability?"password":"text"}
                id="password"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button"onClick={handleCheck}>{visability?<FaEyeSlash />:<FaEye/>}</button>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
              onClick={submitHandler}
            >
              {isLoading ? "Signing In ..." : "Sign In"}
            </button>
            {isLoading && <Loader />}
          </form>

          <div className="mt-4">
            <p className="text-white">
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
                className="text-teal-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>

        <img
          src="https://www.travelrightsrilanka.com/wp-content/uploads/2021/06/3c98641519fd1a5c47231c53471aab19.png"
          alt=""
          className="h-[35rem] w-[55%] xl:block md:hidden sm:hidden rounded-lg"
        />
      </section>
    </div>
  );
}

export default Login