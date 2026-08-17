import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@payload-config';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '케이두레 뉴스 | 홍보센터',
  description: '케이두레의 새로운 소식과 주요 활동을 전해드립니다.',
};

export const revalidate = 60;

// Using a server component to fetch news from Payload
export default async function NewsPage() {
  let newsDocs: any[] = [];
  const dbUrl = process.env.POSTGRES_URL;

  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      const result = await payload.find({
        collection: 'news',
        sort: '-date',
        limit: 20,
      });
      newsDocs = result.docs;
    } catch (e) {
      console.warn("Payload DB connection failed", e);
    }
  }

  // Fallback dummy data if DB is empty or fails
  if (newsDocs.length === 0) {
    newsDocs = [
      { id: '1', title: '2026년 안전보건관리계획 안내', date: '2026-01-10T00:00:00.000Z' },
      { id: '2', title: '2026년 안전보건관리규정 안내', date: '2026-01-05T00:00:00.000Z' },
      { id: '3', title: '2022년도 제대군인 고용 우수기업 선정', date: '2022-12-01T00:00:00.000Z' },
    ];
  }

  return (
    <main className="min-h-screen bg-apple-canvas-parchment pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold text-apple-ink tracking-tight mb-4">
            케이두레 뉴스
          </h1>
          <p className="text-apple-lead-airy text-apple-ink-muted-48">
            케이두레의 최신 소식과 공지사항을 확인하세요.
          </p>
        </div>

        <div className="bg-white rounded-apple-lg border border-apple-hairline overflow-hidden shadow-sm">
          <ul className="divide-y divide-apple-divider-soft">
            {newsDocs.map((news) => {
              const dateStr = new Date(news.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              });

              return (
                <li key={news.id} className="group hover:bg-apple-surface-pearl transition-colors">
                  <Link href={`/news/${news.id}`} className="flex flex-col sm:flex-row sm:items-center p-6 gap-4 sm:gap-6 w-full">
                    <div className="text-apple-ink-muted-48 flex items-center gap-2 text-sm sm:w-32 shrink-0">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={news.date}>{dateStr}</time>
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-apple-body-strong text-apple-ink group-hover:text-apple-primary transition-colors text-lg">
                        {news.title}
                      </h2>
                    </div>
                    
                    <div className="hidden sm:flex text-apple-ink-muted-48 group-hover:text-apple-primary transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
