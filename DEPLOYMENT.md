# Production deployment checklist

## 1. Cloudflare R2

1. Add a custom domain to the R2 bucket. Do not use the rate-limited `r2.dev` URL in production.
2. Set `R2_PUBLIC_URL` to that custom domain.
3. Run `npm run sync:r2-assets`.
4. Confirm an object such as `/images/products/MCB-AC-1P-01.jpg` returns HTTP 200.

The Vercel deployment proxies the excluded `products`, `blog`, `solutions`, and `banner` image directories to R2.

## 2. Supabase

1. Disable public user sign-up unless the site needs it.
2. Run `supabase/production-rls.sql` in the SQL Editor.
3. Create only trusted admin users and assign `app_metadata.role=admin`.
4. Verify that an anonymous request cannot read or write `site_settings` or `notes`.

The admin console and upload endpoint are disabled by default. Keep
`ADMIN_CONSOLE_ENABLED=false` and `ADMIN_UPLOADS_ENABLED=false` for the initial
production launch. The current admin page stores hero settings, but the public
homepage still uses its checked-in content.

## 3. Resend

1. Keep `upprocure.com` verified.
2. Use a sender address on the verified domain.
3. Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `NOTIFICATION_EMAILS` in Vercel.
4. Add a Vercel Firewall rate-limit rule for `POST /api/send-email` if available on the selected plan.

## 4. Vercel

Add all variables from `.env.example` to both Preview and Production. Use the real R2 custom domain and set:

```text
NEXT_PUBLIC_SITE_URL=https://www.upprocure.com
USE_R2_ASSETS=true
ADMIN_CONSOLE_ENABLED=false
ADMIN_UPLOADS_ENABLED=false
```

Keep the framework preset as Next.js, the build command as `npm run build`, and Node.js as 24.x.

Do not add `R2_ACCESS_KEY_ID` or `R2_SECRET_ACCESS_KEY` to Vercel while uploads
are disabled. Static image delivery only needs `R2_PUBLIC_URL`.

## 5. GitHub

Before merging to `main`, run:

```bash
npm run check
```

Review the Vercel Preview deployment first. After the production deployment, test the homepage, one product, one blog article, the contact form, `robots.txt`, and `sitemap.xml`.
