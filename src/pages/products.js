import React from "react";

function Products() {
    return (
        <div className="--margin-bot-1em">        
            <div className="section --padd-hor-2em">
                <h1 className="title">Ultraviolet Light Bulbs</h1>       
                <div className="section__image-list">
                    
                    <img src='/static/images/products/uv_vector_effect.png' />
                    <img src='/static/images/products/uv_water_filtration.png' />            
                    <img src='/static/images/products/uv_water_filtration_tank_diagram.png' />
                    <img src='/static/images/products/uv_water_filtration_tank_inside.png' />            
                    <img src='/static/images/products/uv_water_filtration_tank_outside.png' />            
                    <img src='/static/images/products/uv_bulb_closer_look.png' />
                    <img src='/static/images/products/uv_cubicle.png' />            
                    
                </div>
            </div>
            <div className="section --padd-hor-2em">
                <h1 className="title">Osram</h1>       
                <div className="section__image-list">                    
                    <img src='/static/images/products/osram.png' />
                </div>
            </div>
            <div className="section --padd-hor-2em">
                <h1 className="title">Dimmable Light Bulbs</h1>       
                <div className="section__image-list">                    
                    <img src='/static/images/products/dimmable_1.png' />
                    <img src='/static/images/products/dimmable_2.png' />            
                    <img src='/static/images/products/dimmable_3.png' />
                    <img src='/static/images/products/dimmable_4.png' />    
                    <img src='/static/images/products/dimmable_5.png' />    
                </div>
            </div>
            <div className="section --padd-hor-2em">
                <h1 className="title">Philips</h1>       
                <div className="section__image-list">                    
                    <img src='/static/images/products/philips_led_solar.png' />
                    <img src='/static/images/products/philips_bulb_hue.png' />
                    <img src='/static/images/products/philips_bulbs.png' />
                </div>
            </div>
        </div>
    );
}
export default Products;
