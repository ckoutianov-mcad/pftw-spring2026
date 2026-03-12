export default function ButterflyComponent ({
    butterflyName, clickFocus, clickDelete
}) 
{
    return (
        <div>
            <div className="butterflyCard">{butterflyName}</div>
            <div>
                <button onClick={() => {clickFocus(butterflyName);}}> Focus </button> |  
                <button onClick={() => {clickDelete(butterflyName);}}> Delete </button>
            </div>
        </div>
    )
}