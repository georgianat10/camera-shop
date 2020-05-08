import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Icon, Row, Col, Card} from 'antd';
import ImageSlider from '../../utils/ImageSlider'


const {Meta} = Card;
// import { FaCamera } from "react-icons/fa";

function LandingPage() {

    const [Products, setProducts] = useState([]);

    useEffect(() => {

        Axios.post('/api/products/getProducts', )
            .then(response => {
                if(response.data.success){
                    setProducts(response.data.products)

                    console.log("SAlut" +Products)
                }else {
                    alert('Failed to fetch products from database')
                }
            })

    })

    const renderCards = Products.map((product, index) =>{
        return <Col lg={6} md={8} xs={24}>
            <Card 
                hoverable={true}
                cover = {<ImageSlider images={product.images}/>}>
                <Meta
                    title ={product.title}
                    description={'$' + product.price}
                >
                
                </Meta>

            </Card>
        
        </Col>

    })

    return (
        <div style={{width:'75%', margin: '3rem auto'}}>
            <div style={{ textAlign:'center'}}>
                <h2>Let's take pictures! <Icon type="camera"></Icon></h2>
            </div>

            {/* Filter */}

            {/* Serch */}

            {Products.length === 0 ? 
                <div style={{display:'flex', height: '300px', justifyContent: 'center', alignItems:'center'}}>
                    <h2>No products yet</h2>
                </div>:
                <div>
                    <Row gutter={[16, 16]}> {/*Row margin*/}
   
                        {renderCards}
                    </Row>
                </div>   
            }

            <br/><br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button>Load More</button>
            </div>

            
        </div>
    )
}

export default LandingPage
