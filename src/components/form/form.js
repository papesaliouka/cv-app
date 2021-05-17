import React from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';
import Scroll from '../scroll/scroll.component';
import Label from '../label/label.component';
 const Form = ({sections, handleSubmit})=>{
     return(
         <div>
             <Scroll>
                <form className="pa4 black-80">
                    <Label data={sections[0].title}/>
                    <Input name={sections[0].labels[0]} handleSubmit={handleSubmit} /> 
                    <Input name={sections[0].labels[1]} handleSubmit={handleSubmit} /> 
                    <Input name={sections[0].labels[2]} handleSubmit={handleSubmit} />
                    <Label data={sections[1].title}/>
                    <Input name={sections[1].labels[0]} handleSubmit={handleSubmit} /> 
                    <Input name={sections[1].labels[1]} handleSubmit={handleSubmit} />
                    <Input name={sections[1].labels[2]} handleSubmit={handleSubmit} /> 
                    <Label data={sections[2].title}/>    
                    <Input name={sections[2].labels[0]} handleSubmit={handleSubmit} /> 
                    <Input name={sections[2].labels[1]} handleSubmit={handleSubmit} />
                    <Input name={sections[2].labels[2]} handleSubmit={handleSubmit} /> 
                    <Button edit/>
                </form>
             </Scroll>
         </div>
     );
 }

 export default Form