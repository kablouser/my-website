import Button from 'react-bootstrap/Button';
import GameDisplay from './gameDisplay';
import Badge from './RS_PROGRAMMING_FINALIST_badge.png';

export default function GamesPage()
{
    return (
        <>
            <GameDisplay
                backgroundImage="https://img.itch.zone/aW1nLzQwNTQ4NTAucG5n/original/%2FXCa3r.png"
                foregroundColor="rgba(255, 255, 255, 0.3)"
                titleImage="https://img.itch.zone/aW1nLzQwNTQ1NTYucG5n/original/tw%2F2BQ.png"
                title="Brutal Reign"
                URL="https://kablouser.itch.io/brutal-reign"
                subtitle="Souls-like hack n’ slash"
                carouselImages=
                {[
                    "https://img.itch.zone/aW1nLzQwNTQ0MjIuZ2lm/original/odboXh.gif",
                    "https://img.itch.zone/aW1nLzQwNTQ0MzYuZ2lm/original/Gto5Cz.gif",
                    "https://img.itch.zone/aW1nLzQwNTQ0NDMuZ2lm/original/1y8%2F0j.gif",
                    "https://img.itch.zone/aW1hZ2UvNzI4NjIwLzQwNTQyNjQucG5n/original/EcD%2BSU.png",
                    "https://img.itch.zone/aW1hZ2UvNzI4NjIwLzQwNTQ0ODEucG5n/original/lOyGZU.png",
                    "https://img.itch.zone/aW1hZ2UvNzI4NjIwLzQwNTQyNjUucG5n/original/fyb8HJ.png",
                    "https://img.itch.zone/aW1hZ2UvNzI4NjIwLzQwNTQyNjgucG5n/original/dGzzZC.png",
                ]}
                tags="Unity, C#, Individual Project, 3 Months"
            >
                <p>This RPG experiments with a combat system that slows characters during their attacks, which allows a little repositioning. The parry mechanic can deflect attacks if timed correctly. Which can be used by the player or the enemies. The push mechanic can push foes into dangerous spike pits. It combines combat elements from Mount&Blade and Dark Souls.</p>
                <p>All assets were created from scratch. The aim of this project was to gauge my own capabilities.</p>
            </GameDisplay>

            <GameDisplay
                backgroundColor="#7CECF8"
                titleImage="https://img.itch.zone/aW1nLzI5MjA0MTUucG5n/original/V6dCz%2F.png"
                title="Farstorm"
                URL="https://kablouser.itch.io/farstorm"
                subtitle="League of Legends with RuneScape movement"
                carouselIsDark={true}
                youtubeVideo="6VwuXc96uLE"
                carouselImages=
                {[
                    "https://img.itch.zone/aW1hZ2UvNTU2NTA2LzI5MTczNDkuZ2lm/original/%2BoaFXu.gif",
                    "https://img.itch.zone/aW1hZ2UvNTU2NTA2LzI5MTcyMDQucG5n/original/3jmtB2.png",
                    "https://img.itch.zone/aW1hZ2UvNTU2NTA2LzI5MTcyMTQucG5n/original/AsrsZ%2F.png",
                    "https://img.itch.zone/aW1hZ2UvNTU2NTA2LzI5MTcyMTgucG5n/original/Kliyks.png",
                    "https://img.itch.zone/aW1hZ2UvNTU2NTA2LzI5MTcyMjQucG5n/original/pVPyYt.png",
                    "https://img.itch.zone/aW1hZ2UvNTU2NTA2LzI5MTcyMzIucG5n/original/AAbB8h.png",
                ]}
                tags="Unity, C#, Individual Project, 1 Month"
                badges={[Badge]}
            >
                <p>There are pacifists who trade items for gems. There are many items available. They each uniquely affect your stats and your playstyle. Items can synergise together to become more power than the sum of its parts. Similar to item building in League of Legends.</p>
                <p>There are hostile enemies that attack traders. The player must defeat all hostile enemies to complete each procedurally generated level. And the levels are progressively more difficult.</p>
                <p>
                    {"I created none of the assets (models, sprites, sounds). This game was an entry to "}
                    <a href="https://gradsingames.com/game-dev-challenges/rising-star/">Grads in Games Rising Star Challenge</a>.
                    {" The challenge was to create a game out of a pre-written A* pathfinding algorithm. I managed to become a "}
                    <a href="https://gradsingames.com/search-for-a-star/sfasx-the-finalists/">finalist</a>.
                </p>
            </GameDisplay>

            <GameDisplay
                backgroundColor="#1d1f21"
                isDark={true}
                title="Nightmare Tower Defence"
                URL="https://mrmgoose.itch.io/nightmare-tower-defence"
                subtitle="Similar to Orcs Must Die!"
                youtubeVideo="g_SJqv7FZX4"
                carouselImages=
                {[
                    "https://img.itch.zone/aW1hZ2UvOTg0NDc4LzU1OTY4NzQucG5n/original/O%2BgZVJ.png",
                    "https://img.itch.zone/aW1hZ2UvOTg0NDc4LzU1OTY4NzMucG5n/original/UHjIM7.png",
                    "https://img.itch.zone/aW1hZ2UvOTg0NDc4LzU1OTY4NzYucG5n/original/3q8Fz%2F.png",
                ]}
                tags="Unity, C#, Group Project (3 people), 1 Week"
            >
                <p>Nightmare creatures move towards your bed using the shortest path through the traps. They can even break through barricades!</p>
                <p>There are 3 traps:</p>
                <ul>
                    <li>Pillow wall: blocks enemy's paths</li>
                    <li>Lego bricks: damages enemies over time</li>
                    <li>Slime trap: slows enemies</li>
                </ul>
                <p>
                    {"I created the flow field pathfinding AI, models, and animations. This game was an entry to "}
                    <a href="https://itch.io/jam/college-game-jam">College Game Jam</a>.
                </p>
            </GameDisplay>

            <GameDisplay
                title="Graphics Shaders Project"
                subtitle="OpenGL tech demo"
                youtubeVideo="EhIoWEXt3IU"
                tags="Qt5, OpenGL, C++, Individual Project, 1 Month"
            >
                <p>Qt5 is a C++ toolkit for creating GUIs and rendering with OpenGL. It's very low-level.</p>
                <p>This project showcases:</p>
                <ul>
                    <li>Transform hierarchy</li>
                    <li>Coordinate system</li>
                    <li>Blinn–Phong reflections</li>
                    <li>Texture mapping</li>
                    <li>Specular mapping</li>
                    <li>Multiple lights</li>
                    <li>Multiple lighting types</li>
                    <li>Multiple shadowmaps</li>
                    <li>Loading models from .obj files</li>
                    <li>Transparency blending</li>
                    <li>Skybox cubemapping</li>
                    <li>Reflection cubemapping</li>
                    <li>Framebuffer manipulation</li>
                    <li>Stencil testing</li>
                    <li>Post-processing kernels</li>
                </ul>
                <p>It could even load models from my other game, Brutal Reign. This was my Computer Graphics coursework, but this goes much further beyond the specifications.</p>
                <hr />
            </GameDisplay>

            <GameDisplay
                title="Nerf Shooter Prototype"
                URL="https://kablouser.itch.io/nerf-shooter-prototype"
                subtitle="FPS inspired by Nerf"
                carouselIsDark={true}
                youtubeVideo="_nCujYn91ck"
                carouselImages=
                {[
                    "https://img.itch.zone/aW1hZ2UvMTExMjAyOS82OTI3MzIyLnBuZw==/original/3KhEP6.png",
                    "https://img.itch.zone/aW1hZ2UvMTExMjAyOS82OTI3MzIzLnBuZw==/original/AmshZu.png",
                    "https://img.itch.zone/aW1hZ2UvMTExMjAyOS82OTI3MzI0LnBuZw==/original/EUIyeY.png",
                    "https://img.itch.zone/aW1hZ2UvMTExMjAyOS82OTI3MzI1LnBuZw==/original/evN29S.png",
                ]}
                tags="Unity, C#, DOTS, ECS, Individual Project, 1 Month"
            >
                <p>This tactical FPS requires the player to operate the Nerf blasters manually. Priming, reloading, and chambering all have separate actions and inputs. The darts shoot out at a leisurely speed. And they bounce off walls like foam. All assets were created from scratch.</p>
                <p>This game uses Unity's DOTS and ECS.</p>
                <h4>What is Unity DOTS ECS?</h4>
                <p>Unity’s Data Oriented Tech Stack (DOTS) uses the Entity Component System (ECS) at its core. And it unlocks huge performance potential by minimising cache misses using Data Oriented Programming, parallelisation using Jobs, and speed optimisation using Burst.</p>
                <p>However, this FPS game didn't need the performance. In fact, the game was almost a worst-case scenario in terms of ECS implementation because of the animation and runtime rigging requirements. This project’s aim was to learn the DOTS and ECS workflow.</p>
                <hr />
            </GameDisplay>

            <div className="foreground" style={{ textAlign: "center" }}>
                <Button href="https://kablouser.itch.io/" variant="primary">More on itch.io</Button>
            </div>
        </>);
}
