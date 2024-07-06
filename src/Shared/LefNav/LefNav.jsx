import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LefNav = () => {
    const [categories, setCategories] =useState([]);

    useEffect(() =>{
        fetch('https://the-news-dragon-server-jhankarphero.vercel.app/categories')
        .then(res=> res.json())
        .then(data=>setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map(category =>
                   <p key={category.id}>
                     <Link to={`/categories/${category.id}`} className='text-decoration-none text-dark'>{category.name}</Link>
                   </p>
                )
            }
        </div>
    );
};

export default LefNav;