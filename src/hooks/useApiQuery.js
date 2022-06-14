import { useEffect, useReducer } from "react";

const ACTIONS = {
  LOADING: "LOADING",
  FULLFILLED: "FULLFILLED",
  REJECTED: "REJECTED",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.LOADING: {
      const newState = structuredClone(state);
      newState.isLoading = true;
      newState.error = null;
      return newState;
    }
    case ACTIONS.FULLFILLED: {
      const newState = structuredClone(state);
      newState.isLoading = false;
      newState.error = null;
      newState.data = payload;
      return newState;
    }
    case ACTIONS.REJECTED: {
      const newState = structuredClone(state);
      newState.isLoading = false;
      newState.error = payload;
      return newState;
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

function useApiQuery({ queryFn, queryOnMount = false, onSuccess, onError }) {
  if (typeof queryFn !== "function") {
    throw new Error("queryFn는 함수이어야 합니다");
  }
  const [{ isLoading, error, data }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const queryWithStateControl = async () => {
    dispatch({ type: ACTIONS.LOADING });
    try {
      const response = await queryFn();
      const data = await response.json();
      dispatch({ type: ACTIONS.FULLFILLED, payload: data });
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess(data);
      }
    } catch (e) {
      dispatch({ type: ACTIONS.REJECTED, payload: e })
      if (onError && onError === "function") {
        onError(e);
      }
    }
  };

  useEffect(() => {
    queryOnMount && queryWithStateControl();
  }, []);

  return { isLoading, error, query: queryWithStateControl, data };
}

export default useApiQuery;
