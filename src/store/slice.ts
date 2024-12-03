import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  candidateCount: number;
}

const initialState: CounterState = {
  candidateCount: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCandidateCount: (state, action: PayloadAction<number>) => {
      state.candidateCount = action.payload;
    },
  },
});

export const { setCandidateCount } = counterSlice.actions;
export default counterSlice.reducer;
