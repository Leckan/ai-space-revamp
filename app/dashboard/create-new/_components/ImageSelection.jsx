'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file, setFile] = useState();


    const onFileSelected = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])
    }



    return (
        <div>
            <label>Select Image of your room</label>
            <div>
                <label htmlFor='upload-image'>
                    <div className={`p-28 border rounded-xl border-dotted flex justify-center border-primary
                     bg-slate-200 cursor-pointer hover:shadow-lg ${file&& 'p-0 bg-white' }`}>
                        {!file ? <Image src={'/imageupload.png'} width={70} height={70} alt='image upload'></Image>
                            : <Image src={URL.createObjectURL(file)} width={500} height={500}
                                className='w-auto h-auto object-cover' alt='Image upload'></Image>}
                    </div>
                </label>
                <input type='file' accept='image/*' id='upload-image'
                    style={{ display: 'none' }}
                    onChange={onFileSelected} ></input>
            </div>
        </div>
    )
}

export default ImageSelection