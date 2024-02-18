import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {ComponentDemoTable} from './componentDemoTable'
import {ComponentDemoCode} from './componentDemoCode'
import {colors} from '../colors'
import {TabBox} from '../tabbox/tabBox'
import {Text} from '../../text/text'

type MakeTopLevelRequired<T> = {
    [K in keyof T]-?: ReactNode // T[K]
}

export type TComponentDemoProps<Props> = {
    component: (props: Props) => ReactNode
    componentProps: Props
    componentPropList: MakeTopLevelRequired<Props>
    title: string
    url?: string
    fullscreen?: boolean
    dark?: boolean
}

export const ComponentDemo = <Props,>(props: TComponentDemoProps<Props>) => {
    const component = props.component(props.componentProps)

    return (
        <Frame>
            <Headers>
                <Text
                    size={'xl'}
                    weight={500}>
                    {props.title}
                </Text>
                {props.fullscreen && (
                    <FullscreenLink
                        href={`/?component=${props.title}`}
                        target='_blank'>
                        Fullscreen ⧉
                    </FullscreenLink>
                )}
            </Headers>
            <TabBox
                dark={!!props.dark}
                tabs={{
                    Preview: <Preview>{component}</Preview>,
                    Props: <ComponentDemoTable dark={props.dark} componentPropList={props.componentPropList as any}/>,
                    Code: <ComponentDemoCode title={props.title} componentPropList={props.componentPropList}/>
                }}/>
        </Frame>
    )
}

const Frame = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
        margin: 0
    }
`

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const FullscreenLink = styled.a`
    color: ${colors.blue[100]};
    text-decoration: none;
    @media (hover: hover) {
        &:hover {
            text-decoration: underline;
        }
    }
`

export const DesignWrapper = styled.div`
    position: relative;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    box-shadow: inset 0 0 8px 0 rgba(0,0,0,0.2);
    border-radius: 0 0 8px 8px;
`

export const DesignTop = styled.div`
    position: relative;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    box-shadow: inset 0 0 8px 0 rgba(0,0,0,0.2);
    border-radius: 8px 8px 0 0;
`

const Preview = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    display: flex;
`
