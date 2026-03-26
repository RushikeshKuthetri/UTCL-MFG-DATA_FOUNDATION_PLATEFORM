import axios from 'axios';
import { BASE_URL } from '../../../base';
import { emailValidation } from '../../../utils/emailValiation';
import { passwordValidation } from '../../../utils/passwordValidation';
import { FormInput } from '../../../components/Login/FormInput/FormInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';

export const LoginForm = () => {
  useEffect(() => {
    deleteAllCookies();
    document.cookie =
      'my_cookie=; path=/; domain=login.microsoftonline.com; expires=' +
      new Date(0).toUTCString();
    localStorage.clear();
    Object.keys(sessionStorage).forEach(function (k) {
      sessionStorage.removeItem(k);
    });
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'ERROR_FALSE' });
  }, []);

  const deleteAllCookies = () => {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie =
        name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  };

  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrorMsg, setValidartionErrorMsg] = useState({
    userId: '',
    password: '',
  });
  const { userStatus } = useSelector((state) => state);
  console.debug(userStatus);
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const emailErrormsg = emailValidation(userId);
      const passwordErrormsg = passwordValidation(password);
      setValidartionErrorMsg({
        password: passwordErrormsg,
        userId: emailErrormsg,
      });
      if (!emailErrormsg && !passwordErrormsg) {
        dispatch({ type: 'LOADING_TRUE' });
        const response = await axios.post(BASE_URL + 'users/login', {
          userid: userId,
          password,
        });
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            token: response.data.data.token,
            userId: response.data.data.UserID,
            username: response.data.data.UserName,
            plants: response.data.data.plants,
          },
        });
        dispatch({ type: 'LOADING_FALSE' });
        navigate(state?.from ? state.from : '/rawmill');
      }
    } catch (error) {
      return dispatch({
        type: 'ERROR',
        payload: error.response.data.error,
      });
    }
  };
  return (
    <form
      className="text-start w-100"
      onSubmit={(e) => submitHandler(e)}
    >
      <FormInput
        validationErrorMsg={validationErrorMsg.userId}
        value={userId}
        setValue={setUserId}
        placeholder={'User Email'}
        type="text"
      />
      <FormInput
        validationErrorMsg={validationErrorMsg.password}
        value={password}
        setValue={setPassword}
        placeholder={'Password'}
        type="password"
      />
      <div className="text-center">
        <button
          className="btn btn-1 w-100 my-4 mb-2"
          disabled={userStatus.loading}
        >
          {!userStatus.loading ? (
            'Sign in'
          ) : (
            <p className="d-flex align-items-center justify-content-center">
              <span className="mr-2">Please wait</span>
              <ClipLoader />
            </p>
          )}
        </button>
      </div>
    </form>
  );
};
