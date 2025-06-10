import { DashBoard } from "../Descrtiption/Description";


    

export const ConstupDateFeedback = ({click, setClick}) => {   
    const handleClick = (type) => {
        setClick({ ...click, [type]: click[type] + 1 })
    };
    return (
        <>
            <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-xl shadow w-full max-w-md mx-auto">
                <DashBoard />
                <div className="flex gap-4">
                    <button onClick={() => handleClick("good")} className="bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 transition">
                        Good
                    </button>
                    <button onClick={() => handleClick("neutral")} className="bg-yellow-500 text-white px-5 py-2 rounded-xl hover:bg-yellow-600 transition">
                        Neutral
                    </button>
                    <button onClick={() => handleClick("bad")} className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition">
                        Bad
                    </button>
                    <button className="bg-gray-400 text-white px-5 py-2 rounded-xl hover:bg-gray-500 transition">Reset</button>

                </div>
            </div>
        </>
    );
}