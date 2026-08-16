'use client';

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation';

export default function LivePreviewComponent() {
  const router = useRouter();
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://kdoore-web-2.vercel.app';

  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={serverURL}
    />
  );
}
