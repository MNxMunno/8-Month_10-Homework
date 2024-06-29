import React, { useEffect } from "react";
import { useSignInMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slice/authSlice";

const Login = () => {
  const [signIn, { data, isLoading, isSuccess }] = useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      navigate("/admin");
    }
  });
  const handleLogin = () => {
    signIn({ UserName: "john32", password: "12345678" });

    navigate("/admin");
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login</h2>
        <h5>
          <button onClick={handleLogin} disabled={isLoading}>
            <h4>Login in</h4>
          </button>
        </h5>
      </div>
    </div>
  );
};

export default Login;
