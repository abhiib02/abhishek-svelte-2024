<script>
    // @ts-nocheck

    import { page } from "$app/stores";
    import Projects from "$lib/projects.json";
    import Logos from "$lib/techlogo.json";
    let index = parseInt($page.params.id);
    let prev = index ? index - 1 : Projects.length - 1;
    let next = index == Projects.length - 1 ? 0 : index + 1;

    function getLogo(name) {
        Logos.filter((logo) => {
            if (logo.name == name) {
                return logo;
            }
        });
    }
</script>

<nav>
    <ul>
        <li>
            <a target="_self" href="/work/{prev}" class="nav-link heading"
                ><b>←</b></a
            >
        </li>

        <li><a href="/#work" class="nav-link">Back</a></li>

        <li>
            <a target="_self" href="/work/{next}" class="nav-link heading"
                ><b>→</b></a
            >
        </li>
    </ul>
</nav>

<section class="scale-up-center">
    <div class="bg">
        <div
            class="container-grid {Projects[index].Github
                ? 'container-github'
                : 'container-no-github'}"
        >
            <div class="card Project-icon grid-center">
                <div class="grid-center">
                    <img
                        src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={Projects[
                            index
                        ].Link}&size=64"
                        alt=""
                        class="drop-shadow"
                        width="64px"
                    />
                </div>
            </div>
            <div class="card Project-name">
                <h1 class="heading">
                    {Projects[index].Name}
                </h1>
                <br />
                {Projects[index].Type}
            </div>
            <div class="card Project-image">
                <iframe
                    title={Projects[index].Name}
                    src={Projects[index].Link}
                    class="full-hd-iframe"
                    frameborder="0"
                ></iframe>
                {#if !Projects[index].Image.includes("http")}
                    <img
                        loading="lazy"
                        src={"/images/" + Projects[index].Image}
                        alt={Projects[index].Name}
                    />
                {:else}
                    <img
                        loading="lazy"
                        src={Projects[index].Image}
                        alt={Projects[index].Name}
                    />
                {/if}
            </div>

            <a
                class="card Project-link grid-center box-icon"
                target="_blank"
                href={Projects[index].Link}
            >
                <img class="invert icon" src="/icons/link.svg" alt="" />
            </a>
            {#if Projects[index].Github}
                <a
                    target="_blank"
                    href={Projects[index].Github}
                    class="card Github-link grid-center box-icon"
                >
                    <img src="/icons/github.svg" alt="" class="icon" /></a
                >
            {/if}

            <div class="card Project-details">
                <div class="box-wrapper-start">
                    {#each Projects[index].Tech as techItem}
                        <!--<img src={Logos.find((u) => u.name == techItem)} alt="" />-->
                        <div class="box">
                            <img src={"/icons/" + techItem + ".svg"} alt="" />
                        </div>
                    {/each}
                </div>

                <div style="position: absolute; left:10px;bottom:10px;">
                    <div class="flex">
                        <div
                            class="status {Projects[index].Status == 'Online'
                                ? 'success'
                                : 'danger'}"
                        ></div>
                        &nbsp;
                        {Projects[index].Status == "Online"
                            ? "Online"
                            : "Offline"}
                        •&nbsp;
                        {Projects[index].Published}
                    </div>
                </div>
            </div>
            <div class="card Project-desc">
                <h1 class="heading">Information</h1>
                <br />
                {Projects[index].Desc}
                {Projects[index].Info}
            </div>
        </div>
    </div>
</section>

<style>
    section {
        height: 95vh;
    }
    .container-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: var(--gap);
        height: 100%;
        grid-auto-flow: row;
        @media (width < 992px) {
            display: flex;
            flex-direction: column;
        }
    }
    .container-github {
        grid-template-areas:
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-icon Project-name Project-name Project-name Project-name"
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-link Project-name Project-name Project-name Project-name"
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Github-link Project-name Project-name Project-name Project-name"
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-details Project-details Project-details Project-details Project-details"
            "Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-details Project-details Project-details Project-details Project-details"
            "Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-details Project-details Project-details Project-details Project-details";
    }
    .container-no-github {
        grid-template-areas:
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-icon Project-name Project-name Project-name Project-name"
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-link Project-name Project-name Project-name Project-name"
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-link Project-name Project-name Project-name Project-name"
            "Project-image Project-image Project-image Project-image Project-image Project-image Project-image Project-details Project-details Project-details Project-details Project-details"
            "Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-details Project-details Project-details Project-details Project-details"
            "Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-desc Project-details Project-details Project-details Project-details Project-details";
    }

    .Project-name {
        grid-area: Project-name;
    }

    .full-hd-iframe {
        width: 180%;
        height: 180%;
        aspect-ratio: 16 / 9;
        position: absolute;
        scale: 0.555;
        transform-origin: 0 0;
        border: none;
    }

    .Project-image {
        grid-area: Project-image;
        overflow: hidden;
        position: relative;
        padding: 0;
        background-image: var(--url);
        & img {
            object-position: top;
            object-fit: fill;
            width: 100%;
            height: 100%;
        }
    }

    .Project-details {
        position: relative;
        grid-area: Project-details;
        @media (width < 992px) {
            aspect-ratio: 2 / 1;
        }
    }

    .Project-desc {
        grid-area: Project-desc;
        @media (width < 992px) {
            display: none;
        }
    }
    .Project-icon {
        grid-area: Project-icon;
    }
    .Project-link {
        grid-area: Project-link;
    }
    .Github-link {
        grid-area: Github-link;
    }
    nav {
        position: fixed;
        bottom: 0.5rem;
        left: 50%;
        translate: -50%;
        height: 60px;
        background-color: var(--gray-color);
        padding: 0.25rem;
        border-radius: calc(var(--in-brd-rad));
        z-index: 1000;
        & ul {
            width: 100%;
            height: 100%;
            display: flex;
            width: auto;
            gap: 4px;
            & li {
                width: 124px;
                height: inherit;
                border-radius: calc(var(--in2-brd-rad));
                list-style: none;
                background-color: #000;
                color: #fff;
                display: grid;
                place-items: center;
            }
        }
    }
    @media (width < 992px) {
        nav {
            bottom: 0rem;
            width: 100%;
            height: 40px;
        }
        nav ul {
            display: flex;
            justify-content: space-between;
        }
        nav ul li {
            width: 100%;
        }
    }
    .scale-up-center {
        -webkit-animation: scale-up-center 0.4s
            cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>
