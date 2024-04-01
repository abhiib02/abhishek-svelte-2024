<script>
    // @ts-nocheck

    export let project;
</script>

<div class="project-card">
    <div class="image">
        {#if !project.Image.includes("http")}
            <img
                loading="lazy"
                src={"/images/" + project.Image}
                alt={project.Name}
            />
        {:else}
            <img loading="lazy" src={project.Image} alt={project.Name} />
        {/if}
    </div>
    <div class="data flex-col-between">
        <div>
            <p class="title">{project.Name}</p>
            <p class="desc">{project.Type}</p>
        </div>
        <div>
            <p class="published">Published on {project.Published}</p>
            <br />
            <div class="flex">
                <p
                    class="status {project.Status == 'Online'
                        ? 'success'
                        : 'danger'}"
                ></p>
                &nbsp;
                {project.Status == "Online" ? "Online" : "Offline"}
            </div>
        </div>
    </div>
    <a target="_blank" href={project.Link} class="link-button grid-center"
        ><img src="/icons/link.svg" alt="" /></a
    >
</div>

<style>
    .project-card {
        position: relative;
        background: var(--bg);
        border-radius: var(--in-brd-rad);
        border: 1px solid var(--border-color);
        color: #fff;
        aspect-ratio: 143/100;
        width: 298px;
        transition: all 0.3s;
        overflow: hidden;
        & .image {
            width: 100%;
            height: 50%;
            overflow: clip;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        & .link-button {
            position: absolute;
            bottom: var(--main-padding);
            right: var(--main-padding);
            width: 50px;
            aspect-ratio: 1/1;
            background-color: var(--theme-color);
            border: 1px solid #333333;
            border-radius: var(--in2-brd-rad);
            & img {
                width: 50%;
                aspect-ratio: 1;
            }
        }
        & .data {
            padding: var(--main-padding);
            color: #fff;
            height: calc(50% - 40px);
            padding-inline: 20px;
            & .title {
                font-weight: bold;
                text-transform: capitalize;
            }
            & .desc {
                color: #888;
                font-size: 0.9rem;
            }
            & .status {
                margin-block: auto;
                height: 10px;
                width: 30px;
                border-radius: var(--in-brd-rad);
            }
        }
    }
    .success {
        background: var(--success);
    }
    .danger {
        background: var(--danger);
    }
</style>
