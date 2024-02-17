<script>
    import PostedIn from '../../../lib/components/PostedIn.svelte';
    import SharePost from '../../../lib/components/SharePost.svelte';
    export let data;
    const { title, date, picture, categories, Content } = data;
</script>

<svelte:head>
    <title>My blog - {title}</title>
    <meta property="og:title" content="{title}" />
</svelte:head>

<article>
    <div class="flex justify-between py-2">
        <a href="/blog" class="hover:text-primary-dark">
            &larr; Back to blog
        </a>
        <!--a href="../rss.xml" class="hover:text-primary-dark">
            RSS
        </!--a-->
    </div>
    <hr class="border-1 border-primary-dark w-full mx-auto my-2">
    
    <div class="flex flex-row">
        <img src="{picture}" alt="{title}" width="50%"/>
        <div class="px-4">
            <h1 class="my-5">{title}</h1>
            <p>Published: {date}</p>
            <Content />
        </div>
    </div>
    <PostedIn {data} />
    <!--SharePost {title} {window}/-->
</article>