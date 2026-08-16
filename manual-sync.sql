CREATE TABLE IF NOT EXISTS "homepage" (
	"id" serial PRIMARY KEY NOT NULL,
	"hero_title" varchar,
	"hero_subtitle" varchar,
	"hero_bg_image_id" integer,
	"hero_button_text" varchar,
	"hero_button_link" varchar,
	"process_title" varchar,
	"process_subtitle" varchar,
	"cta_title" varchar,
	"cta_subtitle" varchar,
	"cta_button_text" varchar,
	"cta_button_link" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now(),
	"created_at" timestamp(3) with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "homepage_highlights" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"item" varchar
);

CREATE TABLE IF NOT EXISTS "homepage_core_values" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"desc" varchar
);

CREATE TABLE IF NOT EXISTS "homepage_process_steps" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"step_num" varchar,
	"title" varchar,
	"desc" varchar
);

DO $$ BEGIN
 ALTER TABLE "homepage_highlights" ADD CONSTRAINT "homepage_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_core_values" ADD CONSTRAINT "homepage_core_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "homepage_process_steps" ADD CONSTRAINT "homepage_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

INSERT INTO "homepage" ("id", "hero_title", "hero_subtitle") VALUES (1, '홈페이지 메인', '초기 데이터') ON CONFLICT ("id") DO NOTHING;
