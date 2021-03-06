const GET_GREETING = 'GET_GREETING';

const getGreeting = (payload) => ({
  type: GET_GREETING,
  payload
});

const initialState = {
  message: ''
};

export const fetchGreetings = () => async (dispatch) => {
  const response = await fetch('/v1/message');
  const payload = await response.json();
  dispatch(getGreeting(payload.message));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
