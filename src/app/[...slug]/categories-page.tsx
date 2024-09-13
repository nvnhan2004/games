'use client'

import categoriesApiRequest from "@/apiRequests/categories";
import Link from "next/link";
import { useState, useEffect, Fragment } from 'react'

type Props = {
    slug: string
}

type cate = {
    id: string,
    slug: string,
    ten: string,
    title: string,
    description: string,
    img: string,
    so_thu_tu: number,
    children: Array<cate>,
    ds_games: gameDetail[],
}
type gameDetail = {
    id: string,
    slug: string,
    ten: string,
    iframe: string,
    title: string,
    description: string,
    img: string,
    is_new: boolean,
    is_trending: boolean,
    is_menu: boolean,
    ten_category: string
}
const initData : cate = {
    id: '',
    slug: '',
    ten: '',
    title: '',
    description: '',
    img: '',
    so_thu_tu: 0,
    children: [],
    ds_games: [],
}

export default function CategoriesPage({slug} : Props){
    const [cateDetail, setCateDetail] = useState<cate>(initData)

    useEffect(() => {
        const fetchData = async (): Promise<cate>  => {
            const {payload} = await categoriesApiRequest.getDetail(slug)
            return payload as cate;
        }
        fetchData().then((res) => {
            setCateDetail(res as cate)
        })
    }, [])

    return(
        <Fragment>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./"><i className="fa fa-home"></i> Home</a>
                                <span>{cateDetail?.ten || ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product__page__content">
                                <div className="product__page__title">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 col-sm-6">
                                            <div className="section-title">
                                                <h4>{cateDetail?.ten}</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="product__page__filter">
                                                <p>Order by:</p>
                                                <select>
                                                    <option value="">A-Z</option>
                                                    <option value="">1-10</option>
                                                    <option value="">10-50</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {cateDetail?.ds_games?.map((game: gameDetail) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={game.id}>
                                        <div className="product__item">
                                            <div className="product__item__pic">
                                                <img src={game.img} alt="" />
                                                <div className="ep">New</div>
                                            </div>
                                            <div className="product__item__text">
                                                <h5><Link href={`${slug}/${game.slug}`}>{game.ten}</Link></h5>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                            {/* <div className="product__pagination">
                                <a href="#" className="current-page">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#"><i className="fa fa-angle-double-right"></i></a>
                            </div> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="product__sidebar">
                                <div className="product__sidebar__view">
                                    <div className="section-title">
                                        <h5>Top Views</h5>
                                    </div>
                                    <ul className="filter__controls">
                                        <li className="active" data-filter="*">Day</li>
                                        <li data-filter=".week">Week</li>
                                        <li data-filter=".month">Month</li>
                                        <li data-filter=".years">Years</li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="product__item">
                                                <div className="product__item__pic">
                                                    <img src="img/trending/trend-1.jpg"/>
                                                    <div className="ep"></div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="product__item">
                                                <div className="product__item__pic">
                                                    <img src="img/trending/trend-2.jpg"/>
                                                    <div className="ep"></div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="product__item">
                                                <div className="product__item__pic">
                                                    <img src="img/trending/trend-3.jpg"/>
                                                    <div className="ep"></div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="product__item">
                                                <div className="product__item__pic">
                                                    <img src="img/trending/trend-4.jpg"/>
                                                    <div className="ep"></div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">Fullmetal Alchemist: Brotherhood</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="product__item">
                                                <div className="product__item__pic">
                                                    <img src="img/trending/trend-5.jpg"/>
                                                    <div className="ep"></div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">Shiratorizawa Gakuen Koukou</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="product__item">
                                                <div className="product__item__pic">
                                                    <img src="img/trending/trend-6.jpg"/>
                                                    <div className="ep"></div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">Code Geass: Hangyaku no Lelouch R2</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}