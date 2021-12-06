import React from 'react'
import axios from 'axios'
import Categories from "../Categorys/Categories";





function Content(){

    const [fetchData, setFetchData] = React.useState([])


    React.useEffect(() =>{
       async function fetchData (){
            const response = await  axios.get('http://localhost:3004/pizza')
            setFetchData(response.data)
        }
        return fetchData()

    }, [])







    return(
        <div className="content">
            <div className="container">
                <Categories onClick={(name) => console.log(name)}/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {fetchData.map(pizzaItem => {
                        return (

                            <div key={pizzaItem.name} className="pizza-block">
                                <img
                                    className="pizza-block__image"
                                    src={pizzaItem.img}
                                    alt="Pizza"
                                />
                                <h4 className="pizza-block__title">{pizzaItem.name}</h4>
                                <div className="pizza-block__selector">
                                    <ul>
                                        <li className="active">тонкое</li>
                                        <li>традиционное</li>
                                    </ul>
                                    <ul>
                                        <li className="active">26 см.</li>
                                        <li>30 см.</li>
                                        <li>40 см.</li>
                                    </ul>
                                </div>
                                <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">от {pizzaItem.price} ₽</div>
                                    <div className="button button--outline button--add">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <span>Добавить</span>
                                        <i>2</i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}


export default Content;