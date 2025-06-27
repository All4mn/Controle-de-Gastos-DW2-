export default function despesa({nomeDespesa,onRemover}){ // (categoria, gasto, data)
   const data = new Date();
   
   return( 
    <li>
      <p>{data}</p>
      <button onClick={() => onRemover(nomeDespesa.id)}>Remover</button>
    </li>
 );
}