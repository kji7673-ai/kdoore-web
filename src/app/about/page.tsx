import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* 1. 히어로 배너 */}
      <div className="bg-apple-surface-tile-1 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-apple-surface-tile-1">
          <Image src="/images/legacy/slide_about.jpg" alt="About Banner" fill className="object-cover opacity-40 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-apple-surface-tile-1 via-apple-surface-tile-1/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6">더 멀리 함께하는 기업! 케이두레</h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            고객만족을 위하고 새로운 도약을 준비하는 케이두레
          </p>
        </div>
      </div>

      {/* 2. 회사 연혁 */}
      <section id="history" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-16">
            <h2 className="text-apple-display-md text-gray-900 font-bold">회사 연혁</h2>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.1rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gray-200">
            {/* 2023 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-[calc(50%-2rem)] text-right">
                <span className="text-apple-display-md font-bold text-apple-primary tracking-tighter">2023</span>
              </div>
              <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full border border-gray-200 bg-white shadow-sm z-10 md:mx-auto md:group-odd:-translate-x-0 md:group-even:translate-x-0">
                <div className="w-2.5 h-2.5 rounded-full bg-apple-primary"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 pb-6 border-b border-gray-100 last:border-0 mt-[-2rem] md:mt-0">
                <div className="md:hidden mb-2 text-apple-display-md font-bold text-apple-primary tracking-tighter">2023</div>
                <div className="text-sm font-bold text-gray-400 mb-1">04</div>
                <div className="text-apple-body text-gray-800">삼성바이오로직스 주차타워 미화용역 수주 (4.1)</div>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-[calc(50%-2rem)] text-right">
                <span className="text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">2022</span>
              </div>
              <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full border border-gray-200 bg-white z-10 md:mx-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200 group-hover:bg-apple-primary transition-colors"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 pb-6 border-b border-gray-100 last:border-0 mt-[-2rem] md:mt-0">
                <div className="md:hidden mb-2 text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">2022</div>
                <div className="text-sm font-bold text-gray-400 mb-1">12</div>
                <div className="text-apple-body text-gray-800">2022년도 제대군인 고용 우수기업 선정 (제2022-12호)</div>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-[calc(50%-2rem)] text-right">
                <span className="text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">2021</span>
              </div>
              <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full border border-gray-200 bg-white z-10 md:mx-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200 group-hover:bg-apple-primary transition-colors"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 pb-6 border-b border-gray-100 last:border-0 mt-[-2rem] md:mt-0">
                <div className="md:hidden mb-2 text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">2021</div>
                <div className="text-sm font-bold text-gray-400 mb-1">05</div>
                <div className="text-apple-body text-gray-800">삼성바이오로직스 개발동 미화용역 수주<br/><span className="text-sm text-gray-400 mt-1 block">(에스원 협력사 등록: 4.28)</span></div>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-[calc(50%-2rem)] text-right">
                <span className="text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">2020</span>
              </div>
              <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full border border-gray-200 bg-white z-10 md:mx-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200 group-hover:bg-apple-primary transition-colors"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 pb-6 border-b border-gray-100 last:border-0 mt-[-2rem] md:mt-0 space-y-4">
                <div className="md:hidden mb-2 text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">2020</div>
                <div>
                  <div className="text-sm font-bold text-gray-400 mb-1">11~12</div>
                  <div className="text-apple-body text-gray-800">2020년 일자리창출 유공 대통령 표창 수상<br/>2020년 사회적가치 측정 우수기업 선정</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 mb-1">09~11</div>
                  <div className="text-apple-body text-gray-800">증미지점 설치 (교육서비스업)<br/>경기지점 설치 (도매 및 소매업, 시설관리)</div>
                </div>
                <div className="text-apple-body text-gray-800">관공서 용역 다수 수주</div>
              </div>
            </div>
            
            {/* 2019 ~ 2014 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-[calc(50%-2rem)] text-right">
                <span className="text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">~ 14</span>
              </div>
              <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full border border-gray-200 bg-white z-10 md:mx-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200 group-hover:bg-apple-primary transition-colors"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 pb-6 border-b border-gray-100 last:border-0 mt-[-2rem] md:mt-0 space-y-2">
                <div className="md:hidden mb-2 text-apple-display-md font-bold text-gray-300 tracking-tighter group-hover:text-apple-primary transition-colors">~ 2014</div>
                <p className="text-apple-body text-gray-600"><strong className="text-gray-900">2019</strong> 공공주택관리업, 근로자파견업 허가</p>
                <p className="text-apple-body text-gray-600"><strong className="text-gray-900">2018</strong> 사회적 기업 인증, 서울교육청 수주</p>
                <p className="text-apple-body text-gray-600"><strong className="text-gray-900">2017</strong> 건물위생관리업 등록, 사옥 이전(강서구)</p>
                <p className="text-apple-body text-gray-600"><strong className="text-gray-900">2016</strong> 시설경비업 허가, 점보롤휴지제조업 등록</p>
                <p className="text-apple-body text-gray-600"><strong className="text-gray-900">2015</strong> 장애인 표준사업장 등록, 콜센터업 등록</p>
                <p className="text-apple-body-strong text-gray-900 mt-4">2014.12 케이두레 설립 및 건물관리업 등록</p>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: '8.png', name: '대통령 표창' },
              { id: '2.png', name: '사회적가치 측정 우수' },
              { id: '3.png', name: '장애인 표준사업장' },
              { id: '4.png', name: '사회적기업 인증' },
              { id: '5.png', name: '주택관리업 등록' },
              { id: '6.png', name: '영업신고증' },
              { id: '7.png', name: '허가증' },
              { id: '9.jpg', name: '기타 인증' },
            ].map((cert) => (
              <div key={cert.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] mb-3">
                  <Image src={`/certifications/${cert.id}`} alt={cert.name} fill className="object-contain" />
                </div>
                <h4 className="text-sm font-bold text-gray-800 text-center leading-snug">{cert.name}</h4>
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
