import { imageObject } from '../helpers/modules';
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }: { category: string}) => {
    const { data, loading } = useFetchGifs(category)

    return (
        <>
            <h3 className='text-2xl font-medium pb-2'>{category}</h3>

            { loading ? <div className="loading mx-auto"><span></span><span></span><span></span><span></span></div> : null}

            <div className='grid grid-cols-1 gap-5 p-3 md:grid-cols-4 md:p-10'>
                {
                    data.map((img: imageObject) => {
                        return <GifGridItem key={img.id} img={img} />
                    })
                }
            </div>
        </>
    )
}

export default GifGrid