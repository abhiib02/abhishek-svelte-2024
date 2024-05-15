<script>
    import Slider from "$lib/slider.svelte";
    import { onMount } from "svelte";
    const FrontEndlogos = [
        {
            image: "html.svg",
        },
        {
            image: "css.svg",
        },
        {
            image: "scss.svg",
        },
        {
            image: "bootstrap.svg",
        },
        {
            image: "bulma.svg",
        },
        {
            image: "materialize.svg",
        },
        {
            image: "js.svg",
        },
        {
            image: "jquery.svg",
        },
        {
            image: "vuejs.svg",
        },
        {
            image: "svelte.svg",
        },
        {
            image: "figma.svg",
        },
    ];
    const BackEndlogos = [
        {
            image: "php.svg",
        },
        {
            image: "ci.svg",
        },
        {
            image: "laravel.svg",
        },
        {
            image: "mysql.svg",
        },
        {
            image: "cpanel.svg",
        },
    ];
let hasGPU;
    function getGPUInfo() {
        var canvas = document.createElement("canvas");
        var gl =
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");

        if (!gl) {
            return "WebGL not supported";
        }

        var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
            var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            return { vendor: vendor, renderer: renderer };
        } else {
            return "WEBGL_debug_renderer_info not supported";
        }
    }
    function isDedicatedGPU(vendor, renderer) {
        // Simple heuristic to infer dedicated GPU
        // Common vendors for dedicated GPUs are NVIDIA, AMD, etc.
        // Note: This is not foolproof and may not cover all cases
        var dedicatedVendors = ["NVIDIA", "AMD", "ATI"];
        return dedicatedVendors.some((v) =>
            vendor.toUpperCase().includes(v.toUpperCase()),
        );
    }
    function runGPUCheck() {
        var gpuInfo = getGPUInfo();
        //var infoElement = document.getElementById('gpu-info');
        if (typeof gpuInfo === "string") {
            //infoElement.textContent = gpuInfo;
        } else {
            var vendor = gpuInfo.vendor;
            var renderer = gpuInfo.renderer;
            var isDedicated = isDedicatedGPU(vendor, renderer);
            return isDedicated;
        }
    }
    onMount(() => {
        hasGPU = runGPUCheck();
    });
</script>

<div class="hero-section nav-margin-vh">
    <div class="card Profile-card flex-col-between">
        <div class="logo">
            <img src="../icons/logo.svg" class="icon" alt="" />
        </div>
        <div>
            <div>
                <span>
                    <a target="_blank" href="https://github.com/abhiib02"
                        ><img
                            src="../icons/github.svg"
                            alt=""
                            class="social-icon"
                        />
                    </a>
                </span>
                <span
                    ><a target="_blank" href="https://twitter.com/Abhiib02"
                        ><img
                            src="../icons/x.svg"
                            alt=""
                            class="social-icon"
                        /></a
                    >
                </span>
                <span>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/abhiib02/"
                    >
                        <img
                            src="../icons/insta.svg"
                            alt=""
                            class="social-icon"
                        /></a
                    >
                </span>
                <span>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/abhishek-bhardwaj-191b9784/"
                    >
                        <img
                            src="../icons/linkedin.svg"
                            alt=""
                            class="social-icon"
                        />
                    </a>
                </span>
                <span>
                    <a
                        target="_blank"
                        href="https://codepen.io/abhishek-bhardwaj"
                    >
                        <img
                            src="../icons/codepen.svg"
                            alt=""
                            class="social-icon"
                        />
                    </a>
                </span>
            </div>
            <br />
            <div class="heading name">ABHISHEK<br />BHARDWAJ</div>
            <div class="work-profile desc">Web Designer & Developer</div>
        </div>
    </div>
    <div class="card Intro-card no-padding">
         {#if hasGPU == true}
            <script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.0.91/build/spline-viewer.js"
            ></script>
            <spline-viewer
                url="https://prod.spline.design/lY1dnyCa0tKDue9l/scene.splinecode"
            ></spline-viewer>
        {/if}
    </div>

    <div class="card hover be-card flex-col-between">
        <div class="heading text-theme text-dark">BACK END</div>
        <div class="box-wrapper-start">
            {#each BackEndlogos as logo}
                <div class="box">
                    <img src={"/icons/" + logo.image} alt="" />
                </div>
            {/each}
        </div>
    </div>
    <div class="card fe-card flex-col-between">
        <div class="heading text-theme">FRONT END</div>
        <div class="box-wrapper-start">
            {#each FrontEndlogos as logo}
                <div class="box">
                    <img src={"/icons/" + logo.image} alt="" />
                </div>
            {/each}
        </div>
    </div>

    <div class="card work-card flex-col-between">
        <div class="workIcon">
            <img src="../icons/work.svg" class="icon" alt="" />
        </div>
        <div class="heading">MY WORK</div>
    </div>
    <div class="slider-wrapper">
        <Slider></Slider>
    </div>
</div>

<style>
    .hero-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: var(--gap);
        grid-auto-flow: row;
        @media (width < 992px) {
            display: flex;
            flex-direction: column;
        }
    }
    .hover:hover ~ .fe-card {
        opacity: 0;
        translate: 0 -100%;
    }
    .fe-card {
        grid-area: 1 / 9 / 4 / 13;
        transition: all 0.3s ease;
        transform-origin: top;
        transform-origin: top;
        &:hover {
            opacity: 0;
            translate: 0 -100%;
        }
        @media (width < 992px) {
            &:hover {
                opacity: 1;
                translate: 0 0%;
            }
        }
    }
    .be-card {
        grid-area: 1 / 9 / 4 / 13;
        background-color: var(--theme-color);
        transition: all 0.3s ease;
    }

    .Profile-card {
        grid-area: 1 / 1 / 4 / 3;
    }
    .Intro-card {
        grid-area: 1 / 3 / 4 / 9;
        overflow: hidden;
        background-image: url("https://raw.githubusercontent.com/abhiib02/PortfolioSvelte/main/static/logo2.svg");
        background-size: 70% cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .work-card {
        grid-area: 4 / 1 / 7 / 3;
        @media (width < 992px) {
            display: none;
        }
    }
    .slider-wrapper {
        grid-area: 4 / 3 / 7 / 13;
        overflow: clip;
        border-radius: calc(var(--in-brd-rad));
    }
</style>
