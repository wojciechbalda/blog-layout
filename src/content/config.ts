import {z, defineCollection, reference } from 'astro:content'

const postsCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>  z.object({
        title: z.string(),
        description: z.string().max(70),
        tags: z.array(z.string()),
        date: z.date(),
        image: image(),
        relatedPosts: z.array(reference('posts')) 
    })
})

export const collections = {
    'posts': postsCollection
}