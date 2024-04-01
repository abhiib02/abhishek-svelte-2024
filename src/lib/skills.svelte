<script>
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
    const Other = [
        {
            image: "blender.svg",
        },
    ];
</script>

<div class="container">
    <div class="card skill flex-col-between">
        <div class="workIcon">
            <img src="/icons/skill.svg" class="icon" alt="" />
        </div>
        <div class="heading">MY SKILLS</div>
    </div>
    <div class="card skills-1">
        <div class="heading">FRONT END</div>
        <br />
        <div class="box-wrapper-start">
            {#each FrontEndlogos as logo}
                <div class="box">
                    <img src={"/icons/" + logo.image} alt="" />
                </div>
            {/each}
        </div>
    </div>
    <div class="card skills-2">
        <div class="heading">BACK END</div>
        <br />
        <div class="box-wrapper-start">
            {#each BackEndlogos as logo}
                <div class="box">
                    <img src={"/icons/" + logo.image} alt="" />
                </div>
            {/each}
        </div>
    </div>
    <div class="card skills-3">
        <div class="heading">EXTRA SKILL</div>
        <br />
        <div class="box-wrapper-start">
            {#each Other as logo}
                <div class="box">
                    <img src={"/icons/" + logo.image} alt="" />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: var(--small-gap);
        grid-auto-flow: row;
        grid-template-areas:
            "skill skill skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1"
            "skill skill skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1 skills-1"
            "skill skill skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2"
            "skill skill skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2 skills-2"
            "skill skill skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3"
            "skill skill skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3 skills-3";
    }

    .skill {
        grid-area: skill;
    }

    .skills-1 {
        grid-area: skills-1;
    }

    .skills-2 {
        grid-area: skills-2;
    }

    .skills-3 {
        grid-area: skills-3;
    }
</style>
