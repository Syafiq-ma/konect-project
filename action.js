export const setDateTime = (date, time) => (dispatch) => {
    dispatch({
        type: 'SETDATETIME',
        date: date,
        time: time
    })
}