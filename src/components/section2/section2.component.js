import React from 'react';
import Label from '../label/label.component'

const Section2= ({data, labels, formData})=>{
    return(
        <div>
            <Label data={data}/>
            <p>{labels[0]}: {formData[labels[0]]}  </p>
            <p>{labels[1]}: {formData[labels[1]]}  </p>
            <p>{labels[2]}: {formData[labels[2]]}  </p>
        </div>
    )
}

export default Section2