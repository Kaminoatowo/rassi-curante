<script>
    export let title, window;
</script>

<hr class="border-1 border-primary-dark w-full mx-auto">
<div class="flex justify-between py-2">
    <h2>Share this post</h2>
    <ul class="flex flex-row gap-4 my-auto">
        <li>
            <a href="https://twitter.com/intent/tweet?text={title}&url={window.location.href}">
                Twitter
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/sharer/sharer.php?u={window.location.href}">
                Facebook
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url={window.location.href}&title={title}">
                LinkedIn
            </a>
        </li>
    </ul>
</div>