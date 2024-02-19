<script>
    export let data;
    const uniqueCategories = [...new Set(data.posts.map(post => post.meta.categories).flat())];
</script>

<h1>Blog</h1>

<ul>
    {#each data.posts as post}
        <li>
            <h2>
                <span class="flex flex-row">
                    <a href={post.path} class="w-1/5 m-3">
                        <img src={post.meta.picture} alt={post.meta.title} class="rounded-xl border-4 border-solid border-ternary" />
                    </a>
                    <span>
                        <a href="{post.path}">
                            {post.meta.title}
                        </a>
                        <br />
                        Published on {post.meta.date}
                    </span>
                </span>
            </h2>
            
        </li>
    {/each}
</ul>

<h2>Categories</h2>

<ul>
    {#each uniqueCategories as cat}
        <li>
            <h3>
                <a href="/blog/category/{cat}">{cat}</a>
            </h3>
        </li>
    {/each}
</ul>

<a href="/admin/write" class="btn">New Post</a>
