<script>
    function handleClick() {
        console.log("you pressed me");
    }
</script>

<button
    on:click={handleClick}
    data-sly-use.button="com.adobe.cq.wcm.core.components.models.Button"
    data-sly-use.iconTemplate="icon.html"
    data-sly-element="${`{button.buttonLink.valid ? 'a' : 'button'}`}"
    type="${`{button.buttonLink.valid ? '' : 'button'}`}"
    id="${`{button.id}`}"
    class="cmp-button"
    data-sly-attribute="${`{button.buttonLink.htmlAttributes}`}"
    aria-label="${`{button.accessibilityLabel}`}"
    data-cmp-clickable="${`{button.data ? true : false}`}"
    data-cmp-data-layer="${`{button.data.json}`}"
>
    <sly data-sly-call="${`{iconTemplate.icon @ icon=button.icon}`}" />
    <span data-sly-test="${`{button.text}`}" class="cmp-button__text">
        "$button.text"
    </span>
</button>

<style>
    .cmp-button {
        background-color: red;
        color: white;
    }
</style>
