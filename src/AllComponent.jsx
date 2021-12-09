import React from 'react'
import Header from "./components/Header/Header";
import Pizza_Block from "./components/Content/Pizza_Block";
import axios from 'axios'
import Categories from "./components/Categorys/Categories";


function AllComponent (){
    const [fetchData, setFetchData] = React.useState([])


    React.useEffect(() =>{
        async function fetchData (){
            const response = await  axios.get('http://localhost:3004/pizzas')
            setFetchData(response.data)
        }
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
                        <Pizza_Block key={obj.id} {...obj}/>
                    ))}
                </div>
            </div>
        </div>

    </>
    )
}

export default AllComponent