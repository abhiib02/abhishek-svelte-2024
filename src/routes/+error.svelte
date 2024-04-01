<section>
<div class="bg">
    <div class="container ">
        
        <div class="card video-bg relative grid-center">
            <video id="err_vid" autoplay muted loop>
                <source src="https://cdn.pixabay.com/video/2022/10/10/134308-759254371_large.mp4" type="video/mp4">
            </video>
            <h1 class="heading" style="z-index:1;">Error <span class="text-theme">404</span></h1>
        </div>
  </div>
</div>
</section>
<style>
    .container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: var(--gap);
  height:100%;
  grid-auto-flow: row;
  grid-template-areas:
    "video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg"
    "video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg"
    "video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg"
    "video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg"
    "video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg"
    "video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg video-bg";
}
.relative{
    position:relative;
}
#err_vid{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:auto;
}
.video-bg { grid-area: video-bg; 
    overflow:hidden;
}
</style>