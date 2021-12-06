import React from 'react'
import SortPopup from "./SortPopup";
import FilterContext from "../context";



const Categories = ({onClick}) => {
    const {setFilter} = React.useContext(FilterContext)

    const category = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const [isActive, setIsActive] = React.useState(0)

    const onClickToggle = (index) =>{
        setIsActive(index)
        setFilter(category[index])
    }

    return(
        <div className="content__top">
            <div className="categories">
                <ul>

                    {category.map((item,index) => {
                        return <li
                            key={(item)}
                            onClick={() => onClickToggle(index)}
                            className={isActive  === index ? 'active': "" }
                            >
                            {item}
                        </li>
                    })}
                </ul>
            </div>
            <SortPopup/>
        </div>
    )
}

export default Categories;