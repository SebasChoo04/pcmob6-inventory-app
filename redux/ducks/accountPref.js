const DARK = "dark_mode";
const LIGHT = "light_mode";

export function lightModeAction(){
  return { type: LIGHT }
};

export function darkModeAction(){
  return { type: DARK }
};

const initialState = {
  isDark: false
};

export default function accountPrefReducer(state = initialState, action) {
  switch (action.type) {
    case "dark_mode":
      return { ...state, isDark: true };
    case "light_mode":
      return { ...state, isDark: false };
    default:
      return state;
  }
}