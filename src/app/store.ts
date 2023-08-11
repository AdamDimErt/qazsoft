import { configureStore} from '@reduxjs/toolkit';
import InputStyleSlice from './features/slice/InputStyleSlice';



export const store = configureStore({
  reducer: {
    inputSlice:InputStyleSlice
  },
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

