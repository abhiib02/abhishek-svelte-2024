<script>
    import { onMount } from "svelte";
    import Projects from "$lib/projects.json";
    onMount(() => {});
</script>

<div class="container">
    <div class="card work flex-col-between">
        <div class="workIcon">
            <img src="/icons/work.svg" class="icon" alt="" />
        </div>
        <div class="heading">MY WORK</div>
    </div>

    <ul class="projects">
        {#each Projects as Project, index}
            {#if Project.Status == "Online"}
                <li>
                    <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url={Project.Link}&amp;size=64" alt="" class="drop-shadow" width="32">
                    <a href="/work/{index}" class="" style="--url:url('{Project.Image}');--delay:{index}">
                    <span>{Project.Name.toLowerCase()}</span>
                    <span>{Project.Status == "Online" ? "Online" : "Offline"}</span>
                    <span>Published in {Project.Published}</span>
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: var(--gap);
        grid-auto-flow: row;

        grid-template-areas:
            "work work projects projects projects projects projects projects projects projects projects projects"
            "work work projects projects projects projects projects projects projects projects projects projects"
            "work work projects projects projects projects projects projects projects projects projects projects"
            "work work projects projects projects projects projects projects projects projects projects projects"
            "work work projects projects projects projects projects projects projects projects projects projects"
            "work work projects projects projects projects projects projects projects projects projects projects";
        @media (width < 992px) {
            display: flex;
            flex-direction: column;
        }
    }

    .work {
        grid-area: work;
    }

    .projects {
        width: 100%;
        grid-area: projects;
        display: flex;
        align-content: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--small-gap);
        position: relative;
    }
    .project {
        width:10%;
        height: min-content;
        flex-grow: 1;
        font-size: 1rem;
        transition: all 0.3s;
        &:hover {
            /*background-color: var(--theme-hover);*/

            color: #fff;
            box-shadow: inset 0 var(--small-gap) 1px var(--theme-color);
            /*background: linear-gradient(
                90deg,
                var(--theme-color) 0%,
                var(--theme-color) var(--small-gap),
                var(--bg) var(--small-gap)
            );*/
        }
    }
    #workname {
        text-transform: capitalize;
        text-align: center;
        font-size: 0.5rem;
        @media (width < 992px) {
            display: none;
        }
    }
    a {
        text-decoration: none;
    }
</style>
