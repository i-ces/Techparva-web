import { generateSlug } from "./schedule";

export interface Event {
    id: string;
    title: string;
    description: string;
    type: 'workshop' | 'talk' | 'competition';
    date: string;
    time: string;
    duration: string;
    location: string;
    image: string;
    capacity: number;
    speakers: string[];
    tags: string[];
    nepalidate: string;
    rules?: string[];
}

export const events: Event[] = [
    {
        id: generateSlug("Design Workshop"),
        title: "Design Workshop",
        description: "Interactive session on design incubation and creative insights.",
        type: "workshop",
        date: "December 27, 2024",
        nepalidate: "Poush 12, 2081",
        time: "02:00 PM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
        capacity: 50,
        speakers: ["John Doe"],
        tags: ["Design", "Creativity", "Workshop"]
    },
    {
        id: generateSlug("Pre-event"),
        title: "Pre-event",
        description: "An engaging pre-event challenge to kick-start the excitement for Tech Parva.",
        type: "competition",
        date: "January 3, 2025",
        nepalidate: "Poush 19, 2081",
        time: "10:00 AM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
        capacity: 100,
        speakers: [],
        tags: ["Problem-Solving", "Pre-event", "Competition"]
    },
    {
        id: generateSlug("CTF Workshop"),
        title: "CTF Workshop",
        description: "Learn the basics of Capture the Flag competitions in this online workshop.",
        type: "workshop",
        date: "January 4, 2025",
        nepalidate: "Poush 20, 2081",
        time: "10:00 AM",
        duration: "2 hours",
        location: "Online",
        image: "https://images.unsplash.com/photo-1600210491896-3e814e2784f1?auto=format&fit=crop&q=80",
        capacity: 50,
        speakers: ["Jane Smith"],
        tags: ["Cybersecurity", "Workshop", "CTF"]
    },
    {
        id: generateSlug("Capture the Flag"),
        title: "Capture the Flag",
        description: "Compete in an exciting Capture the Flag challenge.",
        type: "competition",
        date: "January 6, 2025",
        nepalidate: "Poush 22, 2081",
        time: "02:00 PM",
        duration: "4 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&q=80",
        capacity: 100,
        speakers: [],
        tags: ["Cybersecurity", "Competition", "CTF"]
    },
    {
        id: generateSlug("Datathon Workshop"),
        title: "Datathon Workshop",
        description: "Learn data preprocessing and visualization techniques.",
        type: "workshop",
        date: "January 6, 2025",
        nepalidate: "Poush 22, 2081",
        time: "11:30 AM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a6e?auto=format&fit=crop&q=80",
        capacity: 50,
        speakers: ["Dr. Emily Brown"],
        tags: ["Data Science", "Workshop", "Visualization"]
    },
    {
        id: generateSlug("Design Incubation"),
        title: "Design Incubation",
        description: "Tackle real-world challenges with innovative designs.",
        type: "workshop",
        date: "January 7, 2025",
        nepalidate: "Poush 23, 2081",
        time: "10:00 AM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
        capacity: 50,
        speakers: ["Sophia Williams"],
        tags: ["Design Thinking", "Workshop", "Innovation"]
    },
    {
        id: generateSlug("Datathon"),
        title: "Datathon",
        description: "Clean, analyze, and visualize datasets to generate insights.",
        type: "competition",
        date: "January 7, 2025",
        nepalidate: "Poush 23, 2081",
        time: "02:00 PM",
        duration: "3 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1553531384-cc64cf0b7dd7?auto=format&fit=crop&q=80",
        capacity: 100,
        speakers: [],
        tags: ["Data Science", "Competition", "Analysis"]
    },
    {
        id: generateSlug("Code with Coffee"),
        title: "Code with Coffee",
        description: "Competitive coding with a relaxing coffee vibe.",
        type: "competition",
        date: "January 8, 2025",
        nepalidate: "Poush 24, 2081",
        time: "11:00 AM",
        duration: "2 hours",
        location: "CIT Hall, WRC",
        image: "https://images.unsplash.com/photo-1519750157634-ba37f0b0d3b2?auto=format&fit=crop&q=80",
        capacity: 50,
        speakers: [],
        tags: ["Coding", "Competition", "Fun"]
    },
];