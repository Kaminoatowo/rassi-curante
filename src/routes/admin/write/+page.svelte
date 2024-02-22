<script>
    import FormComponentSimple from '../../../lib/components/FormComponentSimple.svelte';
    export let data;
    const uniqueCategories = [...new Set(data.posts.map(post => post.meta.categories).flat())];

    let title = "";
    let date = "";
    let picture = "";
    let categories = [];
    
    function handleSubmit() {
        // Handle form submission here
    }
</script>

<h1 class="flex justify-center m-2">Write a new post</h1>

<form on:submit={handleSubmit} class="m-3 p-2 bg-secondary/80 rounded-xl border-2 border-solid border-ternary">
    
    <FormComponentSimple label="title" type="text" classString="flex justify-center"/>

    <FormComponentSimple label="date" type="date"/>

    <FormComponentSimple label="picture" type="file"/>
    
    <label for="categories">Categories:</label>
    <select id="categories" bind:value={categories} required class="text-black rounded-xl border-2 border-solid border-ternary">
        {#each uniqueCategories as cat}
            <option value="{cat}">{cat}</option>
        {/each}
    </select><hr class="border-0 my-2">

    <label for="content">Content:</label>
    <textarea id="content" required class="text-black rounded-xl border-2 border-solid border-ternary"></textarea><hr class="border-0 my-2">

    <button type="submit">Submit</button>
</form>

<style>
    select, option {
      color: black;
    }

  </style>