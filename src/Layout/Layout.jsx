/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { catgoriesName } from "../api/api";
import { NavLink } from "react-router-dom";

function Layout (props) {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        (async () => {
            const  res = await catgoriesName();
            
            setCategories(res);
            console.log(`sala ${categories}`)

        })()
    }
    ,[])
  return (
    <div>

             <div>
                <div className="navbar fixed z-50 top-0 shadow bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink key='10' to={'/'}>হোম</NavLink>  </li>
                                {
                                    categories.map((item,i)=>{
                                        return  <li ><NavLink key={i.toString()} to={'/byCategory/'+item['id']}>{item['name']}</NavLink> </li>
                                    })
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">MR-BLOG</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink  to={'/'}>হোম</NavLink>  </li>
                            {
                                categories.map((item,i)=>{
                                    console.log(item['name']);
                                    return <li><NavLink key={i.toString()} to={'/byCategory/'+item['id']}>{item['name']}</NavLink>  </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div> 

           

            {props.children}

        </div>
  );
}

export default Layout;

