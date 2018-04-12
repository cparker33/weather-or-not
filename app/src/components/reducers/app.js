const init_state = {
  weather_data: {
    city: null,
    today_items: null,
    week_items: null,
    has_data: false
  }
}

// DEV
const log = console.log // eslint-disable-line no-unused-vars


export function app_reducer(state = init_state, action) {
  switch (action.type) {
/*********************************
  HANDLE WEATHER DATA
*********************************/
    case 'SET_WTHR_DATA':
      return {
        ...state,
        weather_data: action.weather_data
      }

    default:
      return state
  }
}
