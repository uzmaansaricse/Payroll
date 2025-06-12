import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom"; 

const Accordion = ({ title, path }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg mb-2 overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-3 bg-gray-200 hover:bg-gray-300 font-medium"
                onClick={() => setIsOpen(!isOpen)}
            ><Link to={path}>{path}</Link>
                {title}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
        </div>
    );
};

const AccordionContent = () => {
    return (
        <div className="max-w-md mx-auto mt-10">
            <Accordion title="Dashboard" path="/" />
            <Accordion title="Company" path="/company" />
        </div>
    );
};

export default AccordionContent;
