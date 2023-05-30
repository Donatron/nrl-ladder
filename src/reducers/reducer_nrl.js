import noPointsForByes from "../data/noPointsForByes"
import rawLadder from "../data/rawLadder"

const initialState = {
  rawLadder: rawLadder,
  noPointsForByes: noPointsForByes,
  percentageWins: [],
  noByePoints: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}