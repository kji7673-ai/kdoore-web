import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | KDoore",
  description: "케이두레 고객 센터 및 오시는 길 안내",
};

export default function ContactPage() {
  const mapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyCnuX53lKkSTTGk55qIqc2qW4CeshknAPI';
  // Use a sample location for KDoore HQ (e.g. Seoul City Hall coords if unknown)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=Seoul,South+Korea&zoom=14`;

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <h1 className="font-display-md text-display-md text-primary mb-8">Contact & Location</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-12">
          도움이 필요하시거나 문의사항이 있으신 경우 언제든지 연락 주시기 바랍니다.<br/>
          아래 지도를 통해 KDoore 본사 위치를 확인하실 수 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="col-span-1 md:col-span-4 space-y-8">
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">Headquarters</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                서울특별시 중구 세종대로 110<br/>
                KDoore 타워 15층
              </p>
            </div>
            
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">Contact Info</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                <strong>Tel:</strong> 02-1234-5678<br/>
                <strong>Fax:</strong> 02-1234-5679<br/>
                <strong>Email:</strong> contact@kdoore.co.kr
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-8">
            <div className="w-full h-[500px] rounded-xl overflow-hidden border border-outline-variant shadow-float">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
                title="KDoore Headquarters Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
