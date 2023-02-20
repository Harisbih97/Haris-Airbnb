import Project from "./Project"

export default function Cards() {
    const Projects = [
        {
            title: "Text Adventure Game",
            image: "Adventure Game pic.png",
            Discription: "Small 'Choose-your-own-adventure game made on Python using if-statements",
        },
        {
            title: "MoBot (Discord-Bot)",
            image: "MoBot Screenshot.png",
            Discription: "Very simple discord bot made with Python that can be deployed and answer very limited amount of commands. Named after an old friend of mine.",
        },
        {    
            title: "Chat-Bot (Webpage Bot)",
            image: "Chat-Bot.png",
            Discription: "A much more complex bot in terms of replies and interactions with the user's commands. Initial source code was designed by user Indently but was heavly modified by me.",
        },
        {
            title: "Python-Doom Engine game (Unfinished)",
            image: "Python Doom pic.png",
            Discription: "A Python and Pygame based 3D game inspired by the FPS Doom. I was following Coder Space's tutorial so I can take a deeper dive of what Python and Pygame are capable of and it's use of 3D space, with Ray-casting. It is currently Unfinished but I plan to go back to it once I become better so I can modify it and make it my own so to speak."
        },
        {    
            title: "Haris Airbnb Frontend Bio/Resume Website",
            image: "Haris Airbnb Site .png",
            Discription: "A wesbsite created with CSS, React, and JavaScript that was inspired by the Airbnb website. It was made in this way to convey the excitment and optimism I have towards applying for the 2023 apprenticeship program. Unforutnatly it was not quite what I invisioned it as (was supposed to ahve a back end and have teh chat bot integrated) but I am proud of it :)",


        },
    ]

  return (
    <div className="pt-4">
        <div className="grid grid-cols-2 gap-4 cursor-pointer">
            {Projects.map((project) => (
                <Project
                title={project.title}
                image={project.image}
                Discription={project.description}
                />
            ))}
        </div>
    </div>
  );
}