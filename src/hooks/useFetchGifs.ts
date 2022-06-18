import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category: string) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category).then((resp) => {
            setTimeout(() => {
                setState({
                    data: resp,
                    loading: false
                });
            }, 1000);
        });
    }, [category])

    return state;
}

export default useFetchGifs