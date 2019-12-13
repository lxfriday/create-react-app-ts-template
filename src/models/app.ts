import { Model } from 'dva'
import { getList } from 'src/services/app'

const namespace = 'app'
const initialState = {
  list: [],
}
const model: Model = {
  namespace,
  subscriptions: {
    setup: function({ dispatch, history }) {
      let bool: boolean = false
      history.listen(function(location) {
        if (!bool) {
          dispatch({
            type: 'INIT',
            payload: {
              pathname: location.pathname,
            },
          })
          bool = true
        }
      })
    },
  },
  state: { ...initialState },
  reducers: {
    updateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    INIT: function*({ payload }, { select, call, put }) {
      // const list = yield call(getList, payload)
      const list = [{ name: 'lxfriday', age: 22 }]
      yield put({
        type: 'updateState',
        payload: {
          list,
        },
      })
    },
  },
}

export default model
