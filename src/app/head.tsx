'use client'

import categoriesApiRequest from "@/apiRequests/categories";
import Link from "next/link";
import { useState, useEffect } from 'react'

type cate = {
    id: string,
    slug: string,
    ten: string,
    title: string,
    description: string,
    img: string,
    so_thu_tu: number,
    children: cate[],
    ds_games: Array<cate>,
}

export default function Head(){
    
    const [dataCate, setDataCate] = useState<cate[]>()

    useEffect(() => {
        const fetchData = async () : Promise<cate[]> => {
            const { payload } = await categoriesApiRequest.getCateMenu()
            return payload as cate[];
            
        }
        fetchData().then((res) => {
            setDataCate(res)
        })
        
        
    }, [])
    
    // const cateMenu = payload.data
    // console.log(cateMenu);

    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <Link href="./">
                                <img src="img/logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    {/* <li><Link href="./">Homepage</Link></li>
                                    <li><Link href="./categories.html">Categories <span className="arrow_carrot-down"></span></Link>
                                        <ul className="dropdown">
                                            <li><Link href="./categories.html">Categories</Link></li>
                                            <li><Link href="./anime-details.html">Anime Details</Link></li>
                                            <li><Link href="./anime-watching.html">Anime Watching</Link></li>
                                            <li><Link href="./blog-details.html">Blog Details</Link></li>
                                            <li><Link href="./register">Sign Up</Link></li>
                                            <li><Link href="./login">Login</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="./blog.html">Our Blog</Link></li>
                                    <li><Link href="#">Contacts</Link></li> */}
                                    {dataCate?.map((cate: cate) => (
                                        <li key={cate.id}>
                                            <Link href={cate.slug}>{cate.ten}{cate.children.length > 0 &&<span className="arrow_carrot-down"></span>}</Link>
                                            {cate.children.length > 0 &&
                                            <ul className="dropdown">
                                                {cate.children?.map((cateChildren: cate) => (
                                                    <li key={cateChildren.id}><Link href={`/${cateChildren.slug}`}>{cateChildren.ten}</Link></li>
                                                ))}
                                            </ul>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="header__right">
                            <Link href="#" className="search-switch"><span className="icon_search"></span></Link>
                            <Link href="/login"><span className="icon_profile"></span></Link>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    )
}