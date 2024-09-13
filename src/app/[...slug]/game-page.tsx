'use client'

import gamesApiRequest from "@/apiRequests/games";
import Link from "next/link";
import { useState, useEffect, Fragment } from 'react'

type Props = {
    slug: any
}

const initData = {
    id: '',
    slug: '',
    ten: '',
    title: '',
    description: '',
    img: '',
    is_new: false,
    is_trending: false,
    is_menu: false,
    ten_category: ''
}

export default function GamePage({slug} : Props){
    const [gameDetail, setGameDetail] = useState<any>(initData)

    useEffect(() => {
        const fetchData = async () => {
            const result = await gamesApiRequest.getDetail(slug[1])
            return result.payload;
            
        }
        fetchData().then(res => {
            setGameDetail(res)
        })
    }, [])

    return(
        <Fragment>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link href="./"><i className="fa fa-home"></i> Home</Link>
                                <Link href={`./${slug[0]}`}>{gameDetail.ten_category}</Link>
                                <span>{gameDetail.ten || ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-page spad">
                <div className="container">
                    <div className="row">
                        {gameDetail.iframe &&
                        <iframe
                            src={gameDetail.iframe}
                            frameBorder={0}
                            allowFullScreen
                            width="100%"
                            height="800px"
                        />}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}