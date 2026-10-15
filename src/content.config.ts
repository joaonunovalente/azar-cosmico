import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const episodes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    episodeNumber: z.number().int(),
    season: z.number().int().default(1),
    duration: z.string().default(''),
    audioUrl: z.string(),
    image: z.string().default(''),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().default(''),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    youtubeId: z.string(),
    thumbnail: z.string().default(''),
  }),
});

export const collections = { episodes, posts, videos };
