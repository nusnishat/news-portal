import React from 'react';
import { Card} from 'react-bootstrap';
import './NewsCard.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaShareAlt, FaBookmark, FaEye, FaRegStar, FaStar  } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = (props) => {
    const {_id, details, author, title, total_view, rating, image_url} = props.news;
    return (
        <div>
            <Card className='w-100 mb-4'>
                <Card.Header className='d-flex bg-light px-2 py-1'>
                    <div> <img  className='author-img' src={author.img} alt="" /> </div>
                    <div className='flex-grow-1 ms-2'>
                        <p className='author name'>{author.name} <br />
                        <small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div>
                    <FaBookmark className='me-2 text-secondary'/><FaShareAlt className='me-2 text-secondary'/>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='fw-bolder'>{title}</Card.Title>
                    <Card.Img className='' variant="top" src={image_url} />
                    <Card.Text className='mt-2'>
                      {
                        details.length<280 ? 
                        <>{details}</>: 
                        <>{details.slice(0,280)} ..... <Link className='text-decoration-none text-warning' to={`/news/${_id}`}>Read More</Link></>
                      }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex'>
                    <div className='flex-grow-1'>
                       <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar className='text-warning'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar className='text-warning'></FaStar>}
                        readonly
                        />
                        <small className="text-muted ms-2">{rating.number}</small>
                    </div>
                    <div>
                        <FaEye/><small className="text-muted ms-2">{total_view}</small>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;