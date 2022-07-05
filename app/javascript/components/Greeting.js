import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingReducer';
const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  return (
    <React.Fragment>
      <h3>Secret Message: {message} </h3>
    </React.Fragment>
  );
};

export default Greeting;
