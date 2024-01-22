import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import stylesheet from '~/tailwind.css';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: stylesheet }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="hjpJCSIR3Fvo7Qd2tIqIHjhmfEPycokiLzVqCbvK9jE"
        />
        <meta name="robots" content="nocache" />
        <link rel="canonical" href="https://portfolio-chinhnguyen.vercel.app" />
        <Meta />
        <Links />
      </head>
      <body className="items-center bg-slate-900 text-slate-50">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
