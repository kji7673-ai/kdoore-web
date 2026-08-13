import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import {
  handleServerFunctions,
  RootLayout,
} from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'

type Args = {
  children: React.ReactNode
}

import { serverFunction } from './admin/serverFunction'

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
