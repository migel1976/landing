export const theme = {
  //Пример использования внутри styled.*``:
  //font:        ${p => p.theme.typography.subtitleM};
  //color:       ${p => p.theme.color.warning};
  //padding-top: ${p => p.theme.spacing.x4};

  typography: {
    subtitleM: '500 16px/110% "Roboto", sans-serif',
    subtitleS: '500 14px/110% "Roboto", sans-serif',
    bodyL:     '400 18px/140% "Roboto", sans-serif',
    bodyM:     '400 16px/140% "Roboto", sans-serif',
    bodyS:     '400 14px/140% "Roboto", sans-serif',
    bodyXs:    '400 12px/140% "Roboto", sans-serif',
    bodyXxs:   '400 10px/140% "Roboto", sans-serif',
    caption:   '700 20px/100% "Roboto", sans-serif',
    buttonL:   '500 20px/100% "Roboto", sans-serif',
    buttonM:   '500 16px/100% "Roboto", sans-serif',
    buttonS:   '500 14px/100% "Roboto", sans-serif',
    menu:      '500 16px/100% "Roboto", sans-serif',
  },
  color: {
    primary90:   '#001D6C',
    primary60:   '#0F62FE',
    primary30:   '#A6C8FF',
    white:       '#ffffff',
    error:       '#DA1E28',
    warning:     '#F1C21B',
    success:     '#25A249',
    overlay:     'rgba(18, 22, 25, 0.75)',
    coolGray10:  '#F2F4F8',
    coolGray20:  '#DDE1E6',
    coolGray30:  '#C1C7CD',
    coolGray40:  '#A2A9B0',
    coolGray50:  '#878D96',
    coolGray60:  '#697077',
    coolGray70:  '#4D5358',
    coolGray80:  '#343A3F',
    coolGray90:  '#21272A',
    coolGray100: '#121619',
  },
  spacing: {
    x1: '8px',
    x2: '16px',
    x3: '24px',
    x4: '32px',
    x6: '48px',
    x8: '64px',
    x10: '80px',
    x12: '96px',
  },
  media: {
    phone: "(max-width:360px)",
    tablet: "(max-width:679px)",
    desktop: "(max-width: 1024px)",
    wide: "(max-width: 1440px)",
    }
}
