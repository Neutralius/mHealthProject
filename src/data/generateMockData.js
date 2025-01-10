// Mock Data für Visualisierungen bis wir real data haben
// Liste mit Berliner Krankenhäusern
// Quelle: https://medium.com/@biplavmazumdar5/mocking-data-in-react-js-or-javascript-3f278ba7f550

import formatWartezeit from "./formatWartezeit.js";
import listeKrankenhaeuser from "./listeKrankenhaeuser.js";

const generateMockData = () => {
    // Quelle: https://react.dev/learn/rendering-lists
    return listeKrankenhaeuser.map((krankenhaus) => {
        const wartezeit = Math.floor(Math.random() * 180 + 20);
        return {
        ...krankenhaus,
        Patienten: Math.floor(Math.random() * 30 + 10),
        Wartezeit: formatWartezeit(wartezeit)
        };
    });
};

export default generateMockData;

