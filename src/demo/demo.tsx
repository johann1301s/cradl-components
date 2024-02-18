import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {allComponents} from './demoComponents'
import {WidthRestrictedFrame} from '../common/widthRestrictedFrame'
import {DemoHeader} from './demoHeader'

export type TDemoProps = {
  basename?: string
}

export const Demo = (props: TDemoProps) => {

  return (
    <>
      <GlobalStyle/>
      <DemoHeader/>
      <WidthRestrictedFrame maxWidth={1000}>
        <List>
          {Object.entries(allComponents).map(([key, Comp]) => <Comp key={key}/>)}
        </List>
      </WidthRestrictedFrame>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
  * {
    font-family: Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const List = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`
