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
}

export const events: Event[] = [
    {
        id: "1",
        title: "AI and Machine Learning Workshop",
        description: "Hands-on workshop covering the fundamentals of AI and practical applications in industry.",
        type: "workshop",
        date: "March 15, 2024",
        time: "10:00 AM",
        duration: "3 hours",
        location: "Workshop Hall A",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
        capacity: 50,
        speakers: ["1"],
        tags: ["AI", "Machine Learning", "Hands-on"]
    },

    {
        id: "3",
        title: "Web3 Development Hackathon",
        description: "24-hour hackathon to build innovative decentralized applications.",
        type: "competition",
        date: "March 17, 2024",
        time: "9:00 AM",
        duration: "24 hours",
        location: "Hackathon Zone",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
        capacity: 100,
        speakers: ["3"],
        tags: ["Web3", "Blockchain", "Hackathon"]
    }
];