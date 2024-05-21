import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  bg: 'var(--bg)',
  bgItem: 'var(--bgItem)',
  primaryText: 'var(--primaryText)',
  subtleText: 'var(--subtleText)',
});

export const fonts = stylex.defineVars({
  fontFamily: 'var(--fontFamily)',
  fontSizeXs: 'var(--fontSizeXs)',
  fontSizeSm: 'var(--fontSizeSm)',
  fontSizeMd: 'var(--fontSizeMd)',
  fontSizeLg: 'var(--fontSizeLg)',
  fontSizeXl: 'var(--fontSizeXl)',
  fontWeightLight: 'var(--fontWeightLight)',
  fontWeightRegular: 'var(--fontWeightRegular)',
  fontWeightMedium: 'var(--fontWeightMedium)',
  fontWeightBold: 'var(--fontWeightBold)',
});

export const radii = stylex.defineVars({
  borderRadiusMd: 'var(--borderRadiusMd)',
  borderRadiusLg: 'var(--borderRadiusLg)',
});
