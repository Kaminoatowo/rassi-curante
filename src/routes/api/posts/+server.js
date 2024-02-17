import { fetchMarkdownPosts } from "$lib/utils";
import { json } from '@sveltejs/kit';
// json is a helper function to return a JSON response with the correct headers

export const GET = async () => {
    const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });
    // sort posts by date

    return json(sortedPosts);
};