import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resourceSchema = z.object({
  type: z.enum(['gdc_talk', 'interview', 'article', 'postmortem', 'video', 'documentary', 'podcast']),
  title: z.string(),
  speaker: z.string().optional(),
  author: z.string().optional(),
  source: z.string(),
  year: z.number().optional(),
  summary: z.string(),
  url: z.string(),
  thumbnail: z.string().optional(),
  duration: z.string().optional(),
});

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    developer: z.string(),
    publisher: z.string().optional(),
    year: z.number(),
    genres: z.array(z.string()),
    playtime: z.number(),
    steam_rating: z.number(),
    description: z.string(),
    resources: z.array(resourceSchema).default([]),
    design_tags: z.array(z.string()).default([]),
  }),
});

export const collections = { games };
