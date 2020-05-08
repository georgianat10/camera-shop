import React, { useState } from 'react';
import {Typography, Button, Form, message, Input, Icon} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const Categories = [
    {key:1, value:"DSLR"},
    {key:2, value:"Mirroless"},
    {key:3, value:"Accessories"}
]

const {Title} = Typography;
const {TextArea} = Input;


function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)
    const [Images, setImages] = useState([])

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)

    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImage) => {
        setImages(newImage)
        console.log(newImage)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if ( !TitleValue || !DescriptionValue || !PriceValue || !CategoryValue || !Images )
            return alert("Please fill all fields.")

        const data = {
            author: props.user.userData._id,
            title : TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            category: CategoryValue
        }

        Axios.post('/api/products/uploadProduct', data)
            .then(response => {
                if(response.data.success){
                    alert("Producted uploaded")
                    props.history.push('/')
                }else{
                    alert("Failed to upload the product")
                } 
            })
    }

    return (
        <div style={{maxWidth:'700px', margin:'2rem auto' }}>
            <div style={{textAlign:'center', marginBottom:'2rem' }}>
                <Title level={2}>Upload Product</Title>
            </div>


            <Form onSubmit={onSubmit}>

                <FileUpload refreshFuction={updateImages}/>

                <br/>
                <br/>
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br/>
                <br/>
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value = {DescriptionValue}
                />
                <br/>
                <br/>
                <label>Price(RON)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                 <br/>
                <br/>
                <select onChange={onCategorySelectChange}>
                    {Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                    
                </select>

                <br/>
                <br/>
                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
    
}

export default UploadProductPage;
