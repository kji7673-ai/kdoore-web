import { MessageSquare, Send } from "lucide-react";

export default function InquiryPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="bg-apple-surface-tile-1 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6">고객문의</h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            궁금하신 사항을 남겨주시면 신속하고 친절하게 답변해 드리겠습니다
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">문의하기</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름 / 회사명 <span className="text-red-500">*</span></label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="홍길동 / 케이두레" />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input type="tel" id="contact" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="example@email.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">제목 <span className="text-red-500">*</span></label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="문의 제목을 입력해주세요" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">문의 내용 <span className="text-red-500">*</span></label>
                <textarea id="message" rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-600 mb-6">
                <div className="flex items-start">
                  <input type="checkbox" id="privacy" className="mt-1 mr-3 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <label htmlFor="privacy" className="leading-relaxed">
                    개인정보 수집 및 이용에 동의합니다. (수집항목: 이름, 연락처, 이메일 / 목적: 문의 접수 및 결과 회신 / 보유기간: 목적 달성 후 파기)
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full flex items-center justify-center py-4 px-8 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                  <Send className="w-5 h-5 mr-2" />
                  문의 접수하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
