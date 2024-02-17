<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import '$lib/styles/style.css';
    import "../app.css";
    import { fade } from 'svelte/transition';

    export let data;
</script>

<body class="bg-leaves bg-cover text-white text-xs sm:text-base">
  <Header />

  {#key data.currentRoute}
    <main class="bg-component mb-0" in:fade={{ duration: 150, delay: 150}} out:fade={{ duration:150}}>
      <slot></slot>
    </main> 
  {/key}
  
  <Footer />
</body>
