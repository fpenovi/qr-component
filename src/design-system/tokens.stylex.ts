import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  bg: '#D5E1EF',
  bgItem: '#fefffe',
  primaryText: '#1F314F',
  subtleText: '#7D889E',
});

export const fonts = stylex.defineVars({
  fontFamily: `'Poppins', sans-serif`,
  fontSizeXs: '12px',
  fontSizeSm: '14px',
  fontSizeMd: '16px',
  fontSizeLg: '18px',
  fontSizeXl: '20px',
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightBold: '700',
});

export const radii = stylex.defineVars({
  borderRadiusMd: '10px',
  borderRadiusLg: '20px',
});
