import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'subject',
    group: '고객 관리',
  },
  access: {
    create: () => true, // Anyone can create an inquiry
    read: ({ req: { user } }) => Boolean(user), // Only admins can read
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: '이름 / 회사명',
    },
    {
      name: 'contact',
      type: 'text',
      required: true,
      label: '연락처',
    },
    {
      name: 'email',
      type: 'email',
      label: '이메일',
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: '문의 제목',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: '문의 내용',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'unread',
      options: [
        { label: '미확인', value: 'unread' },
        { label: '확인완료', value: 'read' },
        { label: '답변완료', value: 'replied' },
      ],
      label: '처리 상태',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
