import noPointsForByes from "../data/noPointsForByes"
import rawLadder from "../data/rawLadder"
import winPercentage from "../data/winPercentage"

const initialState = {
  rawLadder: rawLadder,
  percentageWins: winPercentage,
  noByePoints: noPointsForByes
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}