import { NextResponse } from 'next/server';

const USERNAME = 'marketing';
const PASSWORD = 'matias_marketing';

export function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const encoded = authHeader.split(' ')[1];
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
    const [user, pass] = decoded.split(':');

    if (user === USERNAME && pass === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Acceso restringido — Carly Reports', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Carly Reports"',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
