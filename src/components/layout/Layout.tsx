import { PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../design-system/tokens.stylex.ts';

const styles = stylex.create({
  main: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    display: 'flex',
    height: '100svh',
    justifyContent: 'center',
  },
});

export function Layout({ children }: PropsWithChildren) {
  return <main {...stylex.props(styles.main)}>{children}</main>;
}
