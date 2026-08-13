import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import '@payloadcms/next/css'
import { importMap } from './admin/importMap.js'

type Args = {
  children: React.ReactNode
}

export default function Layout({ children }: Args) {
  return <RootLayout config={config} importMap={importMap}>{children}</RootLayout>
}
