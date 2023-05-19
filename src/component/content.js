import React, { useState, useRef, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';


const theme = createTheme();
const Container = styled('div')(({theme, has_image, horizontal_direction='ltr'}) => ({
    display: 'grid',
    gridTemplateColumns: (has_image)?'40% 60%':'unset',
    gap: '10px',
    direction: horizontal_direction,    
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
        padding: '0 2em',
        maxWidth: 800,
        textAlign: (horizontal_direction=='ltr') ? 'left' : 'right',
        '& p': {
            marginBottom: '2em',            
            '& b': {
                fontWidth: 'bold',
                color: red[900]
            }
        }
    },    
    '@media (max-width: 768px)': {
        '& div#first': {
            textAlign: 'left',
            padding: '0 1em',
        }        
    },
}));
    
const Content = (props) => {
    const image_ref = useRef(null);   
    const [imageWidth, setImageWidth] = useState(0);
    
    useEffect(()=> {
        const image = image_ref.current;
        const hor_direction = props.direction || 'ltr';
        const handleScroll = () => {
            let screen_height = window.innerHeight;
            
            if(image){
                let image_bcr = image.getBoundingClientRect();
                
                if(image_bcr.top <= screen_height * 0.7){                      
                    image.style.left = 0;                         
                }else if(image_bcr.top > screen_height * 0.8){
                    image.style.left = (hor_direction === 'ltr') ? `-${image_bcr.width}px` : (image_bcr.width * 2)+"px"; 
                }
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
            <Container has_image={(props.image)?true:false} horizontal_direction={props.direction}>
                { props.image ? <ItemImage horizontal_direction={props.direction} img_width={imageWidth} src_url={props.image} >
                    <div ref={image_ref}></div>
                </ItemImage> :''}
                <ItemDetails has_image={(props.image)?true:false} horizontal_direction={props.direction}>
                    <div id="first">{props.children}</div>
                </ItemDetails>
            </Container>            
        </ThemeProvider>
    );
};
export default Content;