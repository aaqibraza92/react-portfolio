import React from 'react';
import { Container } from 'reactstrap';
import AccordionLoad from './AccordionLoad';
const CmnAccordion =(props)=>{
    return(<>
        <section>
        {
            props.data.map((elem,index)=>{
                    const {id}= elem;
                    return <AccordionLoad key={"a"+index} {...elem}/>
                })
            }
         
        </section>   
        
    </>);
}
export default CmnAccordion;