const initialState = [
  {
    id: 0,
    name: 'Nikhil Mehra',
    number: '987654321',
    email: 'nm@g.com',
  },
  {
    id: 1,
    name: 'Test Number',
    number: '88368229',
    email: 'test@test.com',
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      state = [...state, action.payload];
      return state;

    case 'UPDATE_USER':
      const updateState = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updateState;
      return state;

    case 'DELETE_USER':
      const filterUser = state.filter((user) =>
        user.id !== action.payload ? user : null
      );
      state = filterUser;
      return state;
    default:
      return state;
  }
};

export default userReducer;
