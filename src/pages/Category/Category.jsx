import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNews from '../Home/CategoryNews';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.map(news => <CategoryNews
                key={news._id}
                news={news}
                ></CategoryNews>)
            }
        </div>
    );
};

export default Category;