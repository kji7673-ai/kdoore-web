import React from 'react';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Mapping slugs to Korean titles for now
  const titleMap: Record<string, string> = {
    'about': '케이두레소개',
    'gov-support': '정부지원기업안내',
    'business': '사업분야',
    'pr-center': '홍보센터',
    'inquiry': '고객문의',
  };

  const title = titleMap[slug] || slug;

  return (
    <div style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '40px', fontWeight: '600', marginBottom: '24px', letterSpacing: '-0.5px' }}>
        {title}
      </h1>
      <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
        이 페이지는 관리자 모드(CMS) 연결 대기 중입니다.<br />
        곧 관리자 페이지에서 직접 내용을 작성하고 등록하실 수 있도록 연동될 예정입니다.
      </p>
    </div>
  );
}
