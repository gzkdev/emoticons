import { useReducer } from "react"

const SET_QUERY = "set-query"
const RESET_QUERY = "reset-query"
const SET_LAYOUT = "set-layout"
const SET_COPIED_ID = "set-copied-id"
const RESET_COPIED_ID = "reset-copied-id"

type ExplorerReducerState = {
  query: string
  layout: "list" | "grid"
  copiedId: string | null
}

const initialState: ExplorerReducerState = {
  copiedId: null,
  query: "",
  layout: "list",
}

type ResetCopiedId = { type: typeof RESET_COPIED_ID }
type ResetQuery = { type: typeof RESET_QUERY }
type SetCopiedId = { type: typeof SET_COPIED_ID; payload: string }
type SetLayout = {
  type: typeof SET_LAYOUT
  payload: ExplorerReducerState["layout"]
}
type SetQuery = { type: typeof SET_QUERY; payload: string }

type ReducerAction =
  | ResetCopiedId
  | ResetQuery
  | SetCopiedId
  | SetLayout
  | SetQuery

function reducer(
  state: ExplorerReducerState,
  action: ReducerAction
): ExplorerReducerState {
  switch (action.type) {
    case RESET_COPIED_ID: {
      return { ...state, copiedId: null }
    }
    case RESET_QUERY: {
      return { ...state, query: "" }
    }
    case SET_COPIED_ID: {
      return { ...state, copiedId: action.payload }
    }
    case SET_LAYOUT: {
      return { ...state, layout: action.payload }
    }
    case SET_QUERY: {
      return { ...state, query: action.payload }
    }
    default: {
      throw new Error("Action type not supported")
    }
  }
}

function useExplorerReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function resetQuery() {
    dispatch({ type: RESET_QUERY })
  }

  function resetCopiedId() {
    dispatch({ type: RESET_COPIED_ID })
  }

  function setQuery(value: string) {
    dispatch({ type: SET_QUERY, payload: value })
  }

  function setLayout(value: ExplorerReducerState["layout"]) {
    dispatch({ type: SET_LAYOUT, payload: value })
  }

  function setCopiedId(value: string) {
    dispatch({ type: SET_COPIED_ID, payload: value })
  }

  return {
    state,
    resetCopiedId,
    resetQuery,
    setCopiedId,
    setLayout,
    setQuery,
  }
}

export { useExplorerReducer }
