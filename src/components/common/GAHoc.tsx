/**
 * ga 统计的高阶函数狗子
 */
import React, { ComponentType, useEffect, ReactElement } from 'react'
import { isDEV } from 'src/utils'

interface Props {}

type reportDataType = {
  title?: string
  link?: string
}

export default function GAHoc(reportData?: reportDataType) {
  return function(RouteComp: ComponentType): ComponentType {
    return function(props: Props): ReactElement {
      useEffect(() => {
        const { origin, pathname, hash } = window.location
        let reportTitle = document.title
        let reportLink = `${origin}${pathname}${hash}`

        if (reportData && reportData.title) reportTitle = reportData.title
        if (reportData && reportData.link) reportLink = reportData.link

        if (isDEV) {
          console.log('上报信息', reportLink, reportTitle)
        }

        if (window['reportGA']) {
          window['reportGA'](document.title, reportLink)
        }
      }, [])
      return <RouteComp {...props} />
    }
  }
}
