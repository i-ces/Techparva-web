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
        date: "December 27, 2024",
        nepalidate: "Poush 12, 2081",
        dayTitle: "Day 1",
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
        date: "January 3, 2025",
        nepalidate: "Poush 19, 2081",
        dayTitle: "Day 2",
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
                time: "11:00 PM",
                title: "Wiki Speedrun",
                description: "Navigate through Wikipedia pages in the least time.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/fY63ccmGNdXLxxy4A", isEvent: true, icon: '/icons/WikiSpeedrun.svg'
            },
            {
                id: generateSlug("Pre-event"),
                time: "12:00 PM",
                title: "Gen AI Showdown",
                description: "Explore the power of generative AI with fun challenges.",
                location: "CIT Hall, WRC",
                type: "competition",
                formlink: "https://forms.gle/fY63ccmGNdXLxxy4A", isEvent: true, icon: '/icons/GenAI.svg'
            }
        ],
    },
    {
        date: "January 4, 2025",
        nepalidate: "Poush 20, 2081",
        dayTitle: "Day 3",
        events: [
            {
                id: generateSlug("CTF Workshop"),
                time: "10:00 AM",
                title: "CTF Workshop",
                description: "Learn the basics of Capture the Flag competitions.",
                location: "CIT Hall, WRC",
                type: "workshop",
                formlink: "https://forms.gle/7uh5Nei9KFdZc13N8", isEvent: true, icon: '/icons/CTF.svg'
            }
        ]
    },
    {
        date: "January 6, 2025",
        nepalidate: "Poush 22, 2081",
        dayTitle: "Day 4",
        events: [
            {
                id: generateSlug("Inauguration"),
                time: "10:00 AM",
                title: "Inauguration",
                description: "Welcome address to kickstart Tech Parva 3.0.",
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
        date: "January 7, 2025",
        nepalidate: "Poush 23, 2081",
        dayTitle: "Day 5",
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
        date: "January 8, 2025",
        nepalidate: "Poush 24, 2081",
        dayTitle: "Day 6",
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
