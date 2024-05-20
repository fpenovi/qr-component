import { PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors, fonts, radii } from '../../design-system/tokens.stylex.ts';

const styles = stylex.create({
  card: {
    backgroundColor: colors.bgItem,
    borderRadius: radii.borderRadiusLg,
    height: '497px',
    padding: '16px',
    paddingBottom: '32px',
    textAlign: 'center',
    width: '320px',
  },

  cardImage: {
    borderRadius: radii.borderRadiusMd,
    marginBottom: '12px',
    objectFit: 'contain',
    width: '100%',
  },

  cardTitle: {
    color: colors.primaryText,
    fontSize: fonts.fontSizeLg,
    fontWeight: fonts.fontWeightBold,
    marginBottom: '14px',
  },
  cardDescription: {
    color: colors.subtleText,
    fontSize: fonts.fontSizeSm,
    fontWeight: fonts.fontWeightLight,
  },
});

export function Card(props: PropsWithChildren) {
  return <div {...stylex.props(styles.card)}>{props.children}</div>;
}

function CardImage(props: { src: string; alt: string }) {
  return <img src={props.src} alt={props.alt} {...stylex.props(styles.cardImage)} />;
}

function CardTitle(props: PropsWithChildren) {
  return <h1 {...stylex.props(styles.cardTitle)}>{props.children}</h1>;
}

function CardDescription(props: PropsWithChildren) {
  return <p {...stylex.props(styles.cardDescription)}>{props.children}</p>;
}

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Description = CardDescription;
