import { getPayload } from 'payload';
import config from '@payload-config';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

export const revalidate = 60;

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  let newsItem: any = null;
  const dbUrl = process.env.POSTGRES_URL;

  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      newsItem = await payload.findByID({
        collection: 'news',
        id: params.id,
      });
    } catch (e) {
      console.warn("Payload DB connection failed or item not found", e);
    }
  }

  // Fallback dummy data if DB is empty or fails
  if (!newsItem) {
    if (params.id === '1') {
      newsItem = { id: '1', title: '2026년 안전보건관리계획 안내', date: '2026-01-10T00:00:00.000Z', content: { root: { children: [{ type: 'paragraph', children: [{ text: '2026년 안전보건관리계획에 대한 상세 안내입니다.' }] }] } } };
    } else {
      newsItem = { id: params.id, title: '소식을 찾을 수 없습니다.', date: new Date().toISOString(), content: null };
    }
  }

  const dateStr = new Date(newsItem.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <main className="min-h-screen bg-apple-canvas pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12">
          <Link href="/news" className="inline-flex items-center text-apple-primary hover:text-apple-primary-focus transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            목록으로 돌아가기
          </Link>
          <h1 className="text-apple-display-md md:text-apple-display-lg font-bold text-apple-ink tracking-tight mb-4 leading-tight">
            {newsItem.title}
          </h1>
          <div className="flex items-center text-apple-ink-muted-48 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={newsItem.date}>{dateStr}</time>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-apple-lg border border-apple-hairline shadow-sm min-h-[400px] prose prose-blue max-w-none">
          {/* Render RichText content. 
              Since Payload RichText rendering can be complex (Lexical), 
              we do a simple fallback text render or tell users it's a preview. */}
          {newsItem.content ? (
            <div className="text-apple-body text-apple-ink leading-relaxed">
              {/* Very basic render of Lexical AST for demonstration. 
                  In a full production, you would use a dedicated Lexical to HTML renderer. */}
              {JSON.stringify(newsItem.content).includes('text') ? (
                <p>관리자 모드에서 작성한 내용이 이곳에 표시됩니다.</p>
              ) : (
                <p>내용이 없습니다.</p>
              )}
            </div>
          ) : (
            <div className="text-apple-body text-apple-ink leading-relaxed">
              <p>내용이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
