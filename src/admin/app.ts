const TrackItLogo = require('./extensions/trackit.png');

export const lightThemeColors = {
  colors: {
    alternative100: '#f6ecfc',
    alternative200: '#e0c1f4',
    alternative500: '#ac73e6',
    alternative600: '#9736e8',
    alternative700: '#8312d1',
    buttonNeutral0: '#ffffff',
    danger100: '#fcecea',
    danger200: '#f5c0b8',
    danger500: '#ee5e52',
    danger600: '#d02b20',
    danger700: '#b72b1a',
    neutral0: '#ffffff',
    neutral100: '#f6f6f9',
    neutral1000: '#181826',
    neutral150: '#eaeaef',
    neutral200: '#dcdce4',
    neutral300: '#c0c0cf',
    neutral400: '#a5a5ba',
    neutral500: '#8e8ea9',
    neutral600: '#666687',
    neutral700: '#4a4a6a',
    neutral800: '#32324d',
    neutral900: '#212134',
    primary100: '#  fcedee',
    primary200: '#FB7477',
    primary500: '#FA6163',
    primary600: '#F94044',
    primary700: '#F9393C',
    buttonPrimary500: '#FA6163',
    buttonPrimary600: '#F94044',
    secondary100: '#eaf5ff',
    secondary200: '#b8e1ff',
    secondary500: '#66b7f1',
    secondary600: '#0c75af',
    secondary700: '#006096',
    success100: '#eafbe7',
    success200: '#c6f0c2',
    success500: '#5cb176',
    success600: '#328048',
    success700: '#2f6846',
    warning100: '#fdf4dc',
    warning200: '#fae7b9',
    warning500: '#f29d41',
    warning600: '#d9822f',
    warning700: '#be5d01',
  },
};

export const darkThemeColors = {
  colors: {
    alternative100: '#181826',
    alternative200: '#4a4a6a',
    alternative500: '#ac73e6',
    alternative600: '#ac73e6',
    alternative700: '#e0c1f4',
    buttonNeutral0: '#ffffff',
    danger100: '#181826',
    danger200: '#4a4a6a',
    danger500: '#ee5e52',
    danger600: '#ee5e52',
    danger700: '#ee5e52',
    neutral0: '#212134',
    neutral100: '#181826',
    neutral1000: '#ffffff',
    neutral150: '#32324d',
    neutral200: '#4a4a6a',
    neutral300: '#666687',
    neutral400: '#a5a5ba',
    neutral500: '#c0c0cf',
    neutral600: '#a5a5ba',
    neutral700: '#eaeaef',
    neutral800: '#ffffff',
    neutral900: '#ffffff',
    primary100: '#181826',
    primary200: '#FB7477',
    primary500: '#FA6163',
    primary600: '#F94044',
    primary700: '#F9393C',
    buttonPrimary500: '#FA6163',
    buttonPrimary600: '#F94044',
    secondary100: '#181826',
    secondary200: '#4a4a6a',
    secondary500: '#66b7f1',
    secondary600: '#66b7f1',
    secondary700: '#b8e1ff',
    success100: '#181826',
    success200: '#4a4a6a',
    success500: '#5cb176',
    success600: '#5cb176',
    success700: '#c6f0c2',
    warning100: '#181826',
    warning200: '#4a4a6a',
    warning500: '#f29d41',
  },
};

export default {
  config: {
    auth: {
      logo: TrackItLogo,
    },
    menu: {
      logo: TrackItLogo,
    },
    head: {
      favicon: TrackItLogo,
    },
    theme: {
      light: lightThemeColors,
      dark: darkThemeColors,
    },
    notifications: { 
      releases: false 
    },
    locales: [],
  },
  bootstrap(app) {
  },
};