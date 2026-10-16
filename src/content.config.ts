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

const reviews = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    quote: z.string(),
    author: z.string(),
    source: z.string().default('Apple Podcasts'),
    rating: z.number().int().min(1).max(5).default(5),
    date: z.string(),
  }),
});

export const collections = { episodes, posts, videos, reviews };
