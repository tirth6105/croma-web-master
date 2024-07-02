import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { Add_Product } from "../redux/Action";
import { Container } from "react-bootstrap";

const Addproduct = () => {


    let [title, setTitle] = useState();
    let [price, setPrice] = useState();
    let [img, setImg] = useState();
    let [category, setCategory] = useState("mobile");
    let [brand, setBrand] = useState();
    let [descripation, setDiscripation] = useState();
    let [seller, setSeller] = useState();
    let dispatch = useDispatch();
    let location = useNavigate()

    const HandleSubmit = (e) => {
        e.preventDefault();
        
        let data = {
            title: title,
            img: img,
            price: price,
            category: category,
            brand:brand,
            descripation:descripation,
            seller:seller
        };
        if(data.descripation.length<=100){
            alert("please enter descripation 100 chater")
        }
        else{
            dispatch(Add_Product(data));
            alert("product add successfully")
        }
    };
    return (
        <>
            <section className="bg-black py-4">
                <Container>
                    <div className="d-flex pb-4 justify-content-between ">
                        <h4 className="text-uppercase text-white">new product</h4>
                        <button onClick={() => location('/')} className='border-0 bg-transparent'><p className="fw-bold text-white">X</p></button>
                    </div>
                    <div className="col-10 mx-auto bg-white p-5 rounded box-shadow">
                        <form onSubmit={HandleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="my-4">
                                        <p className="m-0 text-capitalize">prodcut name</p>
                                        <input type="text" placeholder="Prodcut Name" onChange={(e) => setTitle(e.target.value)} className='bg-gray my-2 border-2 border-secondary shadow col-12 p-2 rounded' />
                                    </div>
                                    <div className="my-4">
                                        <p className="m-0 text-capitalize">select prodcut category</p>
                                        <select name="items" className="p-2 col-12 rounded bg-gray shadow border-secondary border-1" onChange={(e) => setCategory(e.target.value)}>
                                            <option value="mobile">mobile</option>
                                            <option value="television">television</option>
                                            <option value="laptop">laptop</option>
                                            <option value="headphones & earphones">headphones & earphones</option>
                                            <option value="refrigerators">refrigerators</option>
                                            <option value="home theatres & soundbars">home theatres & soundbars</option>
                                            <option value="air conditioner">air conditioner</option>
                                            <option value="washing machines">washing machines</option>
                                            <option value="kitchen appliances">kitchen appliances</option>
                                            <option value="cameras">cameras</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                    <div className="my-4">
                                        <p className="m-0 text-capitalize">prodcut brand</p>
                                        <input type="text" placeholder="Prodcut Name" onChange={(e) => setBrand(e.target.value)} className='bg-gray my-2 border-2 border-secondary shadow col-12 p-2 rounded' />
                                    </div>
                                    <div className="my-4">
                                        <p className="m-0 text-capitalize">prodcut img</p>
                                        <input type="url" placeholder="Prodcut_Img" onChange={(e) => setImg(e.target.value)} className='bg-gray my-2 border-secondary border-2 shadow col-12 p-2 rounded' />
                                    </div>
                                    <div className="my-4">
                                        <p className="m-0 text-capitalize">prodcut price</p>
                                        <input type="number" placeholder="Prodcut_Price" onChange={(e) => setPrice(e.target.value)} className='bg-gray my-2 border-secondary border-1 shadow col-12 p-2 rounded' />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="my-4">
                                        <p className="m-0 text-capitalize">prodcut description</p>
                                        <textarea name="prodcut-description"  onChange={(e)=>setDiscripation(e.target.value)} rows={9} className="mt-2 border-secondary border-1 col-12 p-2 rounded"></textarea>
                                    </div>
                                    <div className="my-4">
                                        <p className="m-0 pb-1 text-capitalize">seller name</p>
                                        <input type="text" placeholder="seller Name" onChange={(e) => setSeller(e.target.value)} className='bg-gray my-2 border-2 border-secondary shadow col-12 p-2 rounded' />
                                    </div>
                                </div>
                                <input type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Addproduct