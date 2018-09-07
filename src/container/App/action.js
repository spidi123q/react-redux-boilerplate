export const simpleAction = () => ({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
})

export const addNotebook = () => ({
    type: 'ADD_NOTEBOOK',
    payload: 'result_of_simple_action'
})

export const testApi = () => ({
    type: 'LOAD',
    payload: {
      request:{
        url:'/todos/1'
      }
    }
  })