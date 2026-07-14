import { defineCollection, z } from 'astro:content';

const kgReferenceSchema = z.object({
  entityIds: z.array(z.string()).default([]),
  knowledgeDomainIds: z.array(z.string()).default([]),
  prerequisiteIds: z.array(z.string()).default([]),
  supersedes: z.array(z.string()).default([]),
}).optional();

const kueCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Existing public metadata. Kept for backwards compatibility.
    datum: z.string(),
    titel: z.string(),
    kategorie: z.enum([
      'BIO', 'SCI', 'TEC', 'LSC', 'PHY', 'PHI', 'ARC', 'HIS', 'GEO',
      'PSY', 'SOC', 'LNG', 'ECO', 'ORG', 'OBS', 'FND', 'OPS', 'MET',
    ]),
    marker: z.array(z.enum(['R', 'T', 'S', 'P', 'H', 'I'])),
    version: z.string(),
    status: z.string(),
    sprache: z.enum(['DE', 'EN']),
    keywords: z.array(z.string()),
    kurator: z.string(),
    signatur: z.string(),

    // ECO-ARC-0007 migration fields. Optional until legacy documents are migrated.
    id: z.string().regex(/^DOC:KUE:/).optional(),
    title: z.string().optional(),
    language: z.enum(['DE', 'EN']).optional(),
    documentType: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    public: z.boolean().optional(),
    kg: kgReferenceSchema,
  }),
});

export const collections = {
  kue: kueCollection,
};
