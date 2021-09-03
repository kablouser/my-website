import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import GameDisplay from './gameDisplay';
import Badge from "./RS_PROGRAMMING_FINALIST_badge.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class GamesPage extends React.Component
{
    render()
    {
        return (
            <>
                <GameDisplay
                    backgroundImage="https://img.itch.zone/aW1nLzQwNTQ4NTAucG5n/original/%2FXCa3r.png"
                    foregroundColor="rgba(255, 255, 255, 0.3)"
                    titleImage="https://img.itch.zone/aW1nLzQwNTQ1NTYucG5n/original/tw%2F2BQ.png"
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
                    body={`The sword has a light and heavy attack depending on if you tap or hold the mouse button. Each attack has different animation timings.
The sword can also parry attacks which stuns the attacker. A blue circle will indicate the effective angle of your parry. A yellow arrow will indicate the direction of the attack. If the yellow arrow is within the blue circle, then the attack will be parried.
The shield can block incoming attacks in a similar fashion to parrying. Additionally, it can perform a shield charge. Which knocks back anybody hit.
The enemy AI uses Unity’s NavMesh Agent to path find around the level and avoid obstacles. It also uses state machines to control behaviours like attacking or chasing.
Attacks can interrupt animations, restrict movement, apply effects (like slow) on the user. The code is versatile. So, it can be expanded upon easily.`}
                />
                <GameDisplay
                    backgroundColor="#7CECF8"
                    titleImage="https://img.itch.zone/aW1nLzI5MjA0MTUucG5n/original/V6dCz%2F.png"
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
                    tags="Unity, C#, Scriptable Objects, Individual Project, 1 Month"
                    body={`The challenge was to create a game around pre-written A* pathfinding algorithm.
The stats of items were stored in scriptable objects. These stats would then be applied to the player when the item is equipped. Some items provide abilities too. Abilities derive from a base abstract scriptable object that defines some functions.
Aggressive enemies will attack passive enemies, passive enemies will run away when they are hurt. UI buttons appear when the player is near an interactable object.`}
                    badges={[Badge]}
                />
                <GameDisplay
                    backgroundColor="#1d1f21"
                    isDark={true}
                    title="Nightmare Tower Defence"
                    URL="https://kablouser.itch.io/farstorm"
                    subtitle="Orcs Must Die! but you can block the exits"
                    youtubeVideo="g_SJqv7FZX4"
                    carouselImages=
                    {[
                        "https://img.itch.zone/aW1hZ2UvOTg0NDc4LzU1OTY4NzQucG5n/original/O%2BgZVJ.png",
                        "https://img.itch.zone/aW1hZ2UvOTg0NDc4LzU1OTY4NzMucG5n/original/UHjIM7.png",
                        "https://img.itch.zone/aW1hZ2UvOTg0NDc4LzU1OTY4NzYucG5n/original/3q8Fz%2F.png",
                    ]}
                    tags="Unity, C#, Flow Field Pathfinding, Group Project (3 people), 1 Week"
                    body={`I was in charge of the pathfinding system. I implemented a flow field pathfinding.
Flow field was effective at navigating a large amount of enemies. If the player placed a barricade the path could change. Flow field updates were quick at this.
Ordinarily, tower defence games disallow the exit path being blocked. To achieve the opposite effect, I used penalties. The barricades were set as walkable squares but had a high penalty, similar to the slime trap and the lego trap. The enemies would try to walk around the barricades. But if the exit was blocked, then they would tear through the blockade using the shortest path possible. And the cost of barricades was set high such that the player couldn’t afford to constantly block up the exit.`}
                />
                <GameDisplay
                    title="Graphics Shaders Project"
                    youtubeVideo="EhIoWEXt3IU"
                    tags="Qt5, OpenGL, C++, Individual Project, 1 Month"
                    body={`Some stuff about graphics.`}
                />
                <GameDisplay
                    backgroundColor="#fd837a"
                    title="Adventure Man"
                    subtitle="Low-Level Game"
                    youtubeVideo="cfHb14UCj3s"
                    tags="SDL2, C, Box Collision, Sprite Sheet Animation, Individual Project, 1 Month"
                    body={`SDL2 is a low-level engine compared to others like Unity or Unreal. You have to create a lot of systems from scratch. And the C language compounds this effect.
I wanted to imitate Unity’s object-component system. Where each objects in the scene has different components that define their behaviours. For example : rendering component, movement component, hitbox component etc. I used the union data type to imitate polymorphism in OOP.
In this game, the world is made up of rooms. Only one room is loaded at once. And objects inside each room are only updated when its room is loaded.`}
                />
                <div className="game-display-foreground" style={{ textAlign: "center" }}>
                    <Button href="https://kablouser.itch.io/" variant="primary">More on itch.io</Button>
                </div>
            </>);
    }
}

class AboutPage extends React.Component
{
    render()
    {
        return (
            <>
                <h1>This is Page2.</h1>
                <div className="video-responsive">
                    <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed/sIpvJ_yYd0o?autoplay=1"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrpyted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </>);
    }
}

class ContactPage extends React.Component
{
    render()
    {
        return (
            <>
                <h1>This is Page3.</h1>
            </>
        );
    }
}

class Navigation extends React.Component
{
    pages = [<GamesPage />, <AboutPage />, <ContactPage />]
    buttonLabels = ["Games", "About", "Contact"]

    constructor(props)
    {
        super(props);
        this.state = { currentPage: 0 };
    }

    handleTabButton(newPage)
    {
        this.setState({ currentPage: newPage });
    }

    render()
    {
        const tabButtons = this.buttonLabels.map((label, index) =>
        {
            let style = index === this.buttonLabels.length - 1 ? null :
                { style: { marginRight: "10px" } };
            let variant = this.state.currentPage === index ? "primary" : "secondary";
            return (
                <Button
                    variant={variant}
                    onClick={() => { this.handleTabButton(index) }}
                    {...style}
                >
                    {label}
                </Button>);
        });

        return (
            <>
                <div className="game-display-foreground" style={{ textAlign: "center" }}>
                    <h1>Zecheng Hu Portfolio</h1>
                    {tabButtons}
                </div>
                {this.pages[this.state.currentPage]}
            </>);
    }
}

ReactDOM.render(<Navigation />, document.getElementById('root'));