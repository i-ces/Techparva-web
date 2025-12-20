export interface ScheduleEvent {
    id: string;
    time: string;
    title: string;
    description: string;
    speaker?: string;
    location?: string;
    type?: 'talk' | 'workshop' | 'competition';
    formlink?: string;
    isEvent?: boolean | true;
    icon?: string;
}

export interface DaySchedule {
    date: string;
    nepalidate: string;
    dayTitle: string;
    events: ScheduleEvent[];
}

export const generateSlug = (title: string): string => {
    return `${title.toLowerCase().replace(/\s+/g, '-')}`;
};

export const scheduleData: DaySchedule[] = [
      {
        date: "December 14, 2025",
        nepalidate: "Mangsir 28 2082",
        dayTitle: "Day 0",
        events: [
              {
                id: generateSlug("Tech Roadmap"),
                time: "1:00 PM",
                title: "Tech Roadmap",
                description: "A glimpse into upcoming technologies, events, and opportunities ahead.",
                location: "CIT Hall, WRC",
                type: "talk",
                isEvent: false, icon: '/icons/Roadmap.svg'
            },
        ],
    },
       {
        date: "December 22, 2025",
        nepalidate: "Poush 7 2082",
        dayTitle: "Day 1",
        events: [
              {
                id: generateSlug("AI Art Battle"),
                time: "1:00 PM",
                title: "AI Art Battle",
                description: "A fast-paced battle of prompts, creativity, and AI art.",
                location: "CIT Hall, WRC",
                type: "competition",
                isEvent: false, icon: '/icons/AIArtBattle.svg'
            },
        ],
    },
       {
        date: "December 24, 2025",
        nepalidate: "Poush 9, 2082",
        dayTitle: "Day 2",
        events: [
            {
                id: generateSlug("CTF Workshop"),
                time: "7:30 PM",
                title: "CTF Workshop",
                description: "Learn the basics of Capture the Flag competitions.",
                location: "CIT Hall, WRC",
                type: "workshop",
                formlink: "https://forms.gle/7uh5Nei9KFdZc13N8", isEvent: true, icon: '/icons/CTF.svg'
            }
        ]
    },
       {
        date: "December 26, 2025",
        nepalidate: "Poush 11, 2082",
        dayTitle: "Day 3",
        events: [
            {
                id: generateSlug("Blind Tech"),
                time: "7:30 PM",
                title: "Blind Tech",
                description: "A challenge where skills matter more than sight.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/7uh5Nei9KFdZc13N8", isEvent: true, icon: '/icons/BlindTech.svg'
            }
        ]
    },
    {
        date: "December 29, 2025",
        nepalidate: "Poush 14, 2082",
        dayTitle: "Day 4",
        events: [
            {
                id: generateSlug("Design Workshop"),
                time: "02:00 PM",
                title: "Design Workshop",
                description: "Interactive session on design incubation and creative insights.",
                location: "CIT Hall, WRC",
                type: "workshop",
                formlink: "https://forms.gle/ZiBnemrH7xz3F1K36", isEvent: true, icon: '/icons/Design.svg'
            }
        ],
    },
    {
        date: "January 2, 2026",
        nepalidate: "Poush 18, 2082",
        dayTitle: "Day 5",
        events: [
            {
                id: generateSlug("Pre-event"),
                time: "10:00 AM",
                title: "Googler",
                description: "Test your research and problem-solving skills in this challenge.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/fY63ccmGNdXLxxy4A", isEvent: true, icon: '/icons/Googler.svg'
            },
            {
                id: generateSlug("Pre-event"),
                time: "11:00 AM",
                title: "Wiki Speedrun",
                description: "Navigate through Wikipedia pages in the least time.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/fY63ccmGNdXLxxy4A", isEvent: true, icon: '/icons/WikiSpeedrun.svg'
            },
            {
                id: generateSlug("Pre-event"),
                time: "12:00 PM",
                title: "Prompt Memer",
                description: "Explore the power of generative AI with fun challenges.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/fY63ccmGNdXLxxy4A", isEvent: true, icon: '/icons/GenAI.svg'
            },
               {
                id: generateSlug("Pre-event"),
                time: "1:00 PM",
                title: "Type Ninja",
                description: "Typing competition to test your speed and accuracy.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/fY63ccmGNdXLxxy4A", isEvent: true, icon: '/icons/TypeNinja.svg'
            }
        ],
    },
 
    {
        date: "January 4, 2026",
        nepalidate: "Poush 20, 2082",
        dayTitle: "Day 6",
        events: [
            
            {
                id: generateSlug("Inauguration"),
                time: "10:00 AM",
                title: "Inauguration",
                description: "Welcome address to kickstart Tech Parva 2026.",
                location: "CIT Hall, WRC",
                type: "talk",
                isEvent: false, icon: '/icons/Inauguration.svg'
            },
            {
                id: generateSlug("Datathon Workshop"),
                time: "11:30 AM",
                title: "Datathon Workshop",
                description: "Datathon workshop on data preprocessing and visualization.",
                location: "CIT Hall, WRC",
                type: "workshop",
                formlink: "https://forms.gle/ACXpxmXoojitF7j87", isEvent: true, icon: '/icons/Datathon.svg'
            },
            {
                id: generateSlug("Capture the Flag"),
                time: "02:00 PM",
                title: "Capture the Flag",
                description: "Compete in an exciting CTF challenge.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/JsUcgKVY6kzKLms96", isEvent: true, icon: '/icons/CTF.svg'
            }
        ]
    },
    {
        date: "January 5, 2026",
        nepalidate: "Poush 21, 2082",
        dayTitle: "Day 7",
        events: [
            {
                id: generateSlug("Design Incubation"),
                time: "10:00 AM",
                title: "Design Incubation",
                description: "Tackle real-world challenges with innovative designs.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/WfB2v3aVnRdJhbiU7", isEvent: true, icon: '/icons/Design.svg'
            },
            {
                id: generateSlug("Datathon"),
                time: "02:00 PM",
                title: "Datathon",
                description: "Clean, analyze, and visualize datasets to generate insights.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/DMCpMMjrtHcibMET6", isEvent: true, icon: '/icons/Datathon.svg'
            }
        ]
    },
    {
        date: "January 6, 2026",
        nepalidate: "Poush 22, 2082",
        dayTitle: "Day 8",
        events: [
            {
                id: generateSlug("Code with Coffee"),
                time: "11:00 AM",
                title: "Code with Coffee",
                description: "Competitive coding with a relaxing coffee vibe.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/4aYTkcfCDXy9o7x87"
                , isEvent: true, icon: '/icons/CWC.svg'
            },
            {
                id: generateSlug("Closing Ceremony"),
                time: "02:00 PM",
                title: "Closing Ceremony",
                description: "Event wrap-up and farewell.",
                location: "CIT Hall, WRC",
                type: "talk",
                isEvent: false, icon: '/icons/Closing.svg'
            }
        ]
    }
];
