<script>
    export let data;
</script>

{#if data.categories.length > 0}
    <aside>
        <h2>Posted in:</h2>
        <ul>
            {#each data.categories as category}
                <li>
                    <a href="/blog/category/{category}">
                        {category}
                    </a>
                </li>
            {/each}
        </ul>
    </aside>
{/if}