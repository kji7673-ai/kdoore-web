import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

type Args = {
  children: React.ReactNode
}

const dummyImportMap = {} as any;

export default function Layout({ children }: Args) {
  return <RootLayout config={config} importMap={dummyImportMap} serverFunction={async () => {}}>{children}</RootLayout>
}
