import deepFreeze from "deep-freeze";
import { describe, expect, it } from "vitest";
import { feedbackReducer } from "./feedback";

describe("feedbackReducer", () => {
  const INITIAL_STATE = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  it("should return initial state when called with undefined state", () => {
    const state = {};
    deepFreeze(state);

    const action = { type: "DO_NOTHING" };

    const newState = feedbackReducer(undefined, action);
    expect(newState).toEqual(INITIAL_STATE);
  });

  it("should increment good by one when action is GOOD", () => {
    const state = INITIAL_STATE;
    deepFreeze(state);

    const action = { type: "GOOD" };

    const newState = feedbackReducer(state, action);
    expect(newState).toEqual({ good: 1, ok: 0, bad: 0 });
  });
});
