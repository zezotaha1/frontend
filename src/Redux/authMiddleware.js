// authMiddleware.js

const authMiddleware = store => next => action => {
  const token = getCookie('Token'); // Function to get cookie value

  if (token) {
    action.headers = {
      ...action.headers,
      Authorization: `Bearer ${token}`
    };
  }

  return next(action);
};

const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default authMiddleware;
