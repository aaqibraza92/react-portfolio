import React from 'react';
import { Container } from 'reactstrap';
import AccordionLoad from './AccordionLoad';
const CmnAccordion =(props)=>{
    return(<>
        <section>
        <Container>
        {
            props.data.map((elem)=>{
                    const {id}= elem;
                    return <AccordionLoad key={id} {...elem}/>
                })
            }
        </Container>
         
        </section>   
        
    </>);
}
export default CmnAccordion;