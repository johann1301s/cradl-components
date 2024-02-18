import React from 'react'
import styled from 'styled-components'
import {Logo} from '../logo/logo'
import {WidthRestrictedFrame} from '../common/widthRestrictedFrame'

export const DemoHeader = () => {

  return (
    <Frame>
      <WidthRestrictedFrame maxWidth={1000}>
        <Inner>
          <Logo/>
          <span>
            COMPONENTS
          </span>
        </Inner>
      </WidthRestrictedFrame>
    </Frame>
  )
}

const Frame = styled.div`
  border-bottom: 1px solid #f2f4f7;
  margin-bottom: 20px;
`

const Inner = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;  
`
