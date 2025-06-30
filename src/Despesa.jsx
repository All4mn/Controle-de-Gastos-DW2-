export default function Despesa({nomeDespesa,onRemover}){
   //const data = new Date();
   
   return( 
    <li>
      {/* <p>{data}</p> */}
      <button onClick={() => onRemover(nomeDespesa.id)}>Remover</button>
    </li>
 );
}