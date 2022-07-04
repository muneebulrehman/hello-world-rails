import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingReducer';
const Greeting = () => {
  const msg = useSelector(({ reducer }) => reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  return (
    <React.Fragment>
      <h3>{msg}</h3>
    </React.Fragment>
  );
};

export default Greeting;
