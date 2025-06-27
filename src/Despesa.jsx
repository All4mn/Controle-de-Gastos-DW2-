export default function Despesa({nomeDespesa, categoria, preco, data, onRemover}){
 return( 
    <li>
        <span>{data}</span>

      {/* <span style={{textDecoration: categoria.paga? 'line-through' : 'none' }}> */}

        <h4>{nomeDespesa}</h4>
        
        <span>{categoria}</span>

        <span>{preco}</span> 
      {/* </span> */}

        <button type="button"onClick={onRemover}>+</button>       
        
   </li>
 );
}
