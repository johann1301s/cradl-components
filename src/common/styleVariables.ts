
export const fontWeights = {
  400: 400 as const,
  500: 500 as const,
  700: 700 as const
}  

export const breakpoints = {
  s: 0 as const,
  m: 760 as const,
  l: 1134 as const
}

export const lineHeights = {
  collapsedRatio: 1 as const,
  goldenRatio: 1.618 as const 
}

export const spacing = {
  s: {
    xxxs: 2 as const,
    xxs: 4 as const,
    xs: 8 as const,
    s: 16 as const,
    m: 24 as const,
    l: 32 as const,
    xl: 36 as const
  },
  m: {
    xxxs: 4 as const,
    xxs: 8 as const,
    xs: 12 as const,
    s: 18 as const,
    m: 32 as const,
    l: 36 as const,
    xl: 40 as const
  },
  l: {
    xxxs: 8 as const,
    xxs: 12 as const,
    xs: 16 as const,
    s: 24 as const,
    m: 36 as const,
    l: 40 as const,
    xl: 46 as const
  }
}

export const fontSizes = {
  s: {
    xxl: 32 as const,
    xl: 22 as const,
    l: 20 as const,
    m: 18 as const,
    s: 16 as const,
    xs: 15 as const,
    xxs: 12 as const
  },
  m: {
    xxl: 36 as const,
    xl: 24 as const,
    l: 22 as const,
    m: 20 as const,
    s: 18 as const,
    xs: 16 as const,
    xxs: 14 as const
  },
  l: {
    xxl: 44 as const,
    xl: 28 as const,
    l: 24 as const,
    m: 22 as const,
    s: 20 as const,
    xs: 18 as const,
    xxs: 16 as const
  }
}

export const breakpointsMedia = {
  s: `@media all and (min-width: ${breakpoints.s}px)` as const,
  m: `@media all and (min-width: ${breakpoints.m}px)` as const,
  l: `@media all and (min-width: ${breakpoints.l}px)` as const,
}
