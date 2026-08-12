import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { getPayload } from 'payload';
import config from '@payload-config';
import TimelineSection from "@/components/TimelineSection";

export default async function AboutPage() {
  let cmsData: any = null;
  const dbUrl = process.env.POSTGRES_URL;
  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      cmsData = await payload.findGlobal({ slug: 'certifications' });
    } catch (e) {
      console.warn("Payload DB connection failed", e);
    }
  }
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

      {/* 2. 회사 연혁 (Timeline Section) */}
      <div id="history">
        <TimelineSection />
      </div>

      {/* 3. 인증 및 허가 갤러리 */}
      <section id="certifications" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">보유 인증 및 허가</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(cmsData?.items?.length > 0 ? cmsData.items : [
              { id: '8.png', name: '대통령 표창' },
              { id: '2.png', name: '사회적가치 측정 우수' },
              { id: '3.png', name: '장애인 표준사업장' },
              { id: '4.png', name: '사회적기업 인증' },
              { id: '5.png', name: '주택관리업 등록' },
              { id: '6.png', name: '영업신고증' },
              { id: '7.png', name: '허가증' },
              { id: '9.jpg', name: '기타 인증' },
            ]).map((cert: any, idx: number) => {
              const cName = cert.title || cert.name;
              const cImage = typeof cert.image === 'object' ? cert.image?.url : `/certifications/${cert.id}`;
              return (
                <div key={cert.id || idx} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                  <div className="relative w-full aspect-[3/4] mb-3">
                    <Image src={cImage} alt={cName} fill className="object-contain" unoptimized />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 text-center leading-snug">{cName}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 오시는 길 */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">오시는 길</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">본사 (케이두레빌딩)</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">서울특별시 강서구 등촌로 51바길 14</p>
                      <p className="text-gray-500 text-sm">(등촌동 566-5)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-gray-900 font-medium">02-2668-0311</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-gray-900 font-medium">kedure@hanmail.net</p>
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
