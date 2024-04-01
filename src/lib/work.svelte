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
    <div class="projects">
        {#each Projects as Project, index}
            {#if Project.Status == "Online"}
                <a
                    href="/work/{index}"
                    class="card project flex"
                    style="--url:url('{Project.Image}');--delay:{index}"
                >
                    <div class="grid-center square-by-height">
                        <img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={Project.Link}&size=64"
                            alt=""
                            class="blended"
                            width="32"
                        />
                    </div>
                    <div
                        class="flex-col-between"
                        style="padding: var(--small-gap);"
                    >
                        <p>{Project.Name}</p>
                        <!--<div class="flex">
                             <div
                                class="status {Project.Status == 'Online'
                                    ? 'success'
                                    : 'danger'}"
                            ></div>
                            &nbsp;
                            {Project.Status == "Online" ? "Online" : "Offline"}
                            •&nbsp;
                            {Project.Published}
                        </div>-->
                    </div>
                </a>
            {/if}
        {/each}
    </div>
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
    }

    .work {
        grid-area: work;
    }

    .projects {
        grid-area: projects;
        display: flex;
        flex-wrap: wrap;
        gap: var(--small-gap);
        position: relative;
        align-content: baseline;
    }
    .project {
        height: min-content;
        flex-grow: 1;
        transition: all 0.3s;
        &:hover {
            border: 1px solid var(--theme-color);
        }
        @media (width < 992px) {
            & {
                width: 100%;
            }
        }
    }
    a {
        text-decoration: none;
    }
</style>
