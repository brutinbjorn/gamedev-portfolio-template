<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">

      I'm <strong>Brutin Bjorn</strong>, A Graduated Bachelor student from the HOWEST University of Applied Sciences, <br/>
      Where i studied As a Game Developer, in the Ditigal Arts and Entertaiment mayor. <br/>
      Before I studied at DAE, I also studied At Vives, where got a Associates Degree in IT & Programming. <br/>
      The reason i wanted to study at DAE, after my studies at the Vives, is that I wanted to learn more advanced techniques when developing software. <br/>

      After my internship at THE PACK Brussels, I was able to work there for a additional 5 month's. <br/>

      Now I'm looking for a job where I can apply my skills i learned, and expand my knowledge as a Programmer/IT specialist. <br/>
       
      Besides my interest in Progrmming and video games, I also enjoy music, play a bit of guitar, love festivals and comedy events, I'm a news-junky and love movies.
      <!--, a former Delta Force operative with lots of experience, lots of training and huge muscles.
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a monk job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.-->
      


      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="CV/CV_Brutin_Bjorn.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download my CV as PDF.</a>
        <!--<a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>-->
        <!--<a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>-->
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img :src="`/img/IMG_Me.png`" alt="Photo of Bjorn Brutin" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>THE PACK Brussels</h3>
      <h4>2023-2024</h4>

      <div>Worked as a programmer, Helping on the development of there Video Game Replaceable.</div>
      <div>I also worked on some research projects for there SYNK Toobelt, where i implemented a intergration for<a href="https://github.com/FilmakademieRnd/VPET" target="_blank"> VPET.</a></div>

      <div class="tech-stack">C#, Unity, Unity ECS, SourceTree, JSON,...</div>
      <h3>TMS Software</h3>
      <h4>2019</h4>
      <div>Did a internship at TMS Software</div>
      <div>During my internship, I researched how easy it was for a beginner programmer to get used to there TMS FNS tool kit.</div>
      <div>The result of is a little experiment i made is called TMS Vision, you can find more about it in this 
        <a href="https://www.tmssoftware.com/site/blog.asp?post=541&fbclid=IwY2xjawE2wwlleHRuA2FlbQIxMAABHaTHYsuA2II2qiBM2tDs6O-yEXzLzXVDT36yrnFAL7R-MFRoP5R6BTk8sg_aem_LpyJm4EVJxrsAeKnzTiwsg" target="_blank"> BLOG</a> 
        I wrote when i worked there. </div>

      <div>The app works by using the TMF FNS packages that contacts and keeps communicating with different REST API's, such as google Text To Speech, Translate, Google Vision, Windows vision, etc.</div>
      <div>Then uses this info to translate a image taken on by phone, and will explain to the person what is on the image, translate it to there desired language. </div>
      

      <div class="tech-stack">Object Pascal, Delphi, REST API's, Lazarus, TMS FNS,...</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming Languages</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Object Pascal" :rate="4" />
        <SkillRate name="HTML/CSS/JavaScript" :rate="4" />
        <SkillRate name="HLSL/DirectX" :rate="4"/>
        <SkillRate name="Java" :rate="4" />
        <SkillRate name="mySQL" :rate="3" />
        <SkillRate name=".NET" :rate=3 />
        <SkillRate name="vue" :rate="3"/>
        <SkillRate name="TypeScript" :rate="3"/> 
        <SkillRate name="XAML" :rate=3 />
      </div>

      <div class="skill-set">
        <h3>Software & Development Tools</h3>
        <SkillRate name="Source Control: git,etc. " :rate="5" />
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Unreal Engine" :rate="5" />
        <SkillRate name="Visual studio" :rate="5"/>
        <SkillRate name="Visual Studio Basic" :rate="5" />
        <SkillRate name="3Ds max" :rate="4" />
        <SkillRate name="Photoshop" :rate="4"/>
        <SkillRate name="Adobe software" :rate="3"/>
        <SkillRate name="NetBeans" :rate="3"/>
        <SkillRate name="Lazarus" :rate="3"/>
      </div>

      <div class="skill-set">
        <h3>Soft skills</h3>
        <SkillRate name="flexibility" :rate="5" />
        <SkillRate name="Critical of work" :rate="5"/>
        <SkillRate name="working independent" :rate="4"/>
        <SkillRate name="guiding others" :rate="4"/>
        <SkillRate name="writing documentation" :rate="4"/>
      </div>
      <div style="clear:both" ></div>

      <h2>Education</h2>
      <h3>HOWEST University of Applied Sciences - Digital Arts and Entertainment, Game Developer - 2024</h3>
      <h4>Bachelor degree</h4>
      <div>Specialty in developing programs and video games.</div>

      <h3>Vives University of Applied Sciences - HBO Informatica - option Programming - 2019 </h3>
      <h4>Associates Degree</h4>
      <div> Learned some techniques to work as a IT'er, learned programming in java & C# and how to program for phones.</div>


      <h2>Languages</h2>

      <h3>Dutch</h3>
      <div>Mother language</div>

      <h3>English</h3>
      <div>fluent, both in speaking and writing.</div>

      <h2>Otherwise...</h2>
      <div>
        <h3>Love Video games</h3>
        <div>Otherwise i would never have chosen a education and carreer where i work on them constantly.</div>
        <div>The main game i would blame for my interest in programming would be LittleBigPlanet.</div>
        <div>Otherwise i almost play anything depending on the mood I'm in. from action/adventure games such as Ratchet & Clank, to Simulators such as X4 foundations.</div>

        <h3>Love Music</h3>
        <div>Practised Guitar and music school for a couple of years. listen to almost every genre.</div>
        <div>Also followed a additional module in audio Design, where i learned some basic's about editing audio for movies/games.</div>

        <h3>Like the News</h3>
        <div>Love to be up to date of everything that is currently happening in the world, and anything that happens in the programming and game sector.</div>

        <h3>Like going to social events</h3>
        <div>From going out for a Drink with friends, to Comedy shows & music events. General love stretching my legs in the weekend, and being amongst people.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillRate from "@/components/SkillRate.vue";


export default defineComponent({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>