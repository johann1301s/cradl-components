import React, {ReactNode} from 'react'
import styled from 'styled-components'

type MakeTopLevelRequired<T> = {
    [K in keyof T]-?: ReactNode // T[K]
}

export type TComponentDemoCodeProps<Props> = {
    title: string
    componentPropList: MakeTopLevelRequired<Props>
}

export const ComponentDemoCode = <Props,>(props: TComponentDemoCodeProps<Props>) => {
    
    return (
        <Frame>
            <div>
                <A>import</A> <B>{`{${props.title}}`}</B> <A>from</A> <C>'@johann1301s/cradle-components'</C><B>;</B>
            </div>
            <div>&nbsp;</div>
            <div>
                <A>const</A> <B>{props.title}Example</B> <D>=</D> <B>()</B> <D>{'=>'}</D> <B>{'{'}</B>
            </div>
            <div>&nbsp;</div>
            <div>
                &nbsp;&nbsp;<A>return</A> <B>(</B>
            </div>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;<D>{'<'}</D><E>{props.title}</E>
            </div>
            {Object.keys(props.componentPropList).map((prop) => (
                <div key={prop}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>{prop}</B><D>=</D><B>{'{'}</B><D>undefined</D><B>{'}'}</B>
                </div>
            ))}
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;<D>{'/>'}</D>
            </div>
            <div>
                &nbsp;&nbsp;<B>);</B>
            </div>
            <div>
                <B>{'}'};</B>
            </div>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    background: rgb(22, 27, 34);
    padding: 10px;
    font-size: 14px;
    &, * {
        font-family: monospace;
    }
`

const A = styled.span`
    color: rgb(255, 123, 114);
`

const B = styled.span`
    color: rgb(201, 209, 217);
`

const C = styled.span`
    color: rgb(165, 214, 255);
`

const D = styled.span`
    color: rgb(121, 192, 255);
`

const E = styled.span`
    color: rgb(126, 231, 135);
`
