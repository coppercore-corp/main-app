import React, { useRef, useEffect } from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const items = [
    {
        name: "UV Light",
        description: "Bacterial Disinfectant Machine, Eliminate harmful pathogens with UV Light - your trusted partner for UV solutions.",
        image: "url(/static/images/carousel1.png)"
    },
    {
        name: "Vector",
        description: "Experience the power of UV light, Ultra Violet Effect - your source for UV lamps.",
        image: "url(/static/images/carousel2.png)"
    },
    {
        name: "Philips",
        description: "Enriching lives through meaningful innovations, Philips.",
        image: "url(/static/images/carousel3.png)"
    }
];

function Item(props)
{
    return (
        <Paper sx={{
            borderRadius:0, 
            backgroundImage:props.item.image, 
            minHeight:props.height, 
            width:'100%', 
            backgroundColor: "rgba(0, 0, 0, 0)", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position:'relative',
            backgroundSize:'cover'
            }}>

            <div className="carousel__details">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

function Home() { 
    const container_aboutus_ref = useRef(null);
    const about_details_ref = useRef(null);
    const about_img_ref = useRef(null);    
    var carousel_height = ((window.innerWidth < 610)?420:620);

    useEffect(() => {
        const container = container_aboutus_ref.current;
        const about_details = about_details_ref.current;
        const about_img = about_img_ref.current;
        const about_details_orig_rec = about_details.getBoundingClientRect()
        
        function handleScroll() {
            let y_value = window.scrollY;
            let img_width_rec = about_img.getBoundingClientRect()
            let padding = 20;

            if(about_img.style.left ==''){
                about_img.style.left = `${-img_width_rec.width + y_value * 2.5}px`;
            }else if((-img_width_rec.width + y_value * 2.5) < 0 ){
                about_img.style.left = `${-img_width_rec.width + y_value * 2.5}px`;
            }
            
            if (about_details) {
                const container_rect = container.getBoundingClientRect();
                if((parseInt(about_img.style.left) + img_width_rec.width + padding) > about_details_orig_rec.left){
                    about_details.style.position = 'absolute';
                    let new_width = (container_rect.width - (parseInt(about_img.style.left)+img_width_rec.width)) * 0.95;
                    about_details.style.width = (new_width - padding) + 'px';
                    
                    about_details.style.left = `${parseInt(about_img.style.left) + padding + img_width_rec.width}px`;
                    

                    let temp = about_details.getBoundingClientRect();
                    
                    if (temp.height > 750) {
                        container.style.height = (temp.height + 30)+'px';
                    }else{
                        container.style.minHeight = 750+'px';
                    }

                }else{
                    about_details.style.position = 'relative';
                    about_details.style.width = about_details_orig_rec.width + 'px';
                    about_details.style.left = 'unset';
                }


                
            }

        }    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <Carousel interval={7000} sx={{marginBottom:1+'em'}}  >
                {items.map( (item, i) => <Item key={i} item={item} height={carousel_height}/> )}
            </Carousel>

            <div className="container container__about --height-750 container__about--opac50p" ref={container_aboutus_ref}>  
                <div id='about-image' ref={about_img_ref} className="item about-image"></div>
                <div id='about-details' ref={about_details_ref} className="about-details">
                    <h1>About Us</h1>
                    <p>PZERVOULAKUS TRADING is a trading, single proprietorship based in Taguig City, Philippines. We have established longer and closer working relationships with our clients and suppliers, not only to provide immediate and reliable service but also to continually exceed expectations and goals. We create commercial flows, import and export products, and arrange and manage international projects with our partners. Our network allows us to integrate all these functions with our fruitful experience, and our numerous competencies enable us to respond to the needs of industries looking for a new market. We look forward to welcoming you to our company and working to develop and enhance your current business in the Philippines.
                    </p>

                    <p>With our extensive network, we are able to integrate various functions and respond to the needs of industries looking for a new market. Our mission is to meet the increasing and diversified demands of our customers, provide quality products and reliable services sourced from reputable manufacturers, and become the preferred supplier of our customers.
                    </p>

                    <p>At PZERVOULAKUS TRADING, we aim to give timely information to our customers regarding market trends and dynamics. We harness the creative energies of our people through teamwork and a transparent work environment, and we generate a high standard of commitment to our customers. We also treat our clients, suppliers, and employees with honesty and respect.
                    </p>
                </div>
            </div>

            <div className="container container__mission--opac50p">
                <div className="container__missionvission">
                    <h1>Mission / Vision</h1>
                    <p>At PZERVOULAKUS TRADING, we strive to meet the increasing and diversified demands of our customers by providing quality products and reliable services sourced from reputed manufacturers. Our aim is to become the preferred supplier of our customers, exceeding their quality requirements, and giving timely information regarding market dynamics. We value teamwork, a transparent work environment, and commitment to our clients, suppliers, and employees, treating them with honesty and respect.</p>

                    <p>Our vision at PZERVOULAKUS TRADING is to foster growth and promote enduring business ties with our clients by providing customer responsiveness and commitment as the driving force in our quest for excellence. We seek to integrate our numerous competencies to respond to the needs of industries looking for a new market, and we look forward to welcoming new partners to our company to enhance their current business in the Philippines.
                    </p>

                </div>
            </div>
           
            <div className="container container_clients">                
                <div className="container__item--big">
                    <h1>Our Valued Clients</h1>
                    <div className="container__clients">

                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client1.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">City of Dreams Manila</div>
                                        <div className="__clients__list__bar--subtitle">Experience world-class entertainment and luxury at City of Dreams Manila.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client4.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">Solaire Resorts and Casino</div>
                                        <div className="__clients__list__bar--subtitle">Live the high life and indulge in excitement at Solaire Resorts and Casino.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client2.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">Shangri-la Hotels & Resort</div>
                                        <div className="__clients__list__bar--subtitle">Unwind in paradise and indulge in luxury at Shangri-La Hotels and Resorts.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client3.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">Conti\'s Bake Shop & Restaurant</div>
                                        <div className="__clients__list__bar--subtitle">Indulge in delectable sweets and savoury dishes at Conti\'s Bake Shop & Restaurant.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client5.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">Banko Sentral ng Pilipinas</div>
                                        <div className="__clients__list__bar--subtitle">Securing the stability of the Philippine economy, Banko Sentral ng Pilipinas.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client6.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">Department of Budget Management</div>
                                        <div className="__clients__list__bar--subtitle">Ensuring efficient and transparent allocation of public funds, the Department of Budget Management.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                      
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client7.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">Presidential Security Group</div>
                                        <div className="__clients__list__bar--subtitle">Dedicated to protecting the highest office in the land, the Presidential Security Group.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="__clients__list">
                            <div className="__clients__list__item">
                                <img src="/static/images/client8.png" />
                                <div>
                                    <div className="__clients__list__bar">
                                        <div className="__clients__list__bar--title">GMA Networks</div>
                                        <div className="__clients__list__bar--subtitle">Bringing you the latest news and entertainment, GMA Networks - where you belong.</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        
                    </div>                 
                </div>
            </div>
        </>
    )
}
export default Home;