<div class="container">
    <div class="card About flex-col-between">
        <div class="">
            <img src="/icons/user.svg" class="icon" alt="" />
        </div>
        <div class="heading">ABOUT ME</div>
    </div>
    <div class="card About-details grid-center hue-rotate">
        <img src="/icons/logo.svg" width="50%" alt="" />
    </div>
    <div class="card About-image"></div>
    <div class="card About-desc flex-col-between">
        <div class="heading">Hello,</div>
        <div style="">
            <p class="desc">
                I am Abhishek Bhardwaj A Tech enthusiast who want to know about
                new technologies but fond of <span
                    class="text-theme bold hue-rotate"
                    style="--delay:1000;"
                    >Website Designing and Development</span
                >
                I also carry
                <span class="text-theme bold hue-rotate" style="--delay:2000;"
                    >Photo shop</span
                >
                <span class="text-theme bold hue-rotate" style="--delay:3000;"
                    >Figma</span
                >
                and
                <span class="text-theme bold hue-rotate" style="--delay:4000;"
                    >Blender</span
                > Skills
            </p>
        </div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: var(--gap);
        height: 100%;
        grid-auto-flow: row;
        grid-template-areas:
            "About About About-details About-details About-details About-details About-details About-image About-image About-image About-image About-image"
            "About About About-details About-details About-details About-details About-details About-image About-image About-image About-image About-image"
            "About About About-details About-details About-details About-details About-details About-image About-image About-image About-image About-image"
            "About About About-details About-details About-details About-details About-details About-image About-image About-image About-image About-image"
            "About About About-desc About-desc About-desc About-desc About-desc About-image About-image About-image About-image About-image"
            "About About About-desc About-desc About-desc About-desc About-desc About-image About-image About-image About-image About-image";
    }

    .About {
        grid-area: About;
    }

    .About-image {
        grid-area: About-image;
        background-image: url("/image.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right bottom;
    }

    .About-details {
        grid-area: About-details;
    }

    .About-desc {
        grid-area: About-desc;
    }

    .About {
        grid-area: About;
    }
</style>
