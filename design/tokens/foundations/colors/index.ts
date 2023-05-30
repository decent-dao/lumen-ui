import { parsedColorsV1 } from "../../../helpers";


const { primary, secondary, neutral, utility, ui, gradients } = parsedColorsV1()

const colors = {
    ...primary,
    ...secondary,
    ...neutral,
    ...utility,
    ...ui,
    ...gradients
}

export type Colors = typeof colors;
export default colors;
