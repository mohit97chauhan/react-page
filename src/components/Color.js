import React from 'react'  

import GoogleText from "./GoogleText";

class Color extends React.Component
{
    render()
    {

        return(
            <div style={{"font-size":90, "text-align": "center"}}>
                <GoogleText 
                    color="#3371FF"
                    letter="G"
                />
                <GoogleText 
                    color="#F3250A"
                    letter="o"
                />
                <GoogleText 
                    color="#F8F410"
                    letter="o"
                />
                <GoogleText 
                    color="#3371FF"
                    letter="g"
                />
                <GoogleText 
                    color="#15A32B"
                    letter="l"
                />
                <GoogleText 
                    color="#F3250A"
                    letter="e"
                />
                
            </div>
        )
    
        }   
    }
    export default Color;