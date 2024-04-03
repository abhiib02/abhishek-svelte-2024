<script>
    import Slider from "$lib/slider.svelte";
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

            <div class="heading name">ABHISHEK<br />BHARDWAJ</div>
            <div class="work-profile desc">Web Designer & Developer</div>
        </div>
    </div>
    <div class="card Intro-card no-padding">
        <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@1.0.91/build/spline-viewer.js"
        ></script>
        <spline-viewer
            url="https://prod.spline.design/lY1dnyCa0tKDue9l/scene.splinecode"
        ></spline-viewer>
        <!-- <video id="myVideo" autoplay muted loop>
                    <source
                        src="https://cdn.pixabay.com/video/2019/02/13/21368-317182818_large.mp4"
                        src2=" https://bhardwaj.netlify.app/vdo.webm"
                        type="video/webm"
                    />
                </video>-->
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
