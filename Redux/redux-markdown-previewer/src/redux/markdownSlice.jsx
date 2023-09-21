import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

# Heading

Sub-heading
-----------

# Sub-heading

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;


export const markdownSlice = createSlice({
    name: "markdown",
    initialState: {
        help,
        text: "",
        showHelp: false,
    },
    reducers: {
        changeHelp: (state) => {
            state.showHelp = !state.showHelp;
        },
        changeText: (state, actions) => {
            state.text = actions.payload;
        },
    },
});


export const { changeHelp, changeText } = markdownSlice.actions
export default markdownSlice.reducer;