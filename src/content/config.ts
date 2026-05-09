import { defineCollection, z } from 'astro:content';

const kueCollection = defineCollection({
  type: 'content',
  schema: z.object({
    datum: z.string(),
    titel: z.string(),
    kategorie: z.enum([
      'BIO',
      'SCI',
      'TEC',
      'LSC',
      'PHY',
      'PHI',  // Philosophy
      'ARC',
      'HIS',
      'GEO',
      'PSY',
      'SOC',
      'LNG',
      'ECO',
      'ORG',
      'OBS',
      'FND',
      'OPS',
      'MET',
    ]),
    marker: z.array(z.enum(['R', 'T', 'S', 'P', 'H', 'I'])),
    version: z.string(),
    status: z.string(),
    sprache: z.enum(['DE', 'EN']),
    keywords: z.array(z.string()),
    kurator: z.string(),
    signatur: z.string(),
  }),
});

export const collections = {
  kue: kueCollection,
};
