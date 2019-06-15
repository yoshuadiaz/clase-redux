export const actionTypes = {
  UPDATE_MESSAGE: 'MESSAGE | Update message'
}

export const updateMessage = (msg) => ({
  type: actionTypes.UPDATE_MESSAGE,
  payload: msg
})