import React from 'react'
import {Text} from './text'
import {ComponentDemo} from '../common/componentdemo/componentDemo'
import {lorem} from '../common/lorem'

export const TextDemo = () => {

  return (
    <ComponentDemo
      title={'Text'}
      component={Text}
      componentPropList={{
        size: null,
        weight: null,
        children: null,
        color: null,
        className: null,
        tag: null,
        style: null,
        italic: null
      }}
      componentProps={{
        size: 'm',
        weight: 400,
        children: lorem[2]
      }}/>
  )
}
