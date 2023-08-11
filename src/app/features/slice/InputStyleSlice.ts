import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  width: string;
  fontFamily: string;
  fontSize:string
  backgroundLinear: string;
  borderRadiusFrame: string;
  borderRadiusElements: string;
  background: string;
  colorGradient1: string;
  colorGradient2: string;
  colorButton: string;
  colorButtonGradient1: string;
  colorButtonGradient2: string;
  backgroundInput: string;
  colorFont: string;
}

const initialState: InputState = {
  width: '',
  fontFamily: '',
  fontSize:'',
  backgroundLinear: '',
  borderRadiusFrame: '',
  borderRadiusElements: '',
  background: '',
  colorGradient1: '',
  colorGradient2: '',
  colorButton: '',
  colorButtonGradient1: '',
  colorButtonGradient2: '',
  backgroundInput: '',
  colorFont: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setWidth(state, action: PayloadAction<string>) {
      state.width = action.payload;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    setFontSize(state, action: PayloadAction<string>) {
      state.fontSize = action.payload;
    },
    setBackgroundLinear(state, action: PayloadAction<string>) {
      state.backgroundLinear = action.payload;
    },
    setBorderRadiusFrame(state, action: PayloadAction<string>) {
      state.borderRadiusFrame = action.payload;
    },
    setBorderRadiusElements(state, action: PayloadAction<string>) {
      state.borderRadiusElements = action.payload;
    },
    setBackground(state, action: PayloadAction<string>) {
      state.background = action.payload;
    },
    setColorGradient1(state, action: PayloadAction<string>) {
      state.colorGradient1 = action.payload;
    },
    setColorGradient2(state, action: PayloadAction<string>) {
      state.colorGradient2 = action.payload;
    },
    setColorButton(state, action: PayloadAction<string>) {
      state.colorButton = action.payload;
    },
    setColorButtonGradient1(state, action: PayloadAction<string>) {
      state.colorButtonGradient1 = action.payload;
    },
    setColorButtonGradient2(state, action: PayloadAction<string>) {
      state.colorButtonGradient2 = action.payload;
    },
    setBackgroundInput(state, action: PayloadAction<string>) {
      state.backgroundInput = action.payload;
    },
    setColorFont(state, action: PayloadAction<string>) {
      state.colorFont = action.payload;
    },
  },
});

export const {
  setWidth,
  setFontFamily,
  setFontSize,
  setBackgroundLinear,
  setBorderRadiusFrame,
  setBorderRadiusElements,
  setBackground,
  setColorGradient1,
  setColorGradient2,
  setColorButton,
  setColorButtonGradient1,
  setColorButtonGradient2,
  setBackgroundInput,
  setColorFont,
} = inputSlice.actions;
export default inputSlice.reducer;
