<script>
    import Hero from "$lib/hero.svelte";
    import Work from "$lib/work.svelte";
    import Skills from "$lib/skills.svelte";
    import About from "$lib/about.svelte";
    import Contact from "$lib/contact.svelte";
</script>

<div id="home"></div>
<section>
    <div class="bg">
        <Hero></Hero>
    </div>
</section>
<div id="work"></div>
<section id="">
    <div class="bg">
        <Work></Work>
    </div>
</section>
<div id="skills"></div>
<section id="">
    <div class="bg">
        <Skills></Skills>
    </div>
</section>
<div id="about"></div>
<section>
    <div class="bg">
        <About></About>
    </div>
</section>
<div id="contact"></div>
<section id="">
    <div class="bg">
        <Contact></Contact>
    </div>
</section>
