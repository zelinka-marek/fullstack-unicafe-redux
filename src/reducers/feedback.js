const INITIAL_STATE = {
  good: 0,
  ok: 0,
  bad: 0,
};

export function feedbackReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GOOD": {
      return { ...state, good: state.good + 1 };
    }
    case "OK": {
      return { ...state, ok: state.ok + 1 };
    }
    case "BAD": {
      return { ...state, bad: state.bad + 1 };
    }
    case "ZERO": {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}
