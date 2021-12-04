import React from 'react'
import Categories from "../Categorys/Categories";




function Content(){

    const [fetData, setFetchData] = React.useState([])

    React.useEffect(() =>{
        async function fetPizzaData () {
             await fetch('http://localhost:3004/pizza')
                 .then(response => response.json())
                 .then(data =>setFetchData(data))


        }

        return fetPizzaData
    }, [])

    setTimeout(() => {
        console.log(fetData)
    }, 3000)

    return(
        <div className="content">
            <div className="container">
                <Categories onClick={(name) => console.log(name)}/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Чизбургер-пицца</h4>
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
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/cbaea8960cf74534886d295f3450b5d8_292x292.jpeg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Пицца "Диабло"</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/270045efc717432cab468a31398254c1_292x292.png"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Пикант</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/3f81302ba956403b82bcc5d7366c74c9_292x292.jpeg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Чиззи чеддер</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a376f042-1454-48ba-ba3f-74bb65102703.jpg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Маргарита</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/3c9cdc01a9cf4215bd621562041c9d66_292x292.png"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Додо</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/c4ec493d-50dc-47df-92dc-2e91531db4e9.jpg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Четыре сезона</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/bc3b869b-c626-4773-8586-d6f3da6e4f96.jpg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">Мясная</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                    <div className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/20cb7e4f-58da-466b-a269-1c1b8b9bdb3a.jpg"
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">4 сыра</h4>
                        <div className="pizza-block__selector">
                            <ul>
                                <li className="active">тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul>
                                <li className="active">26 см.
                                </li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от 395 ₽</div>
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
                </div>
            </div>
        </div>
    )
}


export default Content;