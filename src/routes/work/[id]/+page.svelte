<script>
    // @ts-nocheck
    import { onMount } from "svelte";
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

    function frameLoader() {
        // Query the elements
        const iframeEle = document.getElementById("web-frame");
        const loadingEle = document.getElementById("loading");
        const Image = document.getElementById("pro-image");

        iframeEle.addEventListener("load", function () {
            // Hide the loading indicator
            loadingEle.style.display = "none";
            Image.style.display = "none";
            // Bring the iframe back
            iframeEle.style.opacity = 1;
        });
    }

    onMount(() => {
        frameLoader();
    });
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
            <div class="card Project-image relative">
                <div id="loading" class="absolute"></div>
                <iframe
                    title={Projects[index].Name}
                    src={Projects[index].Link}
                    class="full-hd-iframe"
                    frameborder="0"
                    id="web-frame"
                ></iframe>
                {#if !Projects[index].Image.includes("http")}
                    <img
                        id="pro-image"
                        loading="lazy"
                        src={"/images/" + Projects[index].Image}
                        alt={Projects[index].Name}
                    />
                {:else}
                    <img
                        id="pro-image"
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
    #loading {
        width: 50px;
        bottom: var(--gap);
        left: var(--gap);
        height: 50px;
        background-size: contain;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23FF6B00" stroke="%23FF6B00" stroke-width="15" width="30" height="30" x="25" y="50"><animate attributeName="y" calcMode="spline" dur="1" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect><rect fill="%23FF6B00" stroke="%23FF6B00" stroke-width="15" width="30" height="30" x="85" y="50"><animate attributeName="y" calcMode="spline" dur="1" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect><rect fill="%23FF6B00" stroke="%23FF6B00" stroke-width="15" width="30" height="30" x="145" y="50"><animate attributeName="y" calcMode="spline" dur="1" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect></svg>');
        z-index: 1000;
    }
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
