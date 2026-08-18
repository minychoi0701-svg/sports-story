import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    sport: z.enum(['baseball', 'soccer', 'basketball']),
    category: z.enum(['history', 'league', 'rules', 'players', 'moments']),
    summary: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
