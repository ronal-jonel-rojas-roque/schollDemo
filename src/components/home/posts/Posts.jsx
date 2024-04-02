import React, { useState } from 'react'
import "./post.css"
import img1 from "../../../assets/images/users/docentes/hombre/dh01.jpg"
import img2 from "../../../assets/images/users/docentes/hombre/dh02.jpg"
import { BiWorld } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
export default function Posts() {
    const loremIpsum = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eum beatae ea exercitationem temporibus at quia cumque ab. Adipisci eius beatae eveniet tempora laudantium deserunt dolores tenetur iste temporibus nemo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eum beatae ea exercitationem temporibus at quia cumque ab. Adipisci eius beatae eveniet tempora laudantium deserunt dolores tenetur iste temporibus nemo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eum beatae ea exercitationem temporibus at quia cumque ab. Adipisci eius beatae eveniet tempora laudantium deserunt dolores tenetur iste temporibus nemo.";
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const getTextToShow = () => {
        return showFullText ? loremIpsum : `${loremIpsum.substring(0, 120)}...`;
    };

    return (
        <div>
            <div className='posts'>
                <article className="article">
                    <div className="post">
                        <div className='head-post'>
                            <div className='profile-post-icon'>
                                <img className="profile-icon" src={img1} />
                                <aside>
                                    <div className="user-post">User N1</div>
                                    <div className="notification">
                                        <div className="hour-notification">17 h.</div>
                                        <div className='icon-notification'>
                                            <BiWorld />
                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <div className="update">Actualizo su foto de perfil </div>
                            <div className='close'>
                                <IoMdClose />
                            </div>
                        </div>

                        <div className="pix">
                            <img src={img1} className="img-container-post" />
                        </div>
                    </div>

                    <div className="post">
                        <div className='head-post'>
                            <div className='profile-post-icon'>
                                <img className="profile-icon" src={img2} />
                                <aside >
                                    <div className="user-post">User N2</div>
                                    <div className="notification">
                                        <div className="hour-notification">1 min.</div>
                                        <div className='icon-notification'>
                                            <BiWorld />
                                        </div>
                                    </div>
                                </aside> 
                            </div>
                            <div className='close'>
                                <IoMdClose />
                            </div>
                        </div>
                        <div className='title-post'>
                            <p className='detail-title-post'>
                                {getTextToShow()}
                                {loremIpsum.length > 120 && (
                                    <button onClick={toggleText} className="read-more">
                                        {showFullText ? "Ver menos" : "Ver más"}
                                    </button>
                                )}
                            </p>
                        </div>
                        <div className="pix">
                            <img src={img2} className="img-container-post" />
                        </div>
                    </div>

                </article>
            </div>
        </div>
    )
}