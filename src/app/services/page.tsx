import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | KDoore",
  description: "케이두레의 핵심 서비스 안내",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <h1 className="font-display-md text-display-md text-primary mb-8">Services</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          국가 공공기관 및 대규모 시설물의 통합 관리 경험을 바탕으로, 체계적이고 신뢰할 수 있는 최상의 솔루션을 제공합니다.
        </p>
      </div>
    </div>
  );
}
