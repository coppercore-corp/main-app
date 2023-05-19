import React, { useState, useRef, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';
import { createPortal } from 'react-dom';         


const theme = createTheme();
const Container = styled('div')(({theme, has_image, horizontal_direction='ltr', enable_background=false, src_url=src_url}) => ({
    display: 'grid',
    gridTemplateColumns: (has_image)?'40% 60%':'unset',
    gap: '10px',
    direction: horizontal_direction,  
    position: "relative",
    overflow: "hidden",
    '@media (max-width: 768px)': {
        gridTemplateColumns: '100%', // Adjust the column layout for smaller screens
    },
}));
const ItemImage = styled('div')(({ theme, img_width, horizontal_direction='ltr', src_url=src_url}) => ({
    backgroundPosition: 'right top', 
    backgroundRepeat: 'no-repeat',
    marginTop: '4rem',
    position: 'relative',
    scrollSnapType: 'y mandatory',
    overflow: 'none',
    '& div': {
        position: 'relative',       
        width: '100%',
        height: '400px',
        left: (horizontal_direction=='ltr')?'-100%': (img_width * 2) ,
        transition: "left 0.5s cubic-bezier(.05,1.3,1,.68)",        
        backgroundImage: `url(${src_url})`,
        backgroundSize: 'cover',
        backgroundPosition: (horizontal_direction=='ltr')? 'center right' : 'center left',
    },
    '@media (max-width: 768px)': {
        '& div': {
            height: '100%',
            minHeight: '250px'
        }
    }
}));
const ItemDetails = styled('div')(({theme, has_image, horizontal_direction='ltr'}) =>({
    padding: '10px',
    margin: (has_image)?'unset':'0 auto',   
    '& div#first': {
        padding: '2em',
        maxWidth: 800,
        textAlign: (horizontal_direction=='ltr') ? 'left' : 'right', 
        position: "relative",
        '& p': {
            marginBottom: '2em',            
            '& b': {
                fontWidth: 'bold',
                color: red[900]
            }
        },        
    },    
    '@media (max-width: 768px)': {
        '& div#first': {
            textAlign: 'left',
            padding: '0 1em',
        }        
    },
}));

const BackgroundWall = styled('div')(({theme, src_url})=>({
    position: 'sticky',
    position: 'fixed',
    width : '100vw',
    height: '100vh',
    zIndex: '-1',
    top: 0,
    left:0,
    backgroundImage: `url(${src_url})`,
    backgroundSize: "cover",
    opacity: 0,
    transition: 'transform 0.2s ease-in',    
    transform: 'translateY(100%)',
    backgroundPosition: 'center center'  
}));
    
const Content = (props) => {
    const image_ref = useRef(null);   
    const background_wall_ref = useRef(null);
    const content_ref = useRef(null);
    const details_ref = useRef(null);

    const [imageWidth, setImageWidth] = useState(0);
    
    useEffect(()=> {
        const image = image_ref.current;
        const background_wall  = background_wall_ref.current;
        const content = content_ref.current;
        const details = details_ref.current;

        const hor_direction = props.direction || 'ltr';
        const exit_multiplier = 0.55;
        const entry_multiplier = 0.9;
        const screen_height = window.innerHeight;
        
        
        const handleScroll = () => {
            
            if(image && details && content){
                const image_bcr = image.getBoundingClientRect();
                const details_bcr = details.getBoundingClientRect();
                const content_bcr = content.getBoundingClientRect();          
                
                if(image_bcr.top <= (screen_height * entry_multiplier)){      
                    image.style.left = 0;   
                }else if(image_bcr.top > (details_bcr.height * entry_multiplier)){  
                    image.style.left = (hor_direction === 'ltr') ? `-${image_bcr.width}px` : (image_bcr.width * 2)+"px";                    
                }      
                
                if(props.enable_background && background_wall){
                    if(content_bcr.top <= (screen_height * entry_multiplier)){                    
                        background_wall.style.opacity = 0.2;
                        background_wall.style.transform = 'translateY(0)';
                        background_wall.style.transition = 'transform 0.4s ease-in';
                    }else{
                        // background_wall.style.opacity = 0;
                        background_wall.style.transform = 'translateY(-100%)';
                        background_wall.style.transition = 'transform 0.4s ease-out';
                    }      
                    
                    if((content_bcr.top + details_bcr.height) <= 0){
                        background_wall.style.transform = 'translateY(100%)';
                        background_wall.style.transition = 'transform 0.4s ease-out';
                    }
                }
               
                // console.log(content_bcr.top + (details_bcr.height * exit_multiplier));

                // if((content_bcr.top + (details_bcr.height * exit_multiplier)) < 0 && background_wall){
                //     background_wall.style.opacity = 0;
                //     background_wall.style.transform = 'translateY(-100%)';        
                // }                
                
                setImageWidth(image_bcr.width);
            }
            
        };

        window.addEventListener('scroll', handleScroll);    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);


    return (
        <ThemeProvider theme={theme}>
            <Container 
            ref={content_ref}
            has_image={(props.image)?true:false} 
            horizontal_direction={props.direction}
            enable_background={props.enable_background}
            src_url={props.image} 
            >
                { props.image ? <ItemImage horizontal_direction={props.direction} img_width={imageWidth} src_url={props.image} >
                    <div ref={image_ref}></div>
                </ItemImage> :''}
                <ItemDetails 
                ref={details_ref}
                has_image={(props.image)?true:false} 
                horizontal_direction={props.direction}
                >
                    <div id="first">{props.children}</div>
                </ItemDetails>
                { props.enable_background && <BackgroundWall ref={background_wall_ref} src_url={props.image}/> }
                
            </Container>   
        </ThemeProvider>
    );
};
export default Content;