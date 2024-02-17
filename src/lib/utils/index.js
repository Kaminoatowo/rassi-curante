export const fetchMarkdownPosts = async () => {
    // Vite function to import all markdown files in a directory
    // through matching the glob pattern
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
    // the above function returns an object with the file path as key
    // and a function to import the file as value (the resolver)
    // in Javascript terms: { [key: string]: () => Promise<{ default: any, metadata: any }> }
    // the resulting function returns a promise with the default export and the metadata

    // we need to convert the object to an array to be able to use Promise.all
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);
            // this above is because we know the path is always /src/routes{}.md
            // so we can slice the first 11 characters and the last 3 to get the path

            // !! one might want to use a regex to get the path instead of slicing
            // e.g. path.match(/(?<=routes\/).*(?=\.md)/)[0]

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return allPosts;
};