import '../css_files/services.css'
import { useState } from 'react';
export const Services = () => {
    const [expanded,setExpanded]=useState([])
    
  const toggle = (index) => {
    // console.log('clicked');
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

    return(
    <div className='services-page'>
    <h5>Services</h5>
   <p id='info'>Click on any service for further details</p>
                <details name='details' className='description'>
                  <summary id='summary'>Plastering</summary>
                    <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/plastered ceiling.jpg' className={` ${expanded[0]?'larger-image':''}`} onClick={()=>{toggle(0)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Finish plastering / reskimming</li>
                          <li>Plasterboarding / Overboarding</li>
                          <li>Artex covered / patched</li>
                          <li>Internal / external sand and cement render</li>
                          <li>Internal hardwall / finish (float and set)</li>
                          <li>External through colour render (Krend)</li>
                          <li>External coloured thincoat render</li>
                          <li>Floor screeding</li>
                          <li>Damp proofing replastering</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/workpics/plastering2.jpg' className={` ${expanded[1]?'larger-image':''}`} onClick={()=>{toggle(1)}}/>
                      </div>
                    </div>
                </details>



          
                <details name='details' className='description'>
                <summary id='summary'>Tiling</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/tiling during farooq bathroom castor.jpg' className={` ${expanded[2]?'larger-image':''}`} onClick={()=>{toggle(2)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Splashbacks or full rooms</li>
                          <li>Ceramic</li>
                          <li>Porcelain</li>
                          <li>Natural stone</li>
                          <li>Resin bonded</li>
                          <li>Floors</li>
                          <li>Walls</li>
                          <li>Large pattern</li>
                          <li>Mosaics</li>
                          <li>Aqua panel / cement boarding</li>
                          <li>Tanking</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/workpics/tiled wetroom floor farooq.jpg' className={` ${expanded[3]?'larger-image':''}`} onClick={()=>{toggle(3)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description'>
                <summary id='summary'>Joinery</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/table.jpg' className={` ${expanded[2]?'larger-image':''}`} onClick={()=>{toggle(2)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Bespoke items</li>
                          <li>Internal studwork</li>
                          <li>1st and 2nd fix</li>
                          <li>Skirting / architrave</li>
                          <li>Worktop masons mitre</li>
                          <li>Kitchens, cornice / plinth</li>
                          <li>Bedrooms / wardrobes</li>
                          <li>External decking</li>
                          <li>Internal panelling</li>
                          <li>Media walls</li>
                          <li>Roofing</li>
                          <li>Loft hatches</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/outside/timber/bespoke-stairs-workshop2.jpg' className={` ${expanded[3]?'larger-image':''}`} onClick={()=>{toggle(3)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description'>
                <summary id='summary'>Upvc / Aluminium glazing</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/french doors.jpg' className={` ${expanded[2]?'larger-image':''}`} onClick={()=>{toggle(2)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Aluminium</li>
                          <li>uPVC</li>
                          <li>Windows</li>
                          <li>Doors</li>
                          <li>French / Patio doors</li>
                          <li>Bifold / trifold doors</li>
                          <li>Lintels fitted (building regs)</li>
                          <li>Conservatories</li>
                          <li>Warm roofs</li>
                          <li>Gaskets / gearing / misted units</li>
                          <li>'Window doctor' - servicing</li>
                          <li>Polycarbonate roofing</li>
                          <li>Velux / roof windows</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/workpics/uopvc door handle.jpg' className={` ${expanded[3]?'larger-image':''}`} onClick={()=>{toggle(3)}}/>
                      </div>
                    </div>
                </details>
               
                <details name='details' className='description'>
                <summary id='summary'>Plumbing</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/inside/kitchens/cambridge-conversion-utility-under-sink2.jpg' className={` ${expanded[2]?'larger-image':''}`} onClick={()=>{toggle(2)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Pipework</li>
                          <li>Radiators / valves</li>
                          <li>Leaks</li>
                          <li>Waste / soil</li>
                          <li>Kitchen plumbing</li>
                          <li>Bathroom plumbing</li>
                          <li>Water heaters</li>
                          <li>Sinks / basins / toilets</li>
                          <li>Concealed pipework</li>
                          <li>Drainage / external soil</li>
                          <li>Blockages</li>
                          <li>Lead pipes / stopcocks</li>
                          <li>Lead flashings</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/inside/bathrooms/scottys-mum-ensuite.jpg' className={` ${expanded[3]?'larger-image':''}`} onClick={()=>{toggle(3)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description'>
                <summary id='summary'>Decking / Fencing</summary>
                <p>Decking fencing</p>
                </details>

                <details name='details' className='description'>
                <summary id='summary'>Brickwork / Stonework</summary>
                <p>Brickwork</p>
                </details>

                <details name='details' className='description'>
                <summary id='summary'>Roofing</summary>
                <p>Roofing</p>
                </details>
                
             
                <details name='details' className='description'>
                <summary id='summary'>Web / App Development</summary>      
                <p>Web Development</p>
                </details>
                <details name='details' className='description'>
                <summary id='summary'>Home Automation</summary>   
                <p>Automation</p>
                </details>
  
                <details name='details' className='description'>
                <summary id='summary'>MMA/Tig Welding</summary>  
                <p>Tig/Mig/Arc Welding</p>
                </details>
                
                <hr/>
                <p>Anything else just ask...</p>

  </div>
    )
}