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
<table style="width: 100%;border-collapse: collapse;">
        {#each Projects as Project, index}
            {#if Project.Status == "Online"}
                <tr class="project-list">
                    <td><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url={Project.Link}&amp;size=64" alt="" class="drop-shadow" width="32"></td>
                    <td><a href="/work/{index}" class="" style="--url:url('{Project.Image}');--delay:{index}"><span>{Project.Name.toLowerCase()}</span></a></td>
                    <td><span>Currently {Project.Status == "Online" ? "Online" : "Offline"}</span></td>
                    <td><span>Published in {Project.Published}</span></td>
                    <td><a class="list-btn"  href="/work/{index}">Open</a></td>
                </tr>
            {/if}
        {/each}
    </table>
</div>
</div>

<style lang='scss'>
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

.list-btn{
    padding-inline:1rem:
    width:auto;
    height:50px;
    background-color: var(--theme-color);
    border: 1px solid #333333;
    border-radius: var(--in2-brd-rad);
}
    .projects {
        width: 100%;
        height:100%;
        grid-area: projects;
        gap: var(--small-gap);
        position: relative;
        overflow:auto;
        overscroll-behavior: auto;
    }
.project-list{
    align-content:center;
    padding: 0.5rem;
    border-bottom: 1px solid #fff1;
    color:#fff;
 td {color:#fff;}
 a {text-transform:capitalize; color:#fff;}
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
