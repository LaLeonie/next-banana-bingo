import { RootState, Plant } from "../types";
import { AnyAction } from "redux";

export const initialState = {
  totalScore: 0,
  today: {
    initialScore: 0,
    extraScore: 0,
    dailyPlants: [],
    day: "",
    victory: false,
  },
  thisWeek: {
    daysPlayed: [],
    weekScore: 0,
    weeklyPlants: {},
  },
};

export function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_INITIAL_SCORE:
      return {
        ...state,
        today: {
          ...state.today,
          initialScore: state.today.initialScore + action.payload,
        },
      };
    case ADD_EXTRA_SCORE:
      return {
        ...state,
        today: {
          ...state.today,
          extraScore: state.today.extraScore + action.payload,
        },
      };
    case SUBTRACT_EXTA_SCORE:
      return {
        ...state,
        today: {
          ...state.today,
          extraScore: state.today.extraScore - action.payload,
        },
      };
    case ADD_VICTORY:
      return {
        ...state,
        today: {
          ...state.today,
          victory: true,
        },
      };
    case ADD_SELECTED_PLANTS:
      return {
        ...state,
        today: {
          ...state.today,
          dailyPlants: [...state.today.dailyPlants, ...action.payload],
        },
      };

    case REMOVE_SELECTED_PLANT:
      return {
        ...state,
        today: {
          ...state.today,
          dailyPlants: state.today.dailyPlants.filter(
            (obj) => obj.fields.Name !== action.payload
          ),
        },
      };

    case RESET_USER_STORE:
      return initialState;
    default:
      return state;
  }
}

//selectors
export const getTotalScore = (state: RootState) => state.user.totalScore;
export const getToday = (state: RootState) => state.user.today;
export const getThisWeek = (state: RootState) => state.user.thisWeek;
export const getSelectedPlants = (state: RootState) =>
  state.user.today.dailyPlants;

//action types
const ADD_INITIAL_SCORE = "user/addInitialScore";
const ADD_EXTRA_SCORE = "user/addExtraScore";
const SUBTRACT_EXTA_SCORE = "user/subtractExtraScore";
const ADD_VICTORY = "user/addVictory";
const ADD_SELECTED_PLANTS = "user/plantSelected";
const REMOVE_SELECTED_PLANT = "user/plantRemoved";
const RESET_USER_STORE = "user/resetStore";

//action creators
export const addInitialScore = (score: number) => ({
  type: ADD_INITIAL_SCORE,
  payload: score,
});

export const addExtraScore = (score: number) => ({
  type: ADD_EXTRA_SCORE,
  payload: score,
});

export const subtractExtraScore = (score: number) => ({
  type: SUBTRACT_EXTA_SCORE,
  payload: score,
});

export const addVictory = () => ({
  type: ADD_VICTORY,
});

export const addSelectedPlants = (plants: Plant[]) => ({
  type: ADD_SELECTED_PLANTS,
  payload: plants,
});

export const removeSelectedPlant = (name: string) => ({
  type: REMOVE_SELECTED_PLANT,
  payload: name,
});

// export const resetUserStore = () => {
//   return (dispatch) => {
//     dispatch({ type: RESET_USER_STORE });
//   };
// };
