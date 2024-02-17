<script>
    export let data;
    console.log(data.category);
</script>

<h1>Category: {data.category}</h1>

<ul>
    {#each data.posts as post}
        {#if post.meta.categories.includes(data.category)}
            <li>
                <h2>
                    <a href={post.path}>
                        {post.meta.title}
                    </a>
                </h2>
                Published on {post.meta.date}
            </li>
        {/if}
    {/each}
</ul>
