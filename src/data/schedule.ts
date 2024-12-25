export interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
    speaker?: string;
    location?: string;
    type?: 'talk' | 'workshop' | 'competition';
}

export interface DaySchedule {
    date: string;
    nepalidate: string;
    dayTitle: string;
    events: ScheduleEvent[];
}

export const scheduleData: DaySchedule[] = [
    {
        date: "December 27, 2024",
        nepalidate: "Poush 12, 2081",
        dayTitle: "Day 1",
        events: [
            {
                time: "02:00 PM",
                title: "Design Workshop",
                description: "Interactive session on design incubation and creative insights.",
                location: "CIT Hall, WRC",
                type: "workshop"
            }
        ]
    },
    {
        date: "January 3, 2025",
        nepalidate: "Poush 19, 2081",
        dayTitle: "Day 2",
        events: [
            {
                time: "10:00 AM",
                title: "Googler",
                description: "Test your research and problem-solving skills in this challenge.",
                location: "CIT Hall, WRC",
                type: "competition"
            },
            {
                time: "11:00 PM",
                title: "Wiki Speedrun",
                description: "Navigate through Wikipedia pages in the least time.",
                location: "CIT Hall, WRC",
                type: "competition"
            },
            {
                time: "12:00 PM",
                title: "Gen AI Showdown",
                description: "Explore the power of generative AI with fun challenges.",
                location: "CIT Hall, WRC",
                type: "competition"
            }
        ]
    },
    {
        date: "January 4, 2025",
        nepalidate: "Poush 20, 2081",
        dayTitle: "Day 3",
        events: [
            {
                time: "10:00 AM",
                title: "CTF Workshop",
                description: "Learn the basics of Capture the Flag competitions.",
                location: "CIT Hall, WRC",
                type: "workshop"
            }
        ]
    },
    {
        date: "January 6, 2025",
        nepalidate: "Poush 22, 2081",
        dayTitle: "Day 4",
        events: [
            {
                time: "10:00 AM",
                title: "Inauguration",
                description: "Welcome address to kickstart Tech Parva 3.0.",
                location: "CIT Hall, WRC",
                type: "talk"
            },
            {
                time: "11:30 AM",
                title: "Datathon Workshop",
                description: "Datathon workshop on data preprocessing and visualization.",
                location: "CIT Hall, WRC",
                type: "workshop"
            },
            {
                time: "02:00 PM",
                title: "Capture the Flag",
                description: "Compete in an exciting CTF challenge.",
                location: "CIT Hall, WRC",
                type: "competition"
            }
        ]
    },
    {
        date: "January 7, 2025",
        nepalidate: "Poush 23, 2081",
        dayTitle: "Day 5",
        events: [
            {
                time: "10:00 AM",
                title: "Design Incubation",
                description: "Tackle real-world challenges with innovative designs.",
                location: "CIT Hall, WRC",
                type: "workshop"
            },
            {
                time: "02:00 PM",
                title: "Datathon",
                description: "Clean, analyze, and visualize datasets to generate insights.",
                location: "CIT Hall, WRC",
                type: "competition"
            }
        ]
    },
    {
        date: "January 8, 2025",
        nepalidate: "Poush 24, 2081",
        dayTitle: "Day 6",
        events: [
            {
                time: "11:00 AM",
                title: "Code with Coffee",
                description: "Competitive coding with a relaxing coffee vibe.",
                location: "CIT Hall, WRC",
                type: "competition"
            },
            {
                time: "02:00 PM",
                title: "Closing Ceremony",
                description: "Event wrap-up and farewell.",
                location: "CIT Hall, WRC",
                type: "talk"
            }
        ]
    }
];