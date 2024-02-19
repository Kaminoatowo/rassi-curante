<script>
    export let label;
    export let type;
    export let value = '';
    export let classString = '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function typeAction(node) {
        node.type = type;
    }
</script>

<div class="{classString}">
    <label for="{label}">{capitalizeFirstLetter(label)}: </label>
    <input use:typeAction id="{label}" bind:value required class="text-black rounded-xl border-2 border-solid border-ternary"><hr class="border-0 my-2">
</div>