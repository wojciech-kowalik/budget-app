import React from 'react'
import { CategoryList as Root } from './BudgetCategoryList.css';

const CategoryItem = ({ name, onClick }) => {
    return (
        <Root onClick={onClick}>
            {name}
        </Root>
    )
}

export default CategoryItem