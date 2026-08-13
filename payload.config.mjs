// src/payload.config.ts
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
var filename = fileURLToPath(import.meta.url);
var dirname = path.dirname(filename);
var rawPostgresUrl = process.env.POSTGRES_URL || "postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x";
var safeConnectionString = rawPostgresUrl;
try {
  const url = new URL(rawPostgresUrl);
  url.searchParams.set("sslmode", "no-verify");
  safeConnectionString = url.toString();
} catch (e) {
  console.error("Failed to parse POSTGRES_URL", e);
}
process.env.PGSSLMODE = "no-verify";
var payload_config_default = buildConfig({
  admin: {
    user: "users"
  },
  collections: [
    {
      slug: "users",
      auth: true,
      admin: {
        useAsTitle: "email"
      },
      fields: [
        // Email added by default
      ]
    },
    {
      slug: "media",
      upload: {
        staticDir: "public/media",
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"]
      },
      fields: [
        {
          name: "alt",
          type: "text"
        }
      ]
    },
    {
      slug: "pages",
      admin: {
        useAsTitle: "title",
        defaultColumns: ["title", "slug", "updatedAt"]
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            position: "sidebar"
          }
        },
        {
          name: "layout",
          type: "blocks",
          required: true,
          blocks: [
            {
              slug: "hero",
              labels: {
                singular: "Hero Section",
                plural: "Hero Sections"
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true
                },
                {
                  name: "subtitle",
                  type: "text"
                },
                {
                  name: "badgeText",
                  type: "text"
                },
                {
                  name: "backgroundImage",
                  type: "upload",
                  relationTo: "media"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      slug: "news",
      admin: {
        useAsTitle: "title"
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true
        },
        {
          name: "content",
          type: "richText"
        },
        {
          name: "date",
          type: "date",
          required: true
        }
      ]
    },
    {
      slug: "recruitment",
      admin: {
        useAsTitle: "title"
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true
        },
        {
          name: "content",
          type: "richText"
        },
        {
          name: "date",
          type: "date",
          required: true
        }
      ]
    }
  ],
  globals: [
    {
      slug: "homepage",
      label: "\uBA54\uC778 \uD398\uC774\uC9C0 \uAD00\uB9AC",
      access: {
        read: () => true
      },
      fields: [
        {
          name: "heroTitle",
          label: "\uBA54\uC778 \uBC30\uB108 \uC81C\uBAA9",
          type: "text"
        },
        {
          name: "heroSubtitle",
          label: "\uBA54\uC778 \uBC30\uB108 \uC11C\uBE0C\uD0C0\uC774\uD2C0",
          type: "textarea"
        },
        {
          name: "partners",
          label: "\uACE0\uAC1D\uC0AC \uB85C\uACE0 \uAD00\uB9AC",
          type: "array",
          fields: [
            { name: "name", label: "\uACE0\uAC1D\uC0AC\uBA85", type: "text" },
            { name: "logo", label: "\uB85C\uACE0 \uC774\uBBF8\uC9C0", type: "upload", relationTo: "media" }
          ]
        },
        {
          name: "services",
          label: "\uC8FC\uC694 \uC11C\uBE44\uC2A4 \uAD00\uB9AC",
          type: "array",
          fields: [
            { name: "title", label: "\uC11C\uBE44\uC2A4\uBA85", type: "text" },
            { name: "description", label: "\uC11C\uBE44\uC2A4 \uC124\uBA85", type: "textarea" },
            { name: "image", label: "\uB300\uD45C \uC774\uBBF8\uC9C0", type: "upload", relationTo: "media" }
          ]
        }
      ]
    },
    {
      slug: "certifications",
      label: "\uC778\uC99D\uC11C \uBC0F \uD5C8\uAC00\uC99D \uAD00\uB9AC",
      access: {
        read: () => true
      },
      fields: [
        {
          name: "items",
          label: "\uC778\uC99D\uC11C \uBAA9\uB85D",
          type: "array",
          fields: [
            { name: "title", label: "\uC778\uC99D\uC11C\uBA85", type: "text" },
            { name: "image", label: "\uC778\uC99D\uC11C \uC774\uBBF8\uC9C0", type: "upload", relationTo: "media" }
          ]
        }
      ]
    }
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "fallback-secret-for-kdoore-dev",
  db: postgresAdapter({
    pool: {
      connectionString: safeConnectionString,
      ssl: { rejectUnauthorized: false }
    },
    push: true
  }),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  }
});
export {
  payload_config_default as default
};
