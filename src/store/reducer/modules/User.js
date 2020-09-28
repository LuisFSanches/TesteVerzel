let users = [];
const User = (state = users, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "LOGGED_USER":
      return [...state, action.user_id];
    default:
      return state;
  }
};
export default User;
