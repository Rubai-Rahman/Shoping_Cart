import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from '../Contex/Context';
import Rating from '../Rating/Rating';

const Filters = () => {
    const {productState:{byRating},productDispatch,sort} = CartState()
    return (
        <div className='filters'>
            <span className='title'> Filter Products</span>
            <span>
                <Form.Check
                inline
                label='Ascending'
                name="group1"
                type="radio"
                id={`inline-1`}
                onChange ={() =>productDispatch({
                    type:'SORT_BY_PRICE',
                    payload:"lowToHigh",
                })
                
            }
            checked = {sort === "lowToHigh"? true:false}
                />
            </span>
            <span>
                <Form.Check
                inline
                label='Descending'
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange ={() =>productDispatch({
                    type:'SORT_BY_PRICE',
                    payload:"highToLow",
                })
                
            }
            checked = {sort === "highToLow"? true:false}
                />
            </span>
             <span> 
                
             <label> Rating :  </label>
            <Rating rating ={byRating} onClick={(i) =>productDispatch({
                type:"FILTER_BY_RATING",
                payload:i+1,
            })} style={{cursor:"pointer"}} />
            </span> 
            <Button variant='light' onClick={()=> productDispatch({
                type:"CLEAR_FILTERS",
            })}>Clear Filters</Button>
        </div>
    );
};

export default Filters;