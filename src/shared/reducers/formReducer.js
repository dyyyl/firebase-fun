const formReducer = (state, { field, value }) => ({
  ...state,
  [field]: value,
});

export default formReducer;
