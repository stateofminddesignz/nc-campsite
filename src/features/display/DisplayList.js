import {Row,Col} from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
//import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import {selectFeaturedPromotion} from '../promotions/PromotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {

   const items = [selectFeaturedCampsite(), selectFeaturedPromotion() , selectFeaturedPartner() ]


   return(
    <Row>
        {items.map((item,idx) => {
            
            return(
                //Implemented conditional rendering in DisplayList
                item &&(
                <Col md className='m-1' key={idx}>
                    <AnimatedDisplayCard item={item}/>
                </Col>

            )
            );
        } )}

    </Row>

   )

}


export default DisplayList;