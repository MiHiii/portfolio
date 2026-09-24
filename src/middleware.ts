import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { defaultLocale } from '@/i18n/config';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
}

export const config = {
  matcher: '/',
};
