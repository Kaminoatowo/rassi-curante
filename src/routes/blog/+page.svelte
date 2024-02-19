<script>
    export let data;
    const uniqueCategories = [...new Set(data.posts.map(post => post.meta.categories).flat())];
</script>

<head>
    <title>Blog</title>
</head>

<h1>Blog</h1>


<div class="columns-3 m-2 justify-center">
    {#each data.posts as post}
            <span class="flex flex-col">
                <div class="bg-secondary/80 my-2 flex flex-col">
                    <a href={post.path} class="m-3 flex justify-center">
                        <img src={post.meta.picture} alt={post.meta.title} class="w-48 h-32 rounded-xl border-2 border-solid border-ternary" />
                    </a>
                    <span class="mx-auto">
                        <a href="{post.path}">
                            {post.meta.title}
                        </a>
                        <br/>
                        Published on {post.meta.date}
                    </span>
                </div>
            </span>
    {/each}
</div>


<hr class="border-1 border-black w-full mx-auto">

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

<a href="/admin/write" class="btn">New post</a>
