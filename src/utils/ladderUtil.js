const tableHeaders = [
  { label: 'Position', excludedLadders: [] },
  { label: 'Actual Position', excludedLadders: ['standard'] },
  { label: 'Team', excludedLadders: [] },
  { label: 'Played', excludedLadders: [] },
  { label: 'Points', excludedLadders: [] },
  { label: 'Wins', excludedLadders: [] },
  { label: 'Drawn', excludedLadders: [] },
  { label: 'Lost', excludedLadders: [] },
  { label: 'Byes', excludedLadders: [] },
  { label: 'For', excludedLadders: [] },
  { label: 'Against', excludedLadders: [] },
  { label: 'Diff.', excludedLadders: [] },
  { label: 'Win %age', excludedLadders: ['standard', 'no-byes'] },
]

const getTableHeaders = (ladderType) => {
  const headers = tableHeaders.filter((header) => !header.excludedLadders.includes(ladderType))
  return headers.map((header) => header.label)
}

module.exports = { getTableHeaders }