import type { CollectionEntry } from "astro:content";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[])
{
    return twMerge(clsx(inputs))
}

export function sortByDate(a: CollectionEntry<"posts">, b: CollectionEntry<"posts">)
{
    return b.data.date.getTime() - a.data.date.getTime()
}

export function createPagination(numberOfPages: number, currentPage: number)
{
    if (numberOfPages < 7)
        return Array.from({length: numberOfPages}, (_, i) => i + 1)
    if (currentPage < 4)
        return [1, 2 , 3, 4, '..', numberOfPages - 1, numberOfPages]
    if (currentPage > numberOfPages - 3)
        return [1,2, '..', numberOfPages - 3, numberOfPages - 2, numberOfPages - 1, numberOfPages]
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '..', numberOfPages]
}

export function generateHref(url: string, page: number)
{   
    return page === 1 ? url : `${url}${page}`
}