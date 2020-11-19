const initialState = {
  username: "John",
  age: 25,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {};
    default:
      return state;
  }
};

export default users;
