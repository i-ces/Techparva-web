import { generateSlug } from "./schedule";

export interface Event {
    id: string;
    title: string;
    description: string;
    type: 'workshop' | 'talk' | 'competition';
    date: string; // Updated to include date and time in ISO format
    time: string;
    duration: string;
    location: string;
    image: string;
    capacity: number;
    speakers: string[];
    tags: string[];
    nepalidate: string;
    formlink?: string;
    rules?: string[];
}

export const events: Event[] = [
    {
        id: generateSlug("Design Workshop"),
        title: "Design Workshop",
        description: "Interactive session on design incubation and creative insights.",
        type: "workshop",
        date: "2024-12-27T14:00:00", // ISO format (includes time)
        nepalidate: "Poush 12, 2081",
        time: "02:00 PM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "/designworkshop.png",
        capacity: 50,
        speakers: ["John Doe"],
        formlink: "https://forms.gle/ZiBnemrH7xz3F1K36",
        tags: ["Design", "Creativity", "Workshop"]
    },
    {
        id: generateSlug("Pre-event"),
        title: "Pre-event",
        description: "An engaging pre-event challenge to kick-start the excitement for Tech Parva.",
        type: "competition",
        date: "2025-01-03T10:00:00", // ISO format (includes time)
        nepalidate: "Poush 19, 2081",
        time: "10:00 AM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "/preevent.png",
        capacity: 100,
        speakers: [],
        tags: ["Problem-Solving", "Pre-event", "Competition"],
        formlink: "https://forms.gle/fY63ccmGNdXLxxy4A",
    },
    {
        id: generateSlug("CTF Workshop"),
        title: "CTF Workshop",
        description: "Learn the basics of Capture the Flag competitions in this online workshop.",
        type: "workshop",
        date: "2025-01-04T10:00:00", // ISO format (includes time)
        nepalidate: "Poush 20, 2081",
        time: "10:00 AM",
        duration: "2 hours",
        location: "Online",
        image: "/CTF_Workshop.png",
        capacity: 50,
        speakers: [],
        tags: ["Cybersecurity", "Workshop", "CTF"],
        formlink: "https://forms.gle/7uh5Nei9KFdZc13N8",
    },
    {
        id: generateSlug("Capture the Flag"),
        title: "Capture the Flag",
        description: "Compete in an exciting Capture the Flag challenge.",
        type: "competition",
        date: "2025-01-06T14:00:00", // ISO format (includes time)
        nepalidate: "Poush 22, 2081",
        time: "02:00 PM",
        duration: "4 hours",
        location: "CIT Hall, WRC",
        image: "/CTF.png",
        capacity: 100,
        speakers: [],
        tags: ["Cybersecurity", "Competition", "CTF"]
        , formlink: "https://forms.gle/JsUcgKVY6kzKLms96"
    },
    {
        id: generateSlug("Datathon Workshop"),
        title: "Datathon Workshop",
        description: "Learn data preprocessing and visualization techniques.",
        type: "workshop",
        date: "2025-01-06T11:30:00", // ISO format (includes time)
        nepalidate: "Poush 22, 2081",
        time: "11:30 AM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "/Datathon_Workshop.png",
        capacity: 50,
        speakers: [],
        tags: ["Data Science", "Workshop", "Visualization"],
        formlink: "https://forms.gle/ACXpxmXoojitF7j87"
    },
    {
        id: generateSlug("Design Incubation"),
        title: "Design Incubation",
        description: "Tackle real-world challenges with innovative designs.",
        type: "competition",
        date: "2025-01-07T10:00:00", // ISO format (includes time)
        nepalidate: "Poush 23, 2081",
        time: "10:00 AM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "/Design.png",
        capacity: 50,
        speakers: [],
        tags: ["Design Thinking", "Competetion", "Innovation"],
        formlink: "https://forms.gle/WfB2v3aVnRdJhbiU7",
    },
    {
        id: generateSlug("Datathon"),
        title: "Datathon",
        description: "Clean, analyze, and visualize datasets to generate insights.",
        type: "competition",
        date: "2025-01-07T14:00:00", // ISO format (includes time)
        nepalidate: "Poush 23, 2081",
        time: "02:00 PM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "/Datathon.png",
        capacity: 100,
        speakers: [],
        tags: ["Data Science", "Competition", "Analysis"],
        formlink: "https://forms.gle/DMCpMMjrtHcibMET6",
    },
    {
        id: generateSlug("Code with Coffee"),
        title: "Code with Coffee",
        description: "Competitive coding with a relaxing coffee vibe. Make it seem easy",
        type: "competition",
        date: "2025-01-08T11:00:00", // ISO format (includes time)
        nepalidate: "Poush 24, 2081",
        time: "11:00 AM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "/CWC.png",
        capacity: 50,
        speakers: [],
        tags: ["Coding", "Competition", "Fun"],
        formlink: "https://forms.gle/4aYTkcfCDXy9o7x87"
    },
];
