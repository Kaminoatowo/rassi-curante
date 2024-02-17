<script>
    import Title from "./Title.svelte";
    import Navbar from "./Navbar.svelte";
    export const title = "Rassi.curante";
</script>

<header class="text-white m-0 font-bold truncate">
    <h1 class="m-5 h-5">
        <a href="/" class="text-white">
            <Title {title} color="text-slate-800" x="ml-0.5" y="mt-0.5" z="z-10"/>
            <Title {title} color="text-black" x="ml-1" y="mt-1" z="z-10"/>
            <Title {title} />
        </a>
    </h1>

    
    <Navbar />
    <hr class="border-1 border-white w-full mx-auto my-5">
</header>
