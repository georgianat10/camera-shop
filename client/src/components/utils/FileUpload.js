import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import {Icon} from 'antd';

function FileUpload(props) {

    const[Images, setImages] = useState([])

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0])

        //save the image in the node
        Axios.post('/api/products/uploadImage', formData, config)
            .then(response => {
                if(response.data.success){
                    setImages([...Images, response.data.image])
                    props.refreshFuction([...Images, response.data.image])

                }else {
                    alert('Failed to save the image in server')
                }
            })
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image)

        let newImages = [...Images]

        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFuction(newImages)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone 
                onDrop = {onDrop}
                multiple = {false}
                maxSize ={800000000000}
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{width:'300px', height:'240px', border:'1px solid grey', display:'flex', alignItems:'center', justifyContent:'center'}}
                                        {...getRootProps()}>
                        
                        <input {...getInputProps()} />
                        <Icon type='plus' style={{fontSize:'3rem'}} />

                    </div>
                )} 
            </Dropzone>

            <div style={{display:'flex', width:'350px', height:'240px', overflowX:'scroll'}}>
                {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{minWidth:'270px', width:'270px', height:'200px'}} src={'http://localhost:5000/'+image} alt={'product-img-' + index}/>
                    </div>
 
                ))}
                
            </div>

        </div>
    )
}

export default FileUpload;