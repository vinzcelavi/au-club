import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define redirects map
  const redirects: Record<string, string> = {
    '/squash-et-lieux-incroyables': '/',
    '/squash-et-lieux-incroyables/': '/',
    '/squash-et-celebrites-dillustres-mordus-de-squash': '/',
    '/squash-et-celebrites-dillustres-mordus-de-squash/': '/',
    '/lhistoire-farfelue-du-squash': '/',
    '/lhistoire-farfelue-du-squash/': '/',
    '/allez-on-y-va': '/',
    '/allez-on-y-va/': '/',
    '/le-squash-aux-jeux-olympiques-2028': '/',
    '/le-squash-aux-jeux-olympiques-2028/': '/',
    '/lhymne-du-club-a-la-une-du-site-de-la-fede': '/',
    '/lhymne-du-club-a-la-une-du-site-de-la-fede/': '/'
  };

  // Check if current pathname needs to be redirected
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'
  ]
};
