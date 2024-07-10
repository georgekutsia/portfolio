import React from 'react'
import CloseAllComponent from '../close/CloseAllComponent'
import { Images1} from "../../components";


function ImagesComp({closeComponent}) {
  return (
    
    <div>
    <CloseAllComponent setComponent={closeComponent}/>
    <Images1/>
    </div>
  )
}

export default ImagesComp