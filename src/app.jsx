import { decimalFormatter, percentageFormatter } from "./utils/format";

export function App(props) {
  const { store } = props;

  const feedback = store.getState();
  const allFeedback = feedback.good + feedback.ok + feedback.bad;
  const average = (feedback.good - feedback.bad) / allFeedback;
  const positive = feedback.good / allFeedback;

  return (
    <div>
      <h1>Give feedback</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => store.dispatch({ type: "GOOD" })}>
          good
        </button>
        <button type="button" onClick={() => store.dispatch({ type: "OK" })}>
          ok
        </button>
        <button type="button" onClick={() => store.dispatch({ type: "BAD" })}>
          bad
        </button>
        <button type="button" onClick={() => store.dispatch({ type: "ZERO" })}>
          reset stats
        </button>
      </div>
      <h2>Statistics</h2>
      {allFeedback === 0 ? (
        <p>
          <i>No feedback given yet.</i>
        </p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td style={{ textAlign: "left", paddingRight: 16 }}>good</td>
              <td>{decimalFormatter.format(feedback.good)}</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: 16 }}>ok</td>
              <td>{decimalFormatter.format(feedback.ok)}</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: 16 }}>bad</td>
              <td>{decimalFormatter.format(feedback.bad)}</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: 16 }}>all</td>
              <td>{decimalFormatter.format(allFeedback)}</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: 16 }}>average</td>
              <td>{decimalFormatter.format(average)}</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: 16 }}>positive</td>
              <td>{percentageFormatter.format(positive)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
