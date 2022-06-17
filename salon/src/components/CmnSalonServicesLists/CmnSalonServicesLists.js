import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch  } from "react-redux";
import { getSalonServicesLists } from '../../helpers/backend';
import { AuthGetSalonServicesGroupList } from '../../store/auth/salon/salonServiceGroupList/actions';
import CmnMultiCheckbox from '../CmnMultiCheckbox/CmnMultiCheckbox/CmnMultiCheckbox';

const CmnSalonServicesLists = (props) => {


    const dispatch = useDispatch();  
    useEffect(() => {
        dispatch(AuthGetSalonServicesGroupList());
    }, [dispatch]);

    const salonSerGroupLists = useSelector((state) => {
        return (
          state &&
          state.RedSalonServiceGrpList.salonServiceGrpList &&
          state.RedSalonServiceGrpList.salonServiceGrpList
        );
      });

      const getCallback=(val)=>{
        props.callbackvalue(val);
        //setdt(val);
        //setdt([...dt, val]);
      }

      //console.log("salonSerGroupLists",salonSerGroupLists);

      const [data, setData] = useState(
        salonSerGroupLists && salonSerGroupLists
      );
      useEffect(() => {
        setData(salonSerGroupLists && salonSerGroupLists);
      }, [salonSerGroupLists]);

   

    return (
        <div>
            <CmnMultiCheckbox callback={getCallback} data={data}/>
        </div>
    );
};

export default CmnSalonServicesLists;