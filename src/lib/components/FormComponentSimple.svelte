<script>
    export let label;
    export let type;
    export let value = '';
    export let classString = '';
    export let labelClass = '';
    export let inputClass = '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function typeAction(node) {
        node.type = type;
    }
</script>

<div class="{classString}">
    <label for="{label}" class="{labelClass}">{capitalizeFirstLetter(label)} </label>
    <input use:typeAction id="{label}" bind:value required class="text-black rounded-xl border-2 border-solid border-ternary {inputClass}"><hr class="border-0 my-2">
</div>