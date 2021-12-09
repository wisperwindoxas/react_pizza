import React from 'react'
import Header from "./components/Header/Header";
import PizzaBlock from "./components/Content/PizzaBlock";
import axios from 'axios'
import Categories from "./components/Categorys/Categories";



function AllComponent (){
    const [fetchData, setFetchData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() =>{
            setIsLoading(false)
            async function fetchData (){
                const response = await  axios.get('http://localhost:3004/pizzas')
                setFetchData(response.data)
            }
           setTimeout(() => {
               setIsLoading(true)
           }, 1000)
            return fetchData()




    }, [])



    return(

    <>
        <Header/>
        <div className="content">
            <div className="container">
                <Categories onClick={(name) => console.log(name)}/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {fetchData.map((obj) => (
                                <PizzaBlock key={obj.id} {...obj} isLoading={isLoading} />
                            ))}

                </div>
            </div>
        </div>

    </>
    )
}

export default AllComponent