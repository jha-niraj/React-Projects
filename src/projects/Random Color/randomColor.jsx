import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleCreateRandomHEXColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }
    const handleCreateRandomRGBColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRGBColor()
        else handleCreateRandomHEXColor()
    }, [typeOfColor])

    return (
        <div className="flex flex-col gap-72 h-screen" style={{ backgroundColor: color }}>
            <div className={`flex m-1 items-start justify-start transition-colors`}>
                <Link to="/" className="bg-black text-white p-2 rounded-lg">Home Page</Link>
            </div>
            <div className="flex items-center flex-col justify-center">
                <div>
                    <button onClick={() => setTypeOfColor('hex')} className="h-12 bg-gray-400 p-3 mt-4 rounded-lg font-bold hover:text-white transition-all">Create HEX Color</button>
                    <button onClick={() => setTypeOfColor('rgb')} className="h-12 bg-gray-400 p-3 mt-4 rounded-lg font-bold hover:text-white transition-all">Create RGB Color</button>
                    <button onClick={typeOfColor === 'hex' ? handleCreateRandomHEXColor : handleCreateRandomRGBColor} className="h-12 bg-gray-400 p-3 mt-4 rounded-lg font-bold hover:text-white transition-all">Generate Random Color</button>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-4xl">{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
                    <h1 className="font-medium text-2xl">{color}</h1>
                </div>
            </div>

        </div>
    )
}

export default RandomColor;