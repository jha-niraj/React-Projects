import { useState } from "react";
import data from "./data";
import { Plus, Minus } from "lucide-react";

const Accordian = () => {
    return (
        <div className="m-3 flex flex-col items-center justify-center w-[100%]">
            <div className="p-4 flex flex-col gap-4 transition-all w-[60%]">
            {
                data && data.length > 0 ? 
                    data.map((d, index) => {
                        return (
                            <AccordianDesign key={index} accordianData={d} />
                        )
                    })
                : <div>No Data Available</div>
            }
            </div>
        </div>
    )
}

const AccordianDesign = ({accordianData}) => {
    const [ accordianVisible, setAccordianVisible ] = useState(false);
    const [ singleSelection, setSingleSelection ] = useState(null);

    const handleAccordianVisibility = () => {
        setAccordianVisible(current => !current);
    }

    const handleSingleSelection = (currentId) => {
        setSingleSelection(currentId === singleSelection ? null : currentId);
    }

    // Here I am getting this error as, React is preventing an infinite loops because I am invoking the function immediately
    // instead of passing a reference. This results in an infinite loop of state updates because 'handleSingleSelection' updates the state
    // causing a re-render, and then it's called again.
    return (
        <div className="flex flex-col justify-center m-3 p-3 rounded-lg gap-3 bg-gradient-to-r from-gray-200 via-gey-400 to-gray-200">
            <button className="flex items-start justify-between cursor-pointer" onClick={() => handleSingleSelection(accordianData.id)}>
                <h1 className="font-bold text-2xl text-left">{accordianData.question}</h1>
                {
                    singleSelection === accordianData.id ? <Minus /> : <Plus />
                }
            </button>
            {/* This is the method for the Multi-Selection of the accordian at the same time.
            <div className="transition-all">
                <p className={`font-medium w-[95%] ${accordianVisible ? 'hidden' : "flex"}`}>{accordianData.answer}</p>
            </div> */}
            <div className={`transition-all text-left ${singleSelection === accordianData.id ? 'block' : 'hidden'}`}>
                <p className="font-medium w-[95%]">{accordianData.answer}</p>
            </div>
        </div>
    )
}

export default Accordian;