import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rawEnvUrl = process.env.POSTGRES_URL || 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x';
const rawPostgresUrl = rawEnvUrl.replace(/^["']|["']$/g, '').trim();

let safeConnectionString = rawPostgresUrl;
try {
  const url = new URL(rawPostgresUrl);
  url.searchParams.set('sslmode', 'no-verify');
  safeConnectionString = url.toString();
} catch (e) {
  console.error('Failed to parse POSTGRES_URL, using fallback');
  const fallback = 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x';
  const url = new URL(fallback);
  url.searchParams.set('sslmode', 'no-verify');
  safeConnectionString = url.toString();
}

// Removed invalid process.env assignment that caused Webpack Syntax Errors
export default buildConfig({
  serverURL: process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.NEXT_PUBLIC_SERVER_URL || 'https://kdoore-web-2.vercel.app',
  admin: {
    user: 'users',
    livePreview: {
      url: ({ data, req, collection, global }) => {
        const serverURL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.NEXT_PUBLIC_SERVER_URL || 'https://kdoore-web-2.vercel.app';
        if (global === 'homepage') return `${serverURL}/`;
        if (global === 'certifications') return `${serverURL}/about`;
        if (collection === 'pages') return `${serverURL}/${data?.slug || ''}`;
        if (collection === 'news') return `${serverURL}/news/${data?.id || ''}`;
        if (collection === 'recruitment') return `${serverURL}/`;
        return `${serverURL}/`;
      },
      collections: ['pages', 'news', 'recruitment'],
      globals: ['homepage', 'certifications'],
    }
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
      access: { read: () => true },
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Hero 배너',
              fields: [
                { name: 'heroBadge', label: '메인 배너 뱃지 텍스트', type: 'text', defaultValue: '고객 만족을 향한 끝없는 집념' },
                { name: 'heroTitle', label: '메인 배너 제목', type: 'text', defaultValue: '도약과 혁신을 넘어, K-Doore' },
                { name: 'heroSubtitle', label: '메인 배너 서브타이틀', type: 'textarea', defaultValue: '케이두레는 최고의 서비스와 완벽한 신뢰를 바탕으로,\n당신의 비즈니스가 더 높은 곳으로 도약할 수 있도록 최선을 다합니다.' },
                { name: 'heroBgImage', label: '배경 이미지', type: 'upload', relationTo: 'media' },
              ]
            },
            {
              label: '숫자 카운터',
              fields: [
                {
                  name: 'highlights',
                  label: '숫자 하이라이트',
                  type: 'array',
                  fields: [
                    { name: 'value', label: '숫자 (Value)', type: 'number' },
                    { name: 'suffix', label: '접미사 (+, % 등)', type: 'text' },
                    { name: 'title', label: '제목', type: 'text' },
                    { name: 'description', label: '설명', type: 'text' },
                  ]
                }
              ]
            },
            {
              label: '핵심 가치',
              fields: [
                { name: 'coreValuesTitle', label: '섹션 제목', type: 'text', defaultValue: 'K-Doore 3대 핵심 가치' },
                { name: 'coreValuesSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: '안전, 상생, 혁신' },
                {
                  name: 'coreValues',
                  label: '핵심 가치 카드',
                  type: 'array',
                  fields: [
                    { name: 'icon', label: '아이콘 타입', type: 'select', options: [{label: '안전 (Shield)', value: 'Safety'}, {label: '상생 (Building)', value: 'Coexistence'}, {label: '혁신 (Rocket)', value: 'Innovation'}] },
                    { name: 'title', label: '가치 제목', type: 'text' },
                    { name: 'description', label: '상세 설명', type: 'textarea' },
                  ]
                }
              ]
            },
            {
              label: '고객사',
              fields: [
                { name: 'partnersTitle', label: '섹션 제목', type: 'text', defaultValue: '함께 성장하는 파트너스' },
                { name: 'partnersSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: 'Trust & Partners' },
                {
                  name: 'partners',
                  label: '고객사 로고 관리',
                  type: 'array',
                  fields: [
                    { name: 'name', label: '고객사명', type: 'text' },
                    { name: 'logo', label: '로고 이미지', type: 'upload', relationTo: 'media' },
                  ],
                }
              ]
            },
            {
              label: '주요 서비스',
              fields: [
                { name: 'servicesTitle', label: '섹션 제목', type: 'text', defaultValue: '종합 관리 솔루션' },
                { name: 'servicesSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: 'Premium Services' },
                {
                  name: 'services',
                  label: '주요 서비스 관리',
                  type: 'array',
                  fields: [
                    { name: 'icon', label: '아이콘 타입', type: 'select', options: [{label: '경비/보안 (Shield)', value: 'Security'}, {label: '건축물 유지 (Building)', value: 'Maintenance'}, {label: '위생/미화 (Cleaning)', value: 'Cleaning'}] },
                    { name: 'title', label: '서비스명', type: 'text' },
                    { name: 'description', label: '서비스 설명', type: 'textarea' },
                    { name: 'image', label: '대표 이미지', type: 'upload', relationTo: 'media' },
                    { name: 'link', label: '연결 링크 (예: /business)', type: 'text' },
                  ],
                },
              ]
            },
            {
              label: 'PR 영상',
              fields: [
                { name: 'prTitle', label: '섹션 제목', type: 'text', defaultValue: '당신의 비즈니스를 위한 최고의 파트너' },
                { name: 'prDescription', label: '섹션 설명', type: 'textarea', defaultValue: '우리가 만들어가는 변화를 영상으로 확인하세요.' },
                { name: 'prVideoId', label: '유튜브 비디오 ID (예: DKPkOXFlY10)', type: 'text', defaultValue: 'DKPkOXFlY10' },
              ]
            },
            {
              label: '프로세스',
              fields: [
                { name: 'processTitle', label: '섹션 제목', type: 'text', defaultValue: '체계적인 5단계 프로세스' },
                { name: 'processSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: 'Our Process' },
                {
                  name: 'processSteps',
                  label: '프로세스 스텝',
                  type: 'array',
                  fields: [
                    { name: 'stepNumber', label: '스텝 번호 (예: 01)', type: 'text' },
                    { name: 'title', label: '단계 제목', type: 'text' },
                    { name: 'description', label: '단계 설명', type: 'textarea' },
                  ]
                }
              ]
            },
            {
              label: '하단 CTA',
              fields: [
                { name: 'ctaTitle', label: '섹션 제목', type: 'text', defaultValue: '최상의 결과를 원하시나요?' },
                { name: 'ctaSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: '지금 바로 케이두레의 전문가와 상담해 보세요.' },
                { name: 'ctaPhone', label: '전화번호', type: 'text', defaultValue: '1544-7673' },
              ]
            }
          ]
        }
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
      connectionString: safeConnectionString,
      ssl: { rejectUnauthorized: false },
    },
    push: true,
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});

