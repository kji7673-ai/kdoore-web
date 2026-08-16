import { Megaphone, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function PRCenterPage() {
  let cmsData: any = null;
  let allNewsItems: any[] = [];

  const dbUrl = process.env.POSTGRES_URL;
  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      cmsData = await payload.findGlobal({ slug: 'prcenter' });
      
      const newsRes = await payload.find({
        collection: 'news',
        limit: 10,
        sort: '-createdAt'
      });
      const recruitmentRes = await payload.find({
        collection: 'recruitment',
        limit: 10,
        sort: '-createdAt'
      });

      const newsList = newsRes.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        date: new Date(doc.createdAt).toLocaleDateString('ko-KR', {
          year: 'numeric', month: '2-digit', day: '2-digit'
        }).replace(/\.\s/g, '.').replace(/\.$/, ''),
        type: '뉴스'
      }));

      const recruitmentList = recruitmentRes.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        date: new Date(doc.createdAt).toLocaleDateString('ko-KR', {
          year: 'numeric', month: '2-digit', day: '2-digit'
        }).replace(/\.\s/g, '.').replace(/\.$/, ''),
        type: '채용'
      }));

      allNewsItems = [...newsList, ...recruitmentList].sort((a, b) => {
        return new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime();
      });

    } catch (e) {
      console.warn("Payload DB connection failed", e);
    }
  }

  const defaultNewsItems = [
    { id: 1, title: '2023년도 제대군인 고용 우수기업 선정', date: '2023.01.05', type: '뉴스' },
    { id: 2, title: '삼성바이오로직스 미화용역 수주', date: '2023.04.01', type: '뉴스' },
    { id: 3, title: '케이두레 2023 상반기 신입/경력 채용 공고', date: '2023.02.15', type: '채용' },
  ];

  const newsItems = allNewsItems.length > 0 ? allNewsItems : defaultNewsItems;

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="bg-apple-surface-tile-1 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6">
            {cmsData?.heroTitle || '홍보센터'}
          </h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto whitespace-pre-wrap">
            {cmsData?.heroSubtitle || '케이두레의 새로운 소식과 채용 정보를 알려드립니다'}
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <Megaphone className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">새로운 소식</h2>
          </div>

          <div className="space-y-4">
            {newsItems.map((item: any) => (
              <div 
                key={item.id} 
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full mt-1 shrink-0 ${
                      item.type === '채용' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.type}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-gray-500 mt-2 text-sm">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                  {item.type === '뉴스' && (
                    <Link 
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-600 font-medium whitespace-nowrap self-start md:self-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {newsItems.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 text-gray-500">
              등록된 소식이 없습니다.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
