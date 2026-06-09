-- Run this in the Supabase SQL Editor after disabling public sign-up.
-- Before enabling the admin console, assign trusted users app_metadata.role=admin
-- through the Supabase Admin API or Dashboard.

alter table public.site_settings enable row level security;
alter table public.notes enable row level security;

revoke all on table public.site_settings from anon;
revoke all on table public.notes from anon;

grant select, update on table public.site_settings to authenticated;
grant select, insert on table public.notes to authenticated;

create or replace function public.is_admin()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "Authenticated users can read site settings" on public.site_settings;
drop policy if exists "Admins can read site settings" on public.site_settings;
create policy "Admins can read site settings"
on public.site_settings
for select
to authenticated
using ((select public.is_admin()));

drop policy if exists "Authenticated users can update site settings" on public.site_settings;
drop policy if exists "Admins can update site settings" on public.site_settings;
create policy "Admins can update site settings"
on public.site_settings
for update
to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

drop policy if exists "Authenticated users can read notes" on public.notes;
drop policy if exists "Admins can read notes" on public.notes;
create policy "Admins can read notes"
on public.notes
for select
to authenticated
using ((select public.is_admin()));

drop policy if exists "Authenticated users can insert notes" on public.notes;
drop policy if exists "Admins can insert notes" on public.notes;
create policy "Admins can insert notes"
on public.notes
for insert
to authenticated
with check ((select public.is_admin()));
