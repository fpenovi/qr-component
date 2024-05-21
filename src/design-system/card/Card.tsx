import { ImgHTMLAttributes, PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors, fonts, radii } from '../tokens.stylex.ts';

const styles = stylex.create({
  card: {
    backgroundColor: colors.bgItem,
    borderRadius: radii.borderRadiusLg,
    fontSize: fonts.fontSizeMd,
    padding: '1em',
    paddingBottom: '2em',
    textAlign: 'center',
    width: '20em',
  },

  cardImage: {
    borderRadius: radii.borderRadiusMd,
    maxWidth: '288px',
    width: '100%',
  },

  cardTitle: {
    color: colors.primaryText,
    fontSize: fonts.fontSizeLg,
    fontWeight: fonts.fontWeightBold,
    margin: '1em 0 1em 0',
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

function CardImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} alt={props.alt} {...stylex.props(styles.cardImage)} />;
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
