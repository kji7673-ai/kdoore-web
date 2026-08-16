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
      slug: 'about',
      label: '회사소개 페이지 관리',
      access: { read: () => true },
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Hero 배너',
              fields: [
                { name: 'heroTitle', label: '배너 제목', type: 'text', defaultValue: '더 멀리 함께하는 기업! 케이두레' },
                { name: 'heroSubtitle', label: '배너 서브타이틀', type: 'text', defaultValue: '고객만족을 위하고 새로운 도약을 준비하는 케이두레' },
                { name: 'heroBgImage', label: '배경 이미지', type: 'upload', relationTo: 'media' },
              ]
            },
            {
              label: '연혁 (History)',
              fields: [
                {
                  name: 'timeline',
                  label: '연혁 리스트',
                  type: 'array',
                  fields: [
                    { name: 'year', label: '연도', type: 'text' },
                    { name: 'title', label: '주요 제목', type: 'text' },
                    {
                      name: 'events',
                      label: '상세 이벤트',
                      type: 'array',
                      fields: [
                        { name: 'event', label: '내용', type: 'text' }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              label: '인증 및 허가증',
              fields: [
                {
                  name: 'certifications',
                  label: '인증서 목록',
                  type: 'array',
                  fields: [
                    { name: 'title', label: '인증서명', type: 'text' },
                    { name: 'image', label: '인증서 이미지', type: 'upload', relationTo: 'media' },
                  ]
                }
              ]
            },
            {
              label: '오시는 길',
              fields: [
                { name: 'address', label: '주소', type: 'text', defaultValue: '서울특별시 강서구 등촌로 51바길 14' },
                { name: 'addressDetail', label: '상세주소', type: 'text', defaultValue: '(등촌동 566-5)' },
                { name: 'phone', label: '전화번호', type: 'text', defaultValue: '02-2668-0311' },
                { name: 'email', label: '이메일', type: 'text', defaultValue: 'kedure@hanmail.net' },
                { name: 'hours', label: '운영시간', type: 'text', defaultValue: '평일 09:00 - 18:00 (주말/공휴일 휴무)' },
                { name: 'mapIframe', label: '구글 지도 임베드 코드 (iframe src)', type: 'textarea', defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2678688461715!2d126.85822361531101!3d37.54877707980126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c6bb11c1d81%3A0x8e5f2e6e3c9c6f2a!2z7ISc7Jq47Yq567OE7IucIOq강서구 등촌로51바길 14!5e0!3m2!1sko!2skr!4v1626230357000!5m2!1sko!2skr' }
              ]
            }
          ]
        }
      ]
    },
    {
      slug: 'services',
      label: '사업분야 페이지 관리',
      access: { read: () => true },
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Hero 배너',
              fields: [
                { name: 'heroTitle', label: '배너 제목', type: 'text', defaultValue: '사업분야' },
                { name: 'heroSubtitle', label: '배너 서브타이틀', type: 'textarea', defaultValue: '전문적이고 체계적인 케이두레만의 맞춤형 종합 관리 솔루션.\n세부 과업 지시서와 업무 범위를 확인하세요.' },
                { name: 'heroBgImage', label: '배경 이미지', type: 'upload', relationTo: 'media' },
              ]
            },
            {
              label: '서비스 목록',
              fields: [
                {
                  name: 'servicesList',
                  label: '서비스 상세 관리',
                  type: 'array',
                  fields: [
                    { name: 'title', label: '서비스명', type: 'text' },
                    { name: 'desc', label: '짧은 요약', type: 'textarea' },
                    { name: 'details', label: '상세 설명', type: 'textarea' },
                    { name: 'image', label: '대표 이미지', type: 'upload', relationTo: 'media' },
                    { name: 'icon', label: '아이콘 타입', type: 'select', options: [{label: '경비 (Shield)', value: 'Shield'}, {label: '시설 (Wrench)', value: 'Wrench'}, {label: '미화 (SprayCan)', value: 'SprayCan'}, {label: '파견 (Users2)', value: 'Users2'}, {label: '방역 (ShieldCheck)', value: 'ShieldCheck'}, {label: '저수조 (Droplets)', value: 'Droplets'}] },
                    {
                      name: 'scopes',
                      label: '상세 업무 범위',
                      type: 'array',
                      fields: [
                        { name: 'title', label: '분야 제목', type: 'text' },
                        {
                          name: 'items',
                          label: '업무 리스트',
                          type: 'array',
                          fields: [
                            { name: 'item', label: '업무 내용', type: 'text' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: '하단 CTA',
              fields: [
                { name: 'ctaTitle', label: 'CTA 제목', type: 'text', defaultValue: '전문적인 관리가 필요하신가요?' },
                { name: 'ctaSubtitle', label: 'CTA 서브타이틀', type: 'textarea', defaultValue: '케이두레의 전문가가 귀하의 시설에 최적화된 맞춤형 관리 솔루션과 비교 견적을 제안해 드립니다.' },
                { name: 'ctaButtonText', label: '버튼 텍스트', type: 'text', defaultValue: '현장 방문 상담 요청하기' },
                { name: 'ctaButtonLink', label: '버튼 링크', type: 'text', defaultValue: '/about#contact' }
              ]
            }
          ]
        }
      ]
    },
    {
      slug: 'govSupport',
      label: '정부지원안내 페이지 관리',
      access: { read: () => true },
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Hero 배너',
              fields: [
                { name: 'heroTitle', label: '배너 제목', type: 'text', defaultValue: '사회적기업 및 장애인표준사업장' },
                { name: 'heroSubtitle', label: '배너 서브타이틀', type: 'textarea', defaultValue: '공공기관 우선구매 대상 기업이자,\n귀사의 장애인 의무고용부담금을 실질적으로 감면해 드리는 정부지원 파트너입니다.' },
              ]
            },
            {
              label: '우선구매 혜택',
              fields: [
                { name: 'benefit1Title', label: '섹션 제목', type: 'text', defaultValue: '공공기관 우선구매 대상' },
                { name: 'benefit1Desc', label: '섹션 설명', type: 'textarea', defaultValue: '케이두레는 사회적 기업으로 인증받아 국가 및 지방자치단체, 공기업, 준정부기관의 우선구매 대상 기업입니다. 취약계층에게 양질의 일자리를 제공하며 지역사회와 상생하는 사회적 목적을 추구합니다.' },
                {
                  name: 'benefit1Items',
                  label: '혜택 리스트',
                  type: 'array',
                  fields: [
                    { name: 'item', label: '내용', type: 'text' }
                  ]
                },
              ]
            },
            {
              label: '고용부담금 감면',
              fields: [
                { name: 'benefit2Title', label: '섹션 제목', type: 'text', defaultValue: '장애인표준사업장 연계고용 혜택' },
                { name: 'benefit2Desc', label: '섹션 설명', type: 'textarea', defaultValue: '장애인 의무고용률을 달성하지 못한 기업이 장애인표준사업장인 케이두레와 도급 계약을 맺거나 물품을 구매할 경우, 납부해야 할 부담금을 대폭 감면받을 수 있습니다.' },
                {
                  name: 'benefit2Cards',
                  label: '상세 카드 리스트',
                  type: 'array',
                  fields: [
                    { name: 'label', label: '카드 라벨', type: 'text' },
                    { name: 'title', label: '카드 제목', type: 'text' },
                    { name: 'desc', label: '카드 설명', type: 'text' },
                    { name: 'isHighlight', label: '강조 여부(색상 다름)', type: 'checkbox' }
                  ]
                }
              ]
            },
            {
              label: '홍보 영상',
              fields: [
                { name: 'videoTitle', label: '섹션 제목', type: 'text', defaultValue: '홍보 영상' },
                { name: 'videoDesc', label: '섹션 설명', type: 'text', defaultValue: '케이두레의 비전과 가치를 영상으로 만나보세요.' },
                { name: 'videoId', label: '유튜브 비디오 ID', type: 'text', defaultValue: 'DKPkOXFlY10' }
              ]
            }
          ]
        }
      ]
    },
    {
      slug: 'dooremall',
      label: '두레몰 페이지 관리',
      access: { read: () => true },
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Hero 배너',
              fields: [
                { name: 'heroTitle', label: '배너 제목', type: 'text', defaultValue: '두레몰' },
                { name: 'heroSubtitle', label: '배너 서브타이틀', type: 'textarea', defaultValue: '장애인표준사업장 생산품 전용 쇼핑몰.\n기업에 필요한 모든 물품을 두레몰에서 편리하게 구매하고\n고용부담금 감면 혜택까지 받아보세요.' },
                { name: 'heroBgImage', label: '배경 이미지', type: 'upload', relationTo: 'media' },
                { name: 'linkUrl', label: '외부 링크', type: 'text', defaultValue: 'http://www.dooremall.kr' },
                { name: 'linkText', label: '링크 텍스트', type: 'text', defaultValue: '두레몰 공식 홈페이지 가기' }
              ]
            },
            {
              label: '이용 혜택',
              fields: [
                { name: 'benefitsTitle', label: '섹션 제목', type: 'text', defaultValue: '두레몰 이용 혜택' },
                { name: 'benefitsSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: '합리적인 가격과 확실한 감면 혜택을 동시에 누리세요.' },
                {
                  name: 'benefits',
                  label: '혜택 항목',
                  type: 'array',
                  fields: [
                    { name: 'icon', label: '아이콘 타입', type: 'select', options: [{label: '방패 (ShieldCheck)', value: 'ShieldCheck'}, {label: '박스 (Package)', value: 'Package'}, {label: '트럭 (Truck)', value: 'Truck'}] },
                    { name: 'title', label: '제목', type: 'text' },
                    { name: 'desc', label: '설명', type: 'textarea' }
                  ]
                }
              ]
            },
            {
              label: '취급 품목',
              fields: [
                { name: 'productsTitle', label: '섹션 제목', type: 'text', defaultValue: '주요 취급 품목' },
                { name: 'productsSubtitle', label: '섹션 서브타이틀', type: 'text', defaultValue: '다양한 맞춤형 물품을 공급하고 있습니다.' },
                {
                  name: 'products',
                  label: '품목 갤러리',
                  type: 'array',
                  fields: [
                    { name: 'title', label: '품목명', type: 'text' },
                    { name: 'desc', label: '상세 설명', type: 'textarea' },
                    { name: 'image', label: '대표 이미지', type: 'upload', relationTo: 'media' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
