import React, {ReactNode, useState} from 'react'
import styled from 'styled-components'
import {TabsBase} from './tabBoxTypes'
import {colors} from '../colors'

export type TTabBoxProps<Tabs extends TabsBase> = {
    dark?: boolean
    tabs: Tabs
}

export const TabBox = <Tabs extends TabsBase,>(props: TTabBoxProps<Tabs>) => {
    const [selectedTab, setSelectedTab] = useState(Object.keys(props.tabs).at(0))

    let component: ReactNode

    return (
        <Frame>
            <TabFrame>
                <Inner dark={!!props.dark}>
                    <Tabs>
                        {Object.entries(props.tabs).map(([tab, node]) => {
                          const selected = selectedTab === tab

                          if (selected) {
                            component = node
                          }
                          return (
                            <Tab
                                dark={!!props.dark}
                                onClick={() => setSelectedTab(tab)}
                                key={tab}
                                selected={selected}>
                                {tab}
                            </Tab>
                        )
                        })}
                    </Tabs>
                    <Shadow dark={!!props.dark}/>
                </Inner>
            </TabFrame>
            <DesignWrapper dark={!!props.dark}>
                <DesignWrapperAbsolute dark={!!props.dark}/>
                {component}
            </DesignWrapper>
        </Frame>
    )
}

const blur = 8
const radius = 8

const Frame = styled.div`

`

const TabFrame = styled.div`
    position: relative;
    height: fit-content;
    border-radius: ${radius}px ${radius}px 0 0;
    overflow: hidden;
    isolation: isolate;
`

const Shadow = styled.div<{ dark: boolean }>`
    position: absolute;
    inset: 0 0 -${blur}px 0;
    border-radius: ${radius}px ${radius}px 0 0;
    box-shadow: inset 0 0 ${blur}px 0 ${({dark}) => `rgba(0,0,0,${dark ? 1 : 0.2})`};
    z-index: 1;
    pointer-events: none;
`

const Inner = styled.div<{ dark: boolean }>`
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    background: ${({dark}) => colors.gray[dark ? 180 : 0]};
`

const Tabs = styled.div`
    position: relative;
    width: 100%;
    overflow-x: scroll;
    display: flex;
`

const Tab = styled.div<{selected: boolean, dark: boolean}>`
    position: relative;
    background: ${({selected, dark}) => {
        if (dark) {
            return colors.gray[selected ? 170 : 180]
        }
        return colors.gray[selected ? 40 : 0]
    }};
    color: ${({selected, dark}) => {
        if (dark) {
            return colors.gray[selected ? 40 : 120]
        }
        return colors.gray[selected ? 190 : 130]
    }};
    padding: 10px;
    cursor: pointer;
`

const DesignWrapper = styled.div<{ dark: boolean}>`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: ${({dark}) => colors.gray[dark ? 190 : 0]};
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    isolation: isolate;
`

const DesignWrapperAbsolute = styled.div<{dark: boolean}>`
    position: absolute;
    inset: 0;
    z-index: 1;
    box-shadow: inset 0 0 8px 0 ${({dark}) => `rgba(0,0,0,${dark ? 1 : 0.2})`};
    border-radius: 0 0 8px 8px;
    pointer-events: none;
`
