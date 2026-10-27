import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_CATEGORIES } from './lib/categories';



// One Markdown file per post; Decap CMS (public/admin/config.yml) writes to this folder.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(BLOG_CATEGORIES),
    date: z.coerce.date(),
    cover: z.string().optional(), // path to an uploaded image, e.g. /uploads/foo.png
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
