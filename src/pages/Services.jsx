import '../css_files/services.css'
import { useState } from 'react';
import { ZX81 } from '../components/zx81/ZX81';
import { Helmet } from 'react-helmet';
export const Services = () => {
    const [expanded,setExpanded]=useState([])
    const [metaDescription, setMetaDescription] = useState('Our services include plastering and joinery in Peterborough.');

    const handleMeta = (description) => {
      setMetaDescription(description);
    };
    
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
        <Helmet>
        <title>Our Services</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
    <h5>Services</h5>
   <p id='info'>Click on any service for further details</p>
                <details name='details' className='description'onToggle={() => handleMeta('Professional Plastering, plasterer services in Peterborough. Quality craftsmanship and reliable service.')}>
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



          
                <details name='details' className='description' onToggle={() => handleMeta('Professional Tiler,Tiling services in Peterborough. Quality craftsmanship and reliable service.')}>
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

                <details name='details' className='description' onToggle={() => handleMeta('Professional Joinery, joiner services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Joinery</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/table.jpg' className={` ${expanded[4]?'larger-image':''}`} onClick={()=>{toggle(4)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Bespoke items</li>
                          <li>Internal studwork</li>
                          <li>1st and 2nd fix</li>
                          <li>Firedoors</li>
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
                      <img src='/images/outside/timber/bespoke-stairs-workshop2.jpg' className={` ${expanded[5]?'larger-image':''}`} onClick={()=>{toggle(5)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description' onToggle={() => handleMeta('Professional Glazing, double glazing, uPvc and aluminium services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Upvc / Aluminium glazing</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/french doors.jpg' className={` ${expanded[6]?'larger-image':''}`} onClick={()=>{toggle(6)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Aluminium</li>
                          <li>uPVC</li>
                          <li>Windows</li>
                          <li>Doors</li>
                          <li>Locks / Gearing</li>
                          <li>'Dropped' doors - adjusted / Toe and Heeled</li>
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
                      <img src='/images/workpics/uopvc door handle.jpg' className={` ${expanded[7]?'larger-image':''}`} onClick={()=>{toggle(7)}}/>
                      </div>
                    </div>
                </details>
               
                <details name='details' className='description' onToggle={() => handleMeta('Professional Plumbing, plumber services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Plumbing</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/inside/kitchens/cambridge-conversion-utility-under-sink2.jpg' className={` ${expanded[8]?'larger-image':''}`} onClick={()=>{toggle(8)}}/>
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
                      <img src='/images/inside/bathrooms/scottys-mum-ensuite.jpg' className={` ${expanded[9]?'larger-image':''}`} onClick={()=>{toggle(9)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description' onToggle={() => handleMeta('Professional Fencing, decking, paving services in Peterborough. Including Sheds, Summerhouses, turf laying. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>External works</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/cox harley hut.jpg' className={` ${expanded[10]?'larger-image':''}`} onClick={()=>{toggle(10)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Featheredge / close board</li>
                          <li>Palisade</li>
                          <li>Sheds</li>
                          <li>Summerhouses</li>
                          <li>Decking</li>
                          <li>Patios / block paviours</li>
                          <li>Turf laying</li>
                          <li>Refelting</li>
                          <li>Felt shingles</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/workpics/paving barn.jpg' className={` ${expanded[11]?'larger-image':''}`} onClick={()=>{toggle(11)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description' onToggle={() => handleMeta('Professional Brickwork, stonework services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Brickwork / Stonework</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/brickwork farooq.jpg' className={` ${expanded[12]?'larger-image':''}`} onClick={()=>{toggle(12)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Brick</li>
                          <li>Stone</li>
                          <li>Block</li>
                          <li>Conservation / Lime</li>
                          <li>Repointing</li>
                          <li>Patching</li>
                          <li>Retaining walls</li>
                          <li>Extensions</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/workpics/blockwork farooq.jpg' className={` ${expanded[13]?'larger-image':''}`} onClick={()=>{toggle(13)}}/>
                      </div>
                    </div>
                </details>

                <details name='details' className='description' onToggle={() => handleMeta('Professional Property maintenance, landlord, hmo, call out services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Landlord / Property management</summary>
                <div className='open'>
                      <div className='image-1'>
                      <img src='/images/workpics/blockage.jpg' className={` ${expanded[14]?'larger-image':''}`} onClick={()=>{toggle(14)}}/>
                      </div>
                      <div className='text-column'>
                        <ul>
                          <li>Reactive maintenance</li>
                          <li>Same day service</li>
                          <li>Emergency call out</li>
                          <li>Hmo conversions</li>
                        </ul>
                      </div>
                      <div className='image-2'>
                      <img src='/images/inside/misc_internal/35mmfiredoor-woodston.jpg' className={` ${expanded[15]?'larger-image':''}`} onClick={()=>{toggle(15)}}/>
                      </div>
                    </div>
                </details>
                
             
                <details name='details' className='description' onToggle={() => handleMeta('Professional Web development, app development services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Web / App Development</summary> 
                <div>
                  <div className='zx'>     
                    <ZX81/>
                    
                  </div>  
                  </div>
                </details>
                <details name='details' className='description' onToggle={() => handleMeta('Professional Home automation services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>Home Automation</summary>   
                <p>Automation</p>
                </details>
  
                <details name='details' className='description' onToggle={() => handleMeta('Professional Mig welding, Tig welding, Arc welding services in Peterborough. Quality craftsmanship and reliable service.')}>
                <summary id='summary'>MMA/Tig Welding</summary>  
                <p>Tig/Mig/Arc Welding</p>
                </details>
                
                <hr/>
                <p>Anything else just ask...</p>

  </div>
    )
}