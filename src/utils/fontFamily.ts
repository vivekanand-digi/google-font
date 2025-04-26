import { fontFamilies } from "../constants/fonts";

export const getFontFamily = (
  weight: 'italic' | 'bold',
) => {
  return fontFamilies.INTER[weight];
};
