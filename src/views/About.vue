<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Bjorn Brutin</strong>,a former Digital Arts and Entertainment Student from the HOWEST University of Applied Sciences, where I Studied in Game Development.<br/>
        I also got a bit of experience working in different industry's, from general tool development to games. <br/>
        Now im looking to expand my skills in all that is related into Programming, from working in and on video games, and there engines, to software development that gets used worldwide.<br/>
      </div>

      <div style="margin-top: 20px;">I've worked on a <router-link to="/game-projects">couple of games</router-link>, Some different  <router-link to="/other-projects">projects (during my studies)</router-link>
        , and took part in <router-link to="/resume">a few things</router-link> as well.</div>
      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a Programmer/ IT specialist. You can reach me at <a href="mailto:brutinbjorn@gmail.com">brutinbjorn@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>      
      <div class="photo" style="margin-top: 20px;">
    </div>
      <img :src="`/img/IMG_Me_1.png`" alt="Avatar of Bjorn Brutin" style="max-width: 50%;"/> 
    </div>
    
    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  max-width: 620px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    max-width: 620px;
    padding-left: 80px;
  }
}

</style>