import React, {CSSProperties, ReactNode} from 'react'
import styled from 'styled-components'
import {breakpointsMedia, fontSizes, fontWeights, lineHeights} from '../common/styleVariables'
import {colors} from '../common/colors'

export type TTextProps = {
    color?: string
    weight?: 400 | 500 | 700
    size: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs'
    children: ReactNode
    className?: string
    tag?: 'h1' | 'h2' | 'figcaption'
    style?: CSSProperties
    italic?: boolean
}

export const Text = (props: TTextProps) => {
    const {tag, children, ...rest} = props

    return (
        <Frame {...rest} as={tag}>
            {children}
        </Frame>
    )
}

const Frame = styled.span<TTextProps>`
    margin: 0;
    color: ${({color}) => color || colors.gray[190]};
    font-weight: ${({weight}) => weight || fontWeights[400]};
    line-height: ${lineHeights.goldenRatio};
    font-size: ${({size}) => fontSizes.s[size]}px;
    font-style: ${({italic}) => italic ? 'italic' : 'normal'};
    ${breakpointsMedia.m} {
        font-size: ${({size}) => fontSizes.m[size]}px;
    }
    ${breakpointsMedia.l} {
        font-size: ${({size}) => fontSizes.l[size]}px;
    }
`
