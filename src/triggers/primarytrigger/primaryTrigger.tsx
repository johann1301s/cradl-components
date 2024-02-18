import React, {CSSProperties, ReactNode} from 'react'
import styled from 'styled-components'
import {WrapperProvider} from '../../common/wrapperProvider'
import {fontWeights} from '../../common/styleVariables'
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
  > a, button {
    appearance: none;
    all: unset;
    text-decoration: none;
    &:active {
      & > div {
        background: #286090;
      }
    }
  }
`

const Trigger = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  gap: 5px;
  margin: 0;
  padding: 0 12px;
  background: ${colors.blue[100]};
  border-radius: 4px;
  span {
    color: white;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.4;
  }
  line-height: 1;
  white-space: pre;
  cursor: pointer;
  font-weight: ${fontWeights[500]};
  @media (hover: hover) {
    &:hover {
      background: ${colors.blue[120]};
      color: white; // safari bug
    }
  }
`
