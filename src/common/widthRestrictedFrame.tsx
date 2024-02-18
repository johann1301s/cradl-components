import styled from 'styled-components'
import {breakpointsMedia, spacing} from './styleVariables'

export type TWidthRestrictedFrameProps = {
  maxWidth?: number
}

export const WidthRestrictedFrame = styled.div<TWidthRestrictedFrameProps>`
  position: relative;
  max-width: ${({maxWidth}) => maxWidth || 780}px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 ${spacing.s.s}px;
  width: 100%;
  ${breakpointsMedia.m} {
    padding: 0 ${spacing.m.s}px;
  }
  ${breakpointsMedia.l} {
    padding: 0 ${spacing.l.s}px;
  }
`
