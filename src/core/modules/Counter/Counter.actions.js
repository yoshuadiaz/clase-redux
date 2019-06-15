export const actionTypes = {
  PLUS_ONE: 'COUNTER/Plus One',
  REM_ONE: 'COUNTER/Rem One'
}

export const plusOne = () => ({
  type: actionTypes.PLUS_ONE
})

export const remOne = () => ({
  type: actionTypes.REM_ONE
})