import React from 'react';
import '../styles/footer.css';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className='d-flex text-center'>
                                <p>Rio de janeiro, Niterói CEP 24320-370</p>
                            </div>
                            <div className='d-flex text-center'>
                                <p>Julianamariasousamesquita@id.uff.br</p>
                            </div>
                            <div className='d-flex text-center'>
                                <a href='tel:(21)97993-1748'>+55(21)97993-1748</a>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-2 col-sm-6'>
                            <div className='row'>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                            <p className='pt-3 text-center'>Copyright&copy;
                                {new Date().getFullYear()}&nbsp;Brasil | Juliana Mesquita
                            </p>
                            <div className='d-flex justify-content-center text-center'>
                                <FacebookShareButton
                                    url={'https://www.facebook.com/'}
                                    quote={"JuhMesquitaViagens"}
                                    hashtag='#JuhMesquitaViagens'
                                >
                                    <FacebookIcon className='mx-3 rounded-circle fot-icon' size={36} />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={'https://facebook.com/'}
                                    quote={"JuhMesquitaViagens website"}
                                    hashtag='#JuhMesquitaViagens'
                                >
                                    <TwitterIcon className='mx-3 rounded-circle fot-icon' size={36} />
                                </TwitterShareButton>
                                <WhatsappShareButton
                                    url={'https://api.whatsapp.com/send?phone=5521979931748&text=Oi!'}
                                    quote={"JuhMesquitaViagens website"}
                                    hashtag='#JuhMesquitaViagens'
                                >
                                    <WhatsappIcon className='mx-3 rounded-circle fot-icon' size={36} />
                                </WhatsappShareButton>
                                <LinkedinShareButton
                                    url={'https://www.linkedin.com/in/juliana-maria-de-sousa-mesquita/'}
                                    quote={"JuhMesquitaViagens website"}
                                    hashtag='#JuhMesquitaViagens'
                                >
                                    <LinkedinIcon className='mx-3 rounded-circle fot-icon' size={36} />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;