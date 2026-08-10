import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* 1. 히어로 배너 */}
      <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/legacy/slide_about.jpg" alt="About Banner" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">더 멀리 함께하는 기업! 케이두레</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            고객만족을 위하고 새로운 도약을 준비하는 케이두레
          </p>
        </div>
      </div>

      {/* 2. 회사 연혁 */}
      <section id="history" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">회사 연혁</h2>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {/* 2023 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 group-[.is-active]:bg-blue-600 text-blue-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2023</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="mb-1 text-sm text-blue-600 font-bold">2023.04</div>
                <div className="text-gray-700 font-medium">삼성바이오로직스 주차타워 미화용역 수주 (4.1)</div>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2022</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="mb-1 text-sm text-blue-600 font-bold">2022.12</div>
                <div className="text-gray-700 font-medium">2022년도 제대군인 고용 우수기업 선정 (제2022-12호)</div>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2021</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="text-gray-700 font-medium">삼성바이오로직스 개발동 미화용역 수주 (5.1)<br/><span className="text-sm text-gray-500">(에스원 협력사 등록: 4.28)</span></div>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2020</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm space-y-3">
                <div>
                  <div className="text-gray-700 font-medium">2020년 일자리창출 유공 대통령 표창 수상 (12.21)</div>
                  <div className="text-gray-700 font-medium">2020년 사회적가치 측정 우수기업 선정 (11.30)</div>
                </div>
                <div className="text-gray-700">증미지점 설치 (9.29)<br/><span className="text-sm text-gray-500">(교육서비스업: 요가, 필라테스)</span></div>
                <div className="text-gray-700">경기지점 설치 (11.11)<br/><span className="text-sm text-gray-500">-도매 및 소매업, 서비스업(시설관리)</span></div>
                <div className="text-gray-700">관공서 용역 수주</div>
              </div>
            </div>
            
            {/* 2019 ~ 2014 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-[10px]">~ 14</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm space-y-2">
                <p className="text-gray-700"><strong>2019:</strong> 공공주택관리업, 근로자파견업 허가</p>
                <p className="text-gray-700"><strong>2018:</strong> 사회적 기업 인증 (3.8), 서울교육청 학교 용역 수주</p>
                <p className="text-gray-700"><strong>2017:</strong> 건물위생관리업 등록, 사옥 이전(강서구)</p>
                <p className="text-gray-700"><strong>2016:</strong> 시설경비업 허가, 점보롤휴지제조업 등록</p>
                <p className="text-gray-700"><strong>2015:</strong> 장애인 표준사업장 등록 (11.27), 군인공제회 수주, 콜센터업 등록</p>
                <p className="text-gray-700 font-bold text-blue-600 mt-2"><strong>2014.12:</strong> 케이두레 설립 (12.24) 및 건물관리업, 종합서비스업 등록</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 인증 및 허가 갤러리 */}
      <section id="certifications" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">보유 인증 및 허가</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { id: '1626230357', name: '건물위생관리업 신고증' },
              { id: '1626230359', name: '경비업 허가증' },
              { id: '1626230361', name: '근로자파견사업 허가증' },
              { id: '1626230363', name: '소독업 신고증' },
              { id: '1626230366', name: '위생관리용역업 신고증' },
              { id: '1626230368', name: '저수조청소업 신고증' },
              { id: '1626230371', name: '사회적기업 인증서' },
              { id: '1626230373', name: '장애인표준사업장 인증서' },
              { id: '1626230376', name: 'ISO 9001 인증서' },
              { id: '1626230379', name: 'ISO 14001 인증서' },
              { id: '1626230381', name: '직접생산증명서' },
            ].map((cert) => (
              <div key={cert.id} className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] mb-3">
                  <Image src={`/images/legacy/cert_${cert.id}.jpg`} alt={cert.name} fill className="object-contain" />
                </div>
                <h4 className="text-xs font-bold text-gray-800 text-center leading-snug">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 오시는 길 */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">오시는 길</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">본사 (케이두레빌딩)</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">서울특별시 강서구 등촌로 51바길 14</p>
                      <p className="text-gray-500 text-sm">(등촌동 566-5)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <p className="text-gray-900">02-2668-0311</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <p className="text-gray-900">kedure@hanmail.net</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <p className="text-gray-900">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] md:h-full min-h-[300px] rounded-xl overflow-hidden shadow-inner border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2678688461715!2d126.85822361531101!3d37.54877707980126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c6bb11c1d81%3A0x8e5f2e6e3c9c6f2a!2z7ISc7Jq47Yq567OE7IucIOq강서구 등촌로51바길 14!5e0!3m2!1sko!2skr!4v1626230357000!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
