import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "MiniArcade C++", "img/projects/Cursed_Arcade.jpeg", `
    <div class="paragraph">
      <strong>MiniArcade</strong> was made in my 4th semester of DAE. <br/>
      written in C++, MiniArcade is a solution that contain 2 projects in it. <br/>
      1 containing a small video game engine, and A video game using that engine. <br/>
      the Engine is called Minilord, and functions as a library that handles updating, the game objects, the scenes etc. <br/>
      the  game project called The Cursed arcade, uses the engine, and adds the the logic for the video game on top. <br/>
      using these 2 projects I created this little game. <br/>
      all of this code has been written by me. <br/>
      <br/>
      Image by <a href="https://www.pexels.com/@technobulka/" target="blank">Stanislav Kondratiev</a>.

          <div class="paragraph center">
            <iframe class="video-container" src="vid/videoWithoutAudio.mkv" height="300px" width="480px"></iframe>
          </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Keeps track of the entire keyboard, and controller support.</li>
            <li>Nested gameobjects, each with there own collection of componenents.</li>
            <li>Contains SDL2, json, glm, ImGUI, and can use steamworks.</li>
            </ul>
        </div>
        <div class="notice">
          the project can be found on <a href="https://github.com/brutinbjorn/MiniArcade" target="_blank"> GitHub.</a>
      </div>

        <!--<div class="paragraph center">
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> 
        </div>-->
    `, "#c10606", false, true),
    new ProjectData("project-7", "Rasterizer And Raytracer C++", "img/projects/Screenshot_Rasterizer_Small.png", `
    <div class="paragraph">
                <strong>Rasterizer And Raytracer</strong> Was created during my 3 Semester of DAE, in the 1st graphics programming module.
                this is the result of that course. I learned the basic technices and math behind rendering a 3D module.
                First learning how a basic raytracer works, and then a basic Rasterizer.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Raytracer and Rasterizer made from scratch, written in C++.</li>
              <li>Lights & Ability to use different texture techniques: color, Normal, Occlusion .</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
              The project can be found on <a href="https://github.com/brutinbjorn/MiniArcade" target="_blank"> GitHub.</a>          
              </div>
            </div>

            <!--<div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> 
            </div>-->
            `, "#1ca1e2"),

    new ProjectData("project-8", "Zombie survival AI C++", "img/projects/Screenshot_ZombieAI.png", `
            <div class="paragraph">
                A <strong>Zombie survival AI</strong> Made during my game play programming course.<br/>
                This exam project interfaces with already build project, that generates the enviroment.<br/>
                My part was then to give the player character a AI so that it could survive as long as possible.<br/>
                this is the result. <br/>
            </div>

            <div class="paragraph center">
              <iframe class="video-container" src="vid/CompressedZombieAI.mp4"></iframe>
            </div>
            <div class="paragraph">
              the AI will look for houses first.<br/> 
              Thisis done by abusing the fact that the player character checks the navmesh for points it cant go straight towards.<br/>
              Then the AI navigates towards the closest house, checking the items it finds inside and grabs a specific layout.<br/>
              After grabbing a pistol, it will also fire at enemy's. when hit the character will also check if there are any enemy's behind him. <br/>
              The AI uses a Behaviour tree to decide its action's.<br/>
            </div>
            <div class="paragraph">
              <div class="notice">
              The project can be found on <a href="https://github.com/brutinbjorn/ZombieSurvivalAI" target="_blank"> GitHub.</a>
              </div>
            </div>
            <!--
            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
            </div>
            -->

            <!--
            <div class="paragraph center">
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
            </div>
            -->
            `,"#1ca1e2", false, true)//,
    // new ProjectData("project-9", "Shooter man. c++", "img/projects/project-9-icon.png", `
    //  <div class="paragraph">
    //             <strong>Shooter man</strong> Was a game made for my graphics programming 2 exam.</br>
    //             This project is basicly the end result, of all i was thought during the course.<br/>
    //             all the shaders HLSL's, the logic for the animation, shadows, have been made by my during the course.</br>

    //             Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
    //         </div>

    //         <div class="paragraph center">
    //           <iframe class="video-container" src="vid/GraphicsProgramming2.mp4" height="300px" width="480px"></iframe>

    //         </div>
    //     Main features :
    //     <ul>
    //     <li>Some stuff</li>
    //     <li>Some great stuff</li>
    //     <li>More awesome stuff</li>
    //     <li>And then some</li>
    //     </ul>
    // </div>

    //         <div class="paragraph">
    //           <div class="notice">
    //             Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    //           </div>
    //         </div>`),
];