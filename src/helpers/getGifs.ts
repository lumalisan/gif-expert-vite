export const getGifs = async (category: string) => {
    console.log("Me llamo con la categoria --> " + category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=AyX9705z1a0O64CaINWifEGRRTOxKj6i`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return (gifs)
}