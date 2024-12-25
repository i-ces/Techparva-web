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
        tags: ["Problem-Solving", "Pre-event", "Competition"]
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
        speakers: ["Jane Smith"],
        tags: ["Cybersecurity", "Workshop", "CTF"]
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
        speakers: ["Dr. Emily Brown"],
        tags: ["Data Science", "Workshop", "Visualization"]
    },
    {
        id: generateSlug("Design Incubation"),
        title: "Design Incubation",
        description: "Tackle real-world challenges with innovative designs.",
        type: "workshop",
        date: "2025-01-07T10:00:00", // ISO format (includes time)
        nepalidate: "Poush 23, 2081",
        time: "10:00 AM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "/Design.png",
        capacity: 50,
        speakers: ["Sophia Williams"],
        tags: ["Design Thinking", "Workshop", "Innovation"]
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
        tags: ["Data Science", "Competition", "Analysis"]
    },
    {
        id: generateSlug("Code with Coffee"),
        title: "Code with Coffee",
        description: "Competitive coding with a relaxing coffee vibe.",
        type: "competition",
        date: "2025-01-08T11:00:00", // ISO format (includes time)
        nepalidate: "Poush 24, 2081",
        time: "11:00 AM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "/CWC.png",
        capacity: 50,
        speakers: [],
        tags: ["Coding", "Competition", "Fun"]
    },
];
