
import { Col , Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

import { selectAllCampsites } from './campsitesSlice';


const CampsiteList = ()=>{

const campsites = selectAllCampsites();
return(
  <Row className="prop ms-auto">
    {campsites.map((campsite)=>{
        
        return(
            <Col md='5' className='m-4' key={campsite.id}  >
                <CampsiteCard campsite={campsite}/>

            </Col>

        )
    })};

  </Row>

)


}


export default CampsiteList;