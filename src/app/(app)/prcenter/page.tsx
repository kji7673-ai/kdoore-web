import { Megaphone, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PRCenterPage() {
  const newsItems = [
    { id: 1, title: '2023년도 제대군인 고용 우수기업 선정', date: '2023.01.05', type: '뉴스' },
    { id: 2, title: '삼성바이오로직스 미화용역 수주', date: '2023.04.01', type: '뉴스' },
    { id: 3, title: '케이두레 2023 상반기 신입/경력 채용 공고', date: '2023.02.15', type: '채용' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="bg-apple-surface-tile-1 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6">홍보센터</h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            케이두레의 새로운 소식과 채용 정보를 알려드립니다
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <Megaphone className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">최신 소식</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-100">
              {newsItems.map(item => (
                <div key={item.id} className="p-6 hover:bg-blue-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.type === '뉴스' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                      {item.type}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            ※ 원본 사이트의 게시판 데이터베이스를 연동하거나 새 게시글을 추가할 수 있도록 준비된 페이지입니다.
          </div>
        </div>
      </section>
    </main>
  );
}
