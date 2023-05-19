import React, { useRef, useEffect } from "react";
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { 
    Paper, 
    Button, 
    Skeleton, 
    Stack } from '@mui/material';
import Content from "../component/content";

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
            backgroundColor: "rgba(0, 0, 0, 0)", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position:'relative',
            backgroundSize:'cover',
            }}           
            >

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
const theme = createTheme();
const CarouselContainer = styled('div')(({theme}) =>{

});

function Home() { 
    const container_aboutus_ref = useRef(null);
    const about_details_ref = useRef(null);
    const about_img_ref = useRef(null);    
    var carousel_height = ((window.innerWidth < 610)?420:620);

    
    return (
        <>
            <ThemeProvider theme={theme}>
                <CarouselContainer>
                    <Carousel interval={7000} slidesToShow={2} sx={{marginBottom:1+'em'}}  className={"car-body"} >
                        {items.map( (item, i) => <Item key={i} item={item} height={carousel_height}/> )}
                    </Carousel>
                </CarouselContainer>
            </ThemeProvider>

            <Content
                image={"/static/images/content_aboutus.png"} >
                <h1>About Us</h1>
                <p><b>COPPERCORE</b> is a company committed to performing Electrical and Mechanical Services extended to Civil and Architectural works established in year of 2017. A group of highly knowledgeable, experienced and creative engineers and team players in the industry.</p>
                <p><b>COPPERCORE</b> was named after a cable called “Flexible Copper Core” that is used to transmit electricity and signal which we also define as a vessel of power, strength and unity.</p>
                <p><b>COPPERCORE</b> was formed to fill the demand for practical knowledge and hands on experience in Maintenance, installation and trouble shooting and design of control systems.</p>
                <p><b>COPPERCORE</b> is a leading corporation specializing in the installation of Closed Circuit Television (CCTV) systems for both residential and commercial customers. With its headquarters located in the heart of the city, the company boasts a team of highly skilled and experienced technicians who are dedicated to providing quality installation services to clients across the region.</p>
                <p>Since its inception, <b>COPPERCORE</b> has earned a reputation for delivering reliable, innovative, and cost-effective security solutions. The company's commitment to excellence and customer satisfaction has made it a trusted name in the industry, with a loyal client base that continues to grow year after year.</p>
                <p>At <b>COPPERCORE</b>, the team understands the importance of security in today's world, and they work tirelessly to ensure that their clients have access to the latest technology and products to keep their homes and businesses safe. From surveillance cameras to access control systems and alarm monitoring services, <b>COPPERCORE</b> offers a comprehensive range of solutions to meet the unique needs of each client.</p>
                <p>With a focus on professionalism, integrity, and quality, <b>COPPERCORE</b> is committed to providing exceptional customer service and technical expertise. Whether you're a homeowner looking to install a basic CCTV system or a business owner seeking to protect your premises with advanced security solutions, <b>COPPERCORE</b> has the skills, experience, and resources to deliver the results you need.</p>
            </Content>
            
            <Content
                image={"/static/images/content_mission_vision.png"}
                direction={'rtl'} >
                <h1>Mission</h1>
                <p><b>COPPERCORE</b>'s mission is to provide exceptional security solutions to our clients through the latest technology and products, while maintaining the highest standards of professionalism, integrity, and quality. We strive to exceed our clients' expectations and build long-lasting relationships based on trust and reliability.</p>
            
                <h1>Vision</h1>
                <p><b>COPPERCORE</b>'s vision is to be the leading provider of security solutions in the industry, recognized for our innovative products, exceptional customer service, and technical expertise. We aim to expand our reach and services globally, while continuing to maintain our commitment to excellence and integrity. Our ultimate goal is to ensure that our clients feel safe and secure, knowing that they have the best security solutions in place to protect their homes and businesses.</p>
            </Content>
                
           
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