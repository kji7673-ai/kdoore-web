import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        // Email added by default
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: 'public/media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'layout',
          type: 'blocks',
          required: true,
          blocks: [
            {
              slug: 'hero',
              labels: {
                singular: 'Hero Section',
                plural: 'Hero Sections',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'text',
                },
                {
                  name: 'badgeText',
                  type: 'text',
                },
                {
                  name: 'backgroundImage',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            }
          ],
        },
      ],
    },
    {
      slug: 'news',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'date',
          type: 'date',
          required: true,
        },
      ],
    },
    {
      slug: 'recruitment',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'date',
          type: 'date',
          required: true,
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'homepage',
      label: '메인 페이지 관리',
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'heroTitle',
          label: '메인 배너 제목',
          type: 'text',
        },
        {
          name: 'heroSubtitle',
          label: '메인 배너 서브타이틀',
          type: 'textarea',
        },
        {
          name: 'partners',
          label: '고객사 로고 관리',
          type: 'array',
          fields: [
            { name: 'name', label: '고객사명', type: 'text' },
            { name: 'logo', label: '로고 이미지', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          name: 'services',
          label: '주요 서비스 관리',
          type: 'array',
          fields: [
            { name: 'title', label: '서비스명', type: 'text' },
            { name: 'description', label: '서비스 설명', type: 'textarea' },
            { name: 'image', label: '대표 이미지', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
    {
      slug: 'certifications',
      label: '인증서 및 허가증 관리',
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'items',
          label: '인증서 목록',
          type: 'array',
          fields: [
            { name: 'title', label: '인증서명', type: 'text' },
            { name: 'image', label: '인증서 이미지', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-for-kdoore-dev',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || 'postgres://placeholder:placeholder@localhost/placeholder',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});

