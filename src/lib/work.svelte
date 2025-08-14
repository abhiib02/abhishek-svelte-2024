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
                    class="card project grid-center"
                    style="--url:url('{Project.Image}');--delay:{index}"
                >
                    <div class="grid-center">
                        <img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={Project.Link}&size=64"
                            alt=""
                            class="drop-shadow"
                            width="32"
                        />

                        <p id="workname">
                            <br />{Project.Name.toLowerCase()}
                        </p>
                    </div>

                    <!--
                        
                       
                    <p>{Project.Name}</p>
                        <div
                        id="workname"
                        class="flex-col-between"
                        style="padding: var(--small-gap);"
                    >
                       
                             <p>{Project.Name}</p>
                            <div class="flex">
                             <div
                                class="status {Project.Status == 'Online'
                                    ? 'success'
                                    : 'danger'}"
                            ></div>
                            &nbsp;
                            {Project.Status == "Online" ? "Online" : "Offline"}
                            •&nbsp;
                            {Project.Published}
                        </div>
                    </div>-->
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
        flex-wrap: wrap;
        gap: var(--small-gap);
        position: relative;
    }
    .project {
        width: clamp(100px, 20%, 200px);
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
        @media (width < 992px) {
            display: none;
        }
    }
    a {
        text-decoration: none;
    }
</style>
