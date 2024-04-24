<div class="container">
    <div class="card About flex-col-between">
        <div class="">
            <img src="/icons/user.svg" class="icon" alt="" />
        </div>
        <div class="heading">ABOUT ME</div>
    </div>
    <div class="card About-details flex-col-between">
        <div class="heading">Hello,</div>
        <div style="">
            <p class="desc">
                I am <span class="text-theme bold" style="--delay:1000;"
                    >Abhishek Bhardwaj
                </span><br /><br />
                A Tech enthusiast who want to know about new technologies but fond
                of<br /><br />
                <span class="text-theme bold hue-rotate" style="--delay:1000;"
                    >Website Designing and Development</span
                ><br /><br />
                I also carry
                <br /><br /><span
                    class="text-theme bold hue-rotate"
                    style="--delay:2000;">Photo shop</span
                >,
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
    <div class="card About-desc hue-rotate flex-col-between">
        <div class="heading">About Portfolio</div>
        <div class="desc">
            I have made this portfolio for year 2024 . i have used<br />
            <br /><span class="text-theme bold hue-rotate" style="--delay:5000;"
                >bento grid design</span
            >
            and
            <span class="text-theme bold hue-rotate" style="--delay:6000;"
                >scroll panel effect</span
            ><br /><br />
            for this portfolio to keep up with the trend as
            <span class="text-theme bold hue-rotate" style="--delay:7000;"
                >2024</span
            >
            started , i have seen lots of new designs emerged in 2024 and<br />
            <br /><span class="text-theme bold hue-rotate" style="--delay:7000;"
                >the most dominant design</span
            > <br /><br />among all design is bento grid and that is why i used
            this design to make my portfolio for 2024.
        </div>
    </div>
    <div class="card About-image"></div>
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
            "About About About-desc About-desc About-desc About-desc About-desc About-image About-image About-image About-image About-image"
            "About About About-desc About-desc About-desc About-desc About-desc About-image About-image About-image About-image About-image"
            "About About About-desc About-desc About-desc About-desc About-desc About-image About-image About-image About-image About-image";
        @media (width < 992px) {
            display: flex;
            flex-direction: column;
        }
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
        @media (width < 992px) {
            aspect-ratio: 1/1;
        }
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
