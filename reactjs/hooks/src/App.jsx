import { useState } from "react";
import UseStateExample from "./use-state/UseStateExample";
import UseEffectExample from "./use-effect/UseEffectExample";
import UseRefExample from "./use-ref/UseRefExample";
import UseMemoExample from "./use-memo/UseMemoExample";
import UseCallbackExample from "./use-callback/UseCallbackExample";
import MemoExample from "./memo/MemoExample";
import UseLayoutEffectExample from "./use-layout-effect/UseLayoutEffectExample";
import UseReducerExample from "./use-reducer/UseReducerExample";

function App() {
  const [activeHook, setActiveHook] = useState("");

  const renderActiveHook = () => {
    switch (activeHook) {
      case "useState":
        return <UseStateExample />;
      case "useEffect":
        return <UseEffectExample />;
      case "useRef":
        return <UseRefExample />;
      case "useMemo":
        return <UseMemoExample />;
      case "useCallback":
        return <UseCallbackExample />;
      case "memo":
        return <MemoExample />;
      case "useLayoutEffect":
        return <UseLayoutEffectExample />;
      case "useReducer":
        return <UseReducerExample />;
      default:
        return <p>Select a hook above to see the example.</p>;
    }
  };

  return (
    <div>
      <h1>React Hooks Learning</h1>
      <p>Select a hook example to learn more.</p>

      <div className="card">
        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => setActiveHook("useState")}>useState</button>
          <button
            onClick={() => setActiveHook("useEffect")}
            style={{ marginLeft: "10px" }}
          >
            useEffect
          </button>
          <button
            onClick={() => setActiveHook("useRef")}
            style={{ marginLeft: "10px" }}
          >
            useRef
          </button>
          <button
            onClick={() => setActiveHook("useMemo")}
            style={{ marginLeft: "10px" }}
          >
            useMemo
          </button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => setActiveHook("useCallback")}>
            useCallback
          </button>
          <button
            onClick={() => setActiveHook("memo")}
            style={{ marginLeft: "10px" }}
          >
            React.memo
          </button>
          <button
            onClick={() => setActiveHook("useLayoutEffect")}
            style={{ marginLeft: "10px" }}
          >
            useLayoutEffect
          </button>
        </div>
        <div>
          <button onClick={() => setActiveHook("useReducer")}>
            useReducer
          </button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>{renderActiveHook()}</div>
    </div>
  );
}

export default App;
