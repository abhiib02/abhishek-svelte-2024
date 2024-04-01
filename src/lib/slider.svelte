<script>
    import Projects from "$lib/projects.json";
    import SlideCard from "$lib/slide-card.svelte";
</script>

<div class="flex">
    {#each Projects as Project}
        <SlideCard project={Project} />
    {/each}
    {#each Projects as Project2}
        <SlideCard project={Project2} />
    {/each}
</div>

<style>
    .flex {
        display: flex;
        height: 100%;
        justify-content: start;
        gap: calc(var(--gap));
        width: min-content;
        overflow: clip;
        animation: side 240s linear infinite;
        animation-direction: var(--direction);
        &:hover {
            animation-play-state: paused;
        }
    }
    @keyframes side {
        to {
            transform: translate(calc(-100%));
        }
    }
</style>
