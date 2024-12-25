export const getEventTypeStyles = (type?: string) => {
    const baseStyles = "absolute left-0 h-3 rounded-full mt-1.5 ";
    switch (type) {
        case 'talk':
            return `${baseStyles} bg-blue-500`;
        case 'workshop':
            return `${baseStyles} bg-green-500`;
        case 'panel':
            return `${baseStyles} bg-purple-500`;
        case 'competition':
            return `${baseStyles} bg-orange-500`;
        case 'break':
            return `${baseStyles} bg-gray-500`;
        default:
            return `${baseStyles} bg-indigo-500`;
    }
};