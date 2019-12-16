/**
 * 资源预加载
 */
import React, { lazy, useEffect, useState } from 'react'

type DynamicImportType = () => Promise<{ default: React.ComponentType<any> }>
type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>

export function usePrefetch(factory: DynamicImportType) {
  const [comp, setComp] = useState<LazyComponentType | null>(null)
  useEffect(() => {
    factory()
    const Comp = lazy(factory)
    console.log(Comp)
    setComp(Comp)
  }, [factory])
  return comp
}

// type ref https://stackoverflow.com/questions/52112948/whats-the-return-type-of-a-dynamic-import
