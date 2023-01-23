import { Quote } from "../components/Quote";
import { QuoteLoading } from "../components/QuoteLoading";
import { useCounter, useFetch } from "../hooks";


export const MultipleCustomHooks = () => {
    
    const { counter, increment, decrement, reset } = useCounter( 1 )

    const { data, isLoading, error } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }` )
    
    const newData = !!data && data;
    
    return (
    
        <>
           <h1 className="text-center">BreakinBad Quotes</h1>
           <hr />
            { ( isLoading ) 
                ? <QuoteLoading/> 
                : newData.map((data)=>{
                  return (<Quote  quote={data.quote}  author={data.author} />)  
                })
            }
            <button 
                disabled = { isLoading || counter <= 1 }
                className="btn btn-primary" 
                onClick={ () => decrement()}
            >Avobe quote
            </button>
            <button 
                disabled = {isLoading}
                className="btn btn-primary" 
                onClick={ () => increment()}
            >next quote
            </button>
        </>
    )
}
