import { configureStore } from '@reduxjs/toolkit'
import historyReducer from '../hooks/useHistory'

export default configureStore({
  reducer: {
    history: historyReducer
  },
})