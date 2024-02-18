import React, {CSSProperties, ReactNode} from 'react'
import styled from 'styled-components'
import {WrapperProvider} from '../../common/wrapperProvider'
import {breakpointsMedia, fontSizes, fontWeights, spacing} from '../../common/styleVariables'
import {colors} from '../../common/colors'

export type TPrimaryTriggerProps = {
  wrapper?(children: ReactNode): ReactNode
  label?: string
  style?: CSSProperties
  className?: string
}

export const PrimaryTrigger = (props: TPrimaryTriggerProps) => {

  return (
    <Frame
      style={props.style}
      className={props.className}>
      <WrapperProvider wrapper={props.wrapper}>
        <Trigger>
          {props.label && <span>{props.label}</span>}
        </Trigger>
      </WrapperProvider>
    </Frame>
  )
}

const Frame = styled.div`
  > a {
    text-decoration: none;
  }
  > a, button {
    outline: none;
    width: 100%;
    border: none;
    padding: 0;
    margin: 0;
    &:focus-visible {
      & > div {
        outline: 4px solid ${colors.blue[100]};
      }
    }
    &:enabled:active {
      & > div {
        background: ${colors.blue[100]};
        border-color: ${colors.blue[100]};
      }
    }
  }
  > button:disabled {
    & > div {
      cursor: auto;
      background: ${colors.blue[100]};
      border-color: ${colors.blue[100]};
      color: ${colors.blue[100]};
      .icon {
        i {
          background: ${colors.blue[100]} !important;
        }
      }
    }
  }
`

const borderWidth = 2

const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0;
  background: ${colors.blue[100]};
  span {
    color: ${colors.blue[100]};
  }
  line-height: 1;
  white-space: pre;
  cursor: pointer;
  font-weight: ${fontWeights[500]};
  border: ${borderWidth}px solid ${colors.blue[100]};
  color: ${colors.blue[100]}; // safari bug
  .icon {
    i {
      background: ${colors.blue[100]} !important;
    }
  }
  @media (hover: hover) {
    &:hover {
      background: ${colors.blue[100]};
      border-color: ${colors.blue[100]};
      color: ${colors.blue[100]}; // safari bug
    }
  }
  .icon {
    width: 24px;
    height: 24px;
  }
  padding: ${spacing.s.s - borderWidth}px;
  font-size: ${fontSizes.s.xs}px;
  ${breakpointsMedia.m} {
    padding: ${spacing.m.s - borderWidth}px;
    font-size: ${fontSizes.m.xs}px;
  }
  ${breakpointsMedia.l} {
    .icon {
      width: 32px;
      height: 32px;
    }
    padding: ${spacing.l.s - borderWidth}px;
    font-size: ${fontSizes.l.xs}px;
  }
`
