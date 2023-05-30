import rawLadder from "../data/rawLadder"

const initialState = {
  rawLadder: rawLadder,
  percentageWins: [],
  noByePoints: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}