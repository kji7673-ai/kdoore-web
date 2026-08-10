import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | KDoore",
  description: "케이두레의 비전과 가치를 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <h1 className="font-display-md text-display-md text-primary mb-8">About Us</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          KDoore는 단순한 시설 관리를 넘어 사람과 공간이 조화롭게 공존하는 지속 가능한 환경을 창조하는 사회적 기업입니다.
          우리는 상생과 협력을 통해 새로운 가치를 창출합니다.
        </p>
      </div>
    </div>
  );
}
