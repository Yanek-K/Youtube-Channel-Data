import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/authAction";
import "./LoginScreen.css";

function LoginScreen() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg"
          alt=""
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This Is A Real Youtube Clone.</p>
      </div>
    </div>
  );
}

export default LoginScreen;
