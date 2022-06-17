import React, { useEffect, useState } from "react";
import GButton from "../../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";
import { addSalonServices } from '../../../../helpers/backend/salon'
import { notify } from "react-notify-toast";
const CreateSalonServiceList = ({services}) => {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const [dataState, setDataState] = useState(null);
    var initialFormState = {
        serviceid: '',
        name: '',
        minprice: 0,
        minduration: 0,
        pricingOption:[]
      }
    const [selectedService, setSelectedService] = useState(initialFormState);
    useEffect(() => {
        setDataState(services)
      }, [services]);
    
      const pricingOptionChanged = (pricing) => {
        dataState && dataState.map((grouprow, ind) => {
            grouprow.services && grouprow.services.map(async(servicerow, sreind) => {
                var finalPricing = [];
                if(servicerow.serviceid === pricing.serviceid )
                {
                    var addprice = {
                        name : "",
                        duration : 0,
                        saleprice :0,
                        price : 0
                    }
                    await servicerow.pricingOption.push(addprice)
                    await finalPricing.push(servicerow)
                    setSelectedService(servicerow)
                }
            })
        })
        setDataState(dataState)
      };

    const handleInputChange = (event, groupindex, serviceindex, pricingindex) => {
        const { name, value } = event.target
        dataState && dataState.map((grouprow, ind) => {
            grouprow.services && grouprow.services.map(async(servicerow, sreind) => {
                servicerow.pricingOption && servicerow.pricingOption.map(async(pricingrow, priceind) => {
                    if(ind === groupindex && sreind === serviceindex && priceind === pricingindex)
                    {
                        var finalPricing = {
                            serviceid: servicerow.serviceid,
                            name:  servicerow.name,
                            minprice: 0,
                            minduration: 0,
                            pricingOption:servicerow.pricingOption,
                        };
                        setSelectedService(finalPricing)
                        return pricingrow[name] = value
                    }
                })
            })
        })
        setDataState(dataState)
    }
    const deletePricingOptions = async(service, pricingintex) => {
        const updatedRowsState = await Promise.all(dataState.map(async (row) => {
            const updatedrowservice = await Promise.all(row.services.map(async (rowservice) => {
                if(rowservice.serviceid === service.serviceid)
                {
                    const filteredSeries = rowservice.pricingOption.filter((s,key) => key !== pricingintex);
                    setSelectedService({
                        ...rowservice,
                        pricingOption: filteredSeries,
                    })
                    return {
                        ...rowservice,
                        pricingOption: filteredSeries,
                    };
                }
                return rowservice
            }))
            return {
                ...row,
                services: updatedrowservice,
            };
        }));
        setDataState(updatedRowsState);
    }

    const handleFormSubmit = () => {
        console.log(selectedService)
        addSalonServices(selectedService).then((res) => {
            console.log(res)
            if (res.status === 200) {
              let myColor = { background: "#4bb543", text: "#FFFFFF" };
              notify.show(res.message, "custom", 5000, myColor);
            }
            if (res.status === 202) {
              let myColor = { background: "#ff385c", text: "#FFFFFF" };
              notify.show("Please fill required fields", "custom", 5000, myColor);
            }
        });
    }
  return (
    <>
    { dataState && dataState.map((group, index) => {
        return(<>
        <table className="table notablePadding quoteTable">
            <thead>
            <tr>
                <th className="text-capitalize">
                {group && group.name ? group.name :  ''}
                </th>
                <th>Duration</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            { group && group.services.map((service, key) => {
               return(<>
               <tr className="">
                    <td>
                        <input
                        id="quoteitemdescription"
                        type="text"
                        className="inputStyleLine text-capitalize"
                        name="name"
                        placeholder="Name"
                        value={service.name}
                        onChange={(e) => handleInputChange(e, index, key)} 
                        />
                    </td>

                    <td>
                        {/* <input
                        type="number"
                        name="minduration"
                        className="inputStyleLine text-capitalize"
                        placeholder="Duration"
                        value={service.minduration}
                        onChange={(e) => handleInputChange(e, index, key)} 
                        readOnly={true}
                        /> */}
                    </td>
                    <td>
                        {/* <input
                        type="number"
                        name="minprice"
                        className="inputStyleLine text-capitalize"
                        placeholder="Price"
                        value={service.minprice}
                        onChange={(e) => handleInputChange(e, index, key)} 
                        readOnly={true}
                        /> */}
                    </td>
                </tr>
               {
                   service.pricingOption && service.pricingOption.map((prices, pricekey) => {
                        return (<>
                        <tr className="">
                            <td>
                                <input
                                id="quoteitemdescription"
                                type="text"
                                className="inputStyleLine text-capitalize"
                                name="name"
                                placeholder="Name"
                                value={prices.name}
                                onChange={(e) => handleInputChange(e, index, key, pricekey)} 
                                />
                            </td>

                            <td>
                                <input
                                type="number"
                                name="duration"
                                className="inputStyleLine text-capitalize"
                                placeholder="Duration"
                                value={prices.duration}
                                onChange={(e) => handleInputChange(e, index, key, pricekey)} 
                                />
                            </td>
                            <td>
                                <input
                                type="number"
                                name="price"
                                className="inputStyleLine text-capitalize"
                                placeholder="Price"
                                value={prices.price}
                                onChange={(e) => handleInputChange(e, index, key, pricekey)} 
                                />
                            </td>
                            <td>
                                <a onClick={(e) => deletePricingOptions(service, pricekey)}>delete</a>
                            </td>
                            </tr>
                        </>)
                   })
               }
                
                    <tr className="noBorder">
                    <td className="noBorder w-100">
                        <button
                        style={{
                            background: "transparent",
                            border: "2px solid #37A3D2",
                            color: "#37A3D2",
                            borderRadius: "7px",
                            padding: "8px 20px",
                        }}
                        
                        >
                        <span>
                            <svg
                            id="Group_63"
                            data-name="Group 63"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            >
                            <path
                                id="Line_4"
                                data-name="Line 4"
                                d="M.563,14H-.75V0H.563Z"
                                transform="translate(7.094)"
                                fill="#37a3d2"
                            />
                            <path
                                id="Line_5"
                                data-name="Line 5"
                                d="M1.313,14H0V0H1.313Z"
                                transform="translate(14 6.344) rotate(90)"
                                fill="#37a3d2"
                            />
                            </svg>
                        </span>
                        <span style={{ marginLeft: "10px" }} onClick={(e) => pricingOptionChanged(service)}>Add pricing option</span>
                        </button>
                    </td>
                    <td className="noBorder w-100">
                        <GButton className="text-capitalize" onClick={handleFormSubmit} >{t("Save")}</GButton>
                    </td>
                    </tr>
                </>)
            })
            }
            </tbody>
        </table>
        </>)
    }) }
    </>
  )
}
export default CreateSalonServiceList