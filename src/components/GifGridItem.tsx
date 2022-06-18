import { imageObject } from "../helpers/modules"

const GifGridItem = ({ img }: { img: imageObject}) => {
    return (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden 2xl:max-w-2xl animate__animated animate__fadeIn'>
            <div className='2xl:flex'>
                <div className="2xl:shrink-0">
                    <img className='h-48 w-full object-cover 2xl:max-h-fit 2xl:max-w-xs' src={img.url} alt={img.title} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">GIF</div>
                    <p className="mt-2 text-slate-500">{img.title}</p>
                </div>
            </div>
        </div>
    )
}

export default GifGridItem