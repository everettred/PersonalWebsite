interface State {
  loading: boolean;
  error: string;
  userId: string;
  username: string;
  name: string;
}

const initialState: State = {
  loading: false,
  error: "",
  userId: "",
  username: "",
  name: "",
};

// const LOGOUT = "logout";
// const LOGIN = "login";
// const REGISTER = "register";
// const UPDATE_USER = "update_user";

// export function login(userObj) {
//   return {
//     type: LOGIN,
//     payload: axios.post("/api/auth/login", userObj),
//   };
// }

// export function register(newUserObj: UserObj) {
//   return {
//     type: REGISTER,
//     payload: axios.post("/api/auth/register", newUserObj),
//   };
// }

// export function logout() {
//   return {
//     type: LOGOUT,
//   };
// }

// export function updateUser(updatedUserObj: User) {
//   return {
//     type: UPDATE_USER,
//     payload: axios.put(`/api/users/${updatedUserObj._id}`, updatedUserObj),
//   };
// }

export default function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    // case LOGIN + "_FULFILLED":
    //   return {
    //     ...state,
    //     username: action.payload.data.username,
    //     userId: action.payload.data._id,
    //     loading: false,
    //   };

    // case LOGIN + "_PENDING":
    //   return { ...state, loading: true };

    // case LOGIN + "_REJECTED":
    //   return {
    //     ...state,
    //     loading: false,
    //   };

    // case REGISTER + "_PENDING":
    //   return { ...state, loading: true };

    // case REGISTER + "_FULFILLED":
    //   return {
    //     ...state,
    //     username: action.payload.data.username,
    //     userId: action.payload.data._id,
    //     loading: false,

    //   };

    // case REGISTER + "_REJECTED":
    //   return {
    //     ...state,
    //     loading: false,
    //     registerErrorMessage: "User already exists",
    //   };

    // case LOGOUT:
    //   return {
    //     ...state,
    //     username: "",
    //     userId: "",
    //   };
    // case UPDATE_USER + "_FULFILLED":
    //   return {
    //     ...state,
    //     username: action.payload.data.username,
    //     userId: action.payload.data._id,
    //     loading: false,
    //   };

    // case UPDATE_USER + "_PENDING":
    //   return { ...state, loading: true };

    // case UPDATE_USER + "_REJECTED":
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    default:
      return state;
  }
}
