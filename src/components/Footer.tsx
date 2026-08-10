"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className="bg-surface-container-highest dark:bg-inverse-surface w-full border-t border-outline-variant dark:border-outline">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand & Left Info */}
            <div className="md:col-span-5 flex flex-col space-y-6">
              <div>
                {/* SVG Logo placeholder for footer_logo_ko */}
                <h2 className="font-display-md text-display-md text-on-surface dark:text-inverse-on-surface tracking-tight mb-2">
                  주식회사 케이두레
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.open('http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=107-88-37994', 'onpopup', 'width=750, height=700, scrollbars=yes')}
                  className="px-4 py-2 border border-outline rounded-lg text-sm font-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors"
                >
                  사업자정보확인
                </button>
                <button 
                  className="px-4 py-2 border border-outline rounded-lg text-sm font-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors"
                >
                  이메일무단수집거부
                </button>
              </div>
            </div>

            {/* Customer Info */}
            <div className="md:col-span-7 flex flex-col space-y-4">
              <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface font-bold">CUSTOMER</h3>
              
              <div className="text-on-surface-variant space-y-2 font-body-md text-body-md">
                <p>서울특별시 강서구 강서로 468 7층 701호 (등촌동)</p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
                    <span>02-2668-0311</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>fax</span>
                    <span>02-3661-0311</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    <span>kedure@hanmail.net</span>
                  </div>
                </div>
                <p className="pt-2">AM:09:00 ~ PM:18:00 (토요일, 공휴일 휴무)</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4 text-on-surface-variant">
                <Link href="http://www.youtube.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">smart_display</span>
                  <span className="text-sm">Youtube</span>
                </Link>
                <Link href="http://twitter.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">flutter_dash</span>
                  <span className="text-sm">Twitter</span>
                </Link>
                <Link href="http://www.facebook.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">thumb_up</span>
                  <span className="text-sm">Facebook</span>
                </Link>
                <Link href="http://www.instagram.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">photo_camera</span>
                  <span className="text-sm">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-on-surface text-surface-container-highest py-6 text-center text-sm">
          <p>powerd by DOORE CO., LTD.</p>
          <button 
            onClick={() => router.push('/admin')}
            className="text-surface-container-highest/40 hover:text-white transition-colors mt-2"
            title="Admin Portal"
            aria-label="Open admin portal"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">key</span>
          </button>
        </div>
      </footer>
    </>
  );
}
