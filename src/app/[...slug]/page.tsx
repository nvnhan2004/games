'use client'
import { Fragment } from 'react'
import CategoriesPage from "./categories-page";
import GamePage from "./game-page";

type Props = {
    params: { slug: string }
}

// const initData = {
//     id: '',
//     slug: '',
//     ten: '',
//     title: '',
//     description: '',
//     img: '',
//     so_thu_tu: 0,
//     children: [],
//     ds_games: [],
// }

export default function SlugPage({params} : Props){
    // const [cateDetail, setCateDetail] = useState<any>(initData)
    const slug = params.slug

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await categoriesApiRequest.getDetail(params.slug[0])
    //         return result.payload;
            
    //     }
    //     const result = fetchData().then(res => {
    //         setCateDetail(res)
    //         console.log(res);
            
    //     })
        
        
    // }, [])

    return(
        <Fragment>
            {slug.length === 1 &&
            <CategoriesPage slug={slug[0]} />
            }
            {slug.length === 2 &&
            <GamePage slug={slug}/>
            }
        </Fragment>
    );
}