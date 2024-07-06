import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './News.css'
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from '../Editors/EditorsInsight';

const News = () => {
    const news = useLoaderData();

    return (
        <div>
            <Card className='w-100 mb-4'>
                <Card.Body>
                    <Card.Img className='image' variant="top" src={news.image_url} />
                    <Card.Title className='fw-bolder mt-2 me-4'>{news.title}</Card.Title>
                    <Card.Text className='mt-2 text-secondary'>
                         {news.details}
                    </Card.Text>
                    <Link to={`/categories/${news.category_id}`}><button className='btn btn-danger'><FaArrowLeft></FaArrowLeft> All News in this Category</button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;