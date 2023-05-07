import React, { useRef, useEffect } from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const items = [
    {
        name: "On Service",
        description: "On service",
        image: "url(/static/images/carousel_onservice.png)"
    },
    {
        name: "2KVA 3 Phase Master Power AVR",
        description: "The power that maters",
        image: "url(/static/images/carousel_2kva3_master_power_avr.png)"
    },
    {
        name: "Dahua",
        description: "The brand that you can trust.",
        image: "url(/static/images/carousel_dahua_units.png)"
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
                    const displayValue = window.getComputedStyle(container_aboutus_ref.current).getPropertyValue('display');
                    
                    const about_height_padd = (displayValue=='grid')?parseInt(img_width_rec.height)+30:30;

                    if (temp.height > 550) {
                        container.style.height = (temp.height + about_height_padd)+'px';
                    }else{
                        container.style.minHeight = 550+'px';
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

            <div className="section --padd-hor-2em" ref={container_aboutus_ref}>  
                <div id='about-image' ref={about_img_ref} className="item about-image"></div>
                <div id='about-details' ref={about_details_ref} className="about-details">
                    <h1>About Us</h1>
                    <p>CopperCore is a leading corporation specializing in the installation of Closed Circuit Television (CCTV) systems for both residential and commercial customers. With its headquarters located in the heart of the city, the company boasts a team of highly skilled and experienced technicians who are dedicated to providing quality installation services to clients across the region.</p>
                    <p>Since its inception, CopperCore has earned a reputation for delivering reliable, innovative, and cost-effective security solutions. The company's commitment to excellence and customer satisfaction has made it a trusted name in the industry, with a loyal client base that continues to grow year after year.</p>
                    <p>At CopperCore, the team understands the importance of security in today's world, and they work tirelessly to ensure that their clients have access to the latest technology and products to keep their homes and businesses safe. From surveillance cameras to access control systems and alarm monitoring services, CopperCore offers a comprehensive range of solutions to meet the unique needs of each client.</p>
                    <p>With a focus on professionalism, integrity, and quality, CopperCore is committed to providing exceptional customer service and technical expertise. Whether you're a homeowner looking to install a basic CCTV system or a business owner seeking to protect your premises with advanced security solutions, CopperCore has the skills, experience, and resources to deliver the results you need.</p>
                    </div>
            </div>

            <div className="section --padd-hor-2em">
                <div className="section__mission">
                    <h1>Mission</h1>
                    <p>CopperCore's mission is to provide exceptional security solutions to our clients through the latest technology and products, while maintaining the highest standards of professionalism, integrity, and quality. We strive to exceed our clients' expectations and build long-lasting relationships based on trust and reliability.</p>
                </div>
            </div>

            <div className="section --padd-hor-2em">
                <div className="section__vision">
                    <h1>Vision</h1>
                    <p>CopperCore's vision is to be the leading provider of security solutions in the industry, recognized for our innovative products, exceptional customer service, and technical expertise. We aim to expand our reach and services globally, while continuing to maintain our commitment to excellence and integrity. Our ultimate goal is to ensure that our clients feel safe and secure, knowing that they have the best security solutions in place to protect their homes and businesses.</p>
                </div>
            </div>
           
            <div className="section section_clients">                
                <div className="section__item--big">
                    <h1>Our Valued Clients</h1>
                    <div className="section__clients">

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