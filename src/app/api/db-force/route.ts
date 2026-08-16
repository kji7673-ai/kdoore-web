import { NextResponse } from 'next/server';
import { Client } from 'pg';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const sqlCommands = `
-- Drop existing incorrectly-configured homepage table if it exists
DROP TABLE IF EXISTS "homepage" CASCADE;

-- 1. HOMEPAGE
CREATE TABLE IF NOT EXISTS "homepage" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_badge" varchar,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"hero_bg_image_id" integer,
	"core_values_title" varchar,
	"core_values_subtitle" varchar,
	"partners_title" varchar,
	"partners_subtitle" varchar,
	"services_title" varchar,
	"services_subtitle" varchar,
	"pr_title" varchar,
	"pr_description" varchar,
	"pr_video_id" varchar,
	"process_title" varchar,
	"process_subtitle" varchar,
	"cta_title" varchar,
	"cta_subtitle" varchar,
	"cta_phone" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "homepage_highlights" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"value" numeric,
	"suffix" varchar,
	"title" varchar,
	"description" varchar
);

CREATE TABLE IF NOT EXISTS "homepage_core_values" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"icon" varchar,
	"title" varchar,
	"description" varchar
);

CREATE TABLE IF NOT EXISTS "homepage_partners" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"logo_id" integer
);

CREATE TABLE IF NOT EXISTS "homepage_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"icon" varchar,
	"title" varchar,
	"description" varchar,
	"image_id" integer,
	"link" varchar
);

CREATE TABLE IF NOT EXISTS "homepage_process_steps" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"step_number" varchar,
	"title" varchar,
	"description" varchar
);

-- foreign keys for homepage arrays
DO $$ BEGIN ALTER TABLE "homepage_highlights" ADD CONSTRAINT "homepage_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "homepage_core_values" ADD CONSTRAINT "homepage_core_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "homepage_partners" ADD CONSTRAINT "homepage_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "homepage_services" ADD CONSTRAINT "homepage_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "homepage_process_steps" ADD CONSTRAINT "homepage_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

INSERT INTO "homepage" ("id") VALUES (1) ON CONFLICT ("id") DO NOTHING;

-- 2. ABOUT
CREATE TABLE IF NOT EXISTS "about" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"hero_bg_image_id" integer,
	"address" varchar,
	"address_detail" varchar,
	"phone" varchar,
	"email" varchar,
	"hours" varchar,
	"map_iframe" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "about_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"year" varchar,
	"title" varchar
);

CREATE TABLE IF NOT EXISTS "about_timeline_events" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"event" varchar
);

CREATE TABLE IF NOT EXISTS "about_certifications" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"image_id" integer
);

DO $$ BEGIN ALTER TABLE "about_timeline" ADD CONSTRAINT "about_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "about_timeline_events" ADD CONSTRAINT "about_timeline_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_timeline"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "about_certifications" ADD CONSTRAINT "about_certifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

INSERT INTO "about" ("id") VALUES (1) ON CONFLICT ("id") DO NOTHING;

-- 3. SERVICES
CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"hero_bg_image_id" integer,
	"cta_title" varchar,
	"cta_subtitle" varchar,
	"cta_button_text" varchar,
	"cta_button_link" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "services_services_list" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"desc" varchar,
	"details" varchar,
	"image_id" integer,
	"icon" varchar
);

CREATE TABLE IF NOT EXISTS "services_services_list_scopes" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar
);

CREATE TABLE IF NOT EXISTS "services_services_list_scopes_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"item" varchar
);

DO $$ BEGIN ALTER TABLE "services_services_list" ADD CONSTRAINT "services_services_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "services_services_list_scopes" ADD CONSTRAINT "services_services_list_scopes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_services_list"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "services_services_list_scopes_items" ADD CONSTRAINT "services_services_list_scopes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_services_list_scopes"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

INSERT INTO "services" ("id") VALUES (1) ON CONFLICT ("id") DO NOTHING;

-- 4. GOV SUPPORT
CREATE TABLE IF NOT EXISTS "gov_support" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"benefit1_title" varchar,
	"benefit1_desc" varchar,
	"benefit2_title" varchar,
	"benefit2_desc" varchar,
	"video_title" varchar,
	"video_desc" varchar,
	"video_id" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "gov_support_benefit1_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"item" varchar
);

CREATE TABLE IF NOT EXISTS "gov_support_benefit2_cards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar,
	"title" varchar,
	"desc" varchar,
	"is_highlight" boolean
);

DO $$ BEGIN ALTER TABLE "gov_support_benefit1_items" ADD CONSTRAINT "gov_support_benefit1_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gov_support"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "gov_support_benefit2_cards" ADD CONSTRAINT "gov_support_benefit2_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gov_support"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

INSERT INTO "gov_support" ("id") VALUES (1) ON CONFLICT ("id") DO NOTHING;

-- 5. DOOREMALL
CREATE TABLE IF NOT EXISTS "dooremall" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"hero_bg_image_id" integer,
	"link_url" varchar,
	"link_text" varchar,
	"benefits_title" varchar,
	"benefits_subtitle" varchar,
	"products_title" varchar,
	"products_subtitle" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "dooremall_benefits" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"icon" varchar,
	"title" varchar,
	"desc" varchar
);

CREATE TABLE IF NOT EXISTS "dooremall_products" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"desc" varchar,
	"image_id" integer
);

DO $$ BEGIN ALTER TABLE "dooremall_benefits" ADD CONSTRAINT "dooremall_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dooremall"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN ALTER TABLE "dooremall_products" ADD CONSTRAINT "dooremall_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dooremall"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

INSERT INTO "dooremall" ("id") VALUES (1) ON CONFLICT ("id") DO NOTHING;

-- 6. PRCENTER
CREATE TABLE IF NOT EXISTS "prcenter" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

INSERT INTO "prcenter" ("id") VALUES (1) ON CONFLICT ("id") DO NOTHING;

-- 7. FIX ENUM TYPES FOR PAYLOAD SELECT FIELDS
DO $$ BEGIN
  CREATE TYPE enum_homepage_core_values_icon AS ENUM ('Safety', 'Coexistence', 'Innovation');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE enum_homepage_services_icon AS ENUM ('Security', 'Maintenance', 'Cleaning');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE enum_services_services_list_icon AS ENUM ('Shield', 'Wrench', 'SprayCan', 'Users2', 'ShieldCheck', 'Droplets');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE enum_dooremall_benefits_icon AS ENUM ('ShieldCheck', 'Package', 'Truck');
EXCEPTION WHEN duplicate_object THEN null; END $$;

ALTER TABLE "homepage_core_values" ALTER COLUMN "icon" TYPE enum_homepage_core_values_icon USING "icon"::text::enum_homepage_core_values_icon;
ALTER TABLE "homepage_services" ALTER COLUMN "icon" TYPE enum_homepage_services_icon USING "icon"::text::enum_homepage_services_icon;
ALTER TABLE "services_services_list" ALTER COLUMN "icon" TYPE enum_services_services_list_icon USING "icon"::text::enum_services_services_list_icon;
ALTER TABLE "dooremall_benefits" ALTER COLUMN "icon" TYPE enum_dooremall_benefits_icon USING "icon"::text::enum_dooremall_benefits_icon;
`;

export async function GET() {
  try {
    const rawEnvUrl = process.env.POSTGRES_URL || 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x';
    const url = new URL(rawEnvUrl);
    url.searchParams.set('sslmode', 'no-verify');
    
    const client = new Client({
      connectionString: url.toString(),
      ssl: { rejectUnauthorized: false }
    });

    await client.connect();
    
    // Execute the raw SQL commands
    await client.query(sqlCommands);
    
    await client.end();
    
    return NextResponse.json({ success: true, message: 'All tables created successfully via raw SQL.' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.toString(), stack: error.stack }, { status: 500 });
  }
}
