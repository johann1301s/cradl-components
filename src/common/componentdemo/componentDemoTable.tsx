import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {colors} from '../colors'

type TComponentDemoTableProps = {
    componentPropList: Record<string, ReactNode>
    dark?: boolean
}

export const ComponentDemoTable = (props: TComponentDemoTableProps) => {

    return (
        <Frame dark={!!props.dark}>
            <thead>
                <tr>
                    <Th>
                        Prop
                    </Th>
                    <Th>
                        Type
                    </Th>
                    <Th>
                        Value
                    </Th>
                </tr>
            </thead>
            <tbody>
                {props.componentPropList && Object.entries(props.componentPropList).map(([prop, node]) => {
                    return (
                        <Row dark={!!props.dark}>
                            <td>{prop}</td>
                            <td>-</td>
                            <td>{node || '-'}</td>
                        </Row>
                    )
                })}
            </tbody>
        </Frame>
    )
}

const Frame = styled.table<{dark: boolean}>`
    position: relative;
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    color: ${({dark}) => colors.gray[dark ? 0 : 190]};
    th, td {
        padding: 10px;
    }
    thead {
        tr {
            background-color: ${({dark}) => colors.gray[dark ? 190 : 40]};
        }
    }
`

const Th = styled.th`
    font-weight: 500;
    text-align: left;
`

const Row = styled.tr<{dark: boolean}>`
    background-color: ${({dark}) => colors.gray[dark ? 180 : 0]};
    &:nth-child(2n) {
        background-color: ${({dark}) => colors.gray[dark ? 190 : 40]};
    }
`
