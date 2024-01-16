export default function Mondat(props){
  return(
      <div className="mondatok">
          <p>{props.elsoResz} 
               <input type="text" onChange={props.onInputChange}/>
              {props.masodikResz} ({props.zarojel})
          </p>
      </div>
  );
}
