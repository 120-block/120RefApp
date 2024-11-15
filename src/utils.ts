export function retrieveLocale() {
    try {
        return "http://localhost:5173/referal/";
    } catch (error) {
        console.error("Error retrieving locale:", error);
        return "en";
    }
}
