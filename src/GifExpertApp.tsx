import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import decoImg from './assets/bgDeco.png';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Cars', 'Landscape', 'Computers'])

    return (
        <div className="font-sans relative flex min-h-screen flex-col justify-center antialiased text-slate-400 bg-slate-900 p-20">
            <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[108rem] flex-none flex justify-end">
                    <img src={`./${decoImg}`} alt="" className="w-[71.75rem] flex-none max-w-none"></img>
                </div>
            </div>
            <h1 className="mx-auto text-5xl font-medium pb-2">Search GIFs APP</h1>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map((item) =>
                        <GifGrid
                            key={item}
                            category={item}
                        />
                    )
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;