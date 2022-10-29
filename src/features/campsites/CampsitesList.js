import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { Col , Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { render } from '@testing-library/react';


const CampsiteList = ()=>{
return(
  <Row className="prop ms-auto">
    {CAMPSITES.map((campsite)=>{
        
        return(
            <Col md='5' className='m-4' key={campsite.id}>
                <CampsiteCard campsite={campsite}/>

            </Col>

        )
    })};

  </Row>

)


}


export default CampsiteList;