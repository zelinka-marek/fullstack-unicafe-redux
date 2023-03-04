const INITIAL_STATE = {
  good: 0,
  ok: 0,
  bad: 0,
};

export function feedbackReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GOOD": {
      return state;
    }
    case "OK": {
      return state;
    }
    case "BAD": {
      return state;
    }
    case "ZERO": {
      return state;
    }
    default: {
      return state;
    }
  }
}
