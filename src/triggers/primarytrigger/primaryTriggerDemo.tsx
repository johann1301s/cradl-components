import React from 'react'
import {PrimaryTrigger} from './primaryTrigger'
import {ComponentDemo} from '../../common/componentdemo/componentDemo'
import {lorem} from '../../common/lorem'

export const PrimaryTriggerDemo = () => {

  return (
    <ComponentDemo
      title={'PrimaryTrigger'}
      component={PrimaryTrigger}
      componentPropList={{
        label: null,
        wrapper: null,
        style: null, 
        className: null,
      }}
      componentProps={{
        label: lorem[2]
      }}/>
  )
}
