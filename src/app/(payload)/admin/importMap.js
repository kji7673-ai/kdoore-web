import { RscEntryLexicalCell, RscEntryLexicalField, LexicalDiffComponent } from '@payloadcms/richtext-lexical/rsc'
import { VercelBlobClientUploadHandler } from '@payloadcms/storage-vercel-blob/client'

export const importMap = {
  '@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell': RscEntryLexicalCell,
  '@payloadcms/richtext-lexical/rsc#RscEntryLexicalField': RscEntryLexicalField,
  '@payloadcms/richtext-lexical/rsc#LexicalDiffComponent': LexicalDiffComponent,
  '@payloadcms/storage-vercel-blob/client#VercelBlobClientUploadHandler': VercelBlobClientUploadHandler,
}
