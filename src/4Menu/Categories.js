import React from "react";
const Categories = (props) => {
    console.log(props);
    return (
        <>
            <div>
                <header>Our Menu</header>
                <br></br>
                {
                    props.categories.map((i, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <button onClick={() => props.filterItems(i)}>{i}</button>
                                </div>
                            </>
                        )
                    })
                }
                <button className="category" onClick={() => props.filterItems('breakfast')}>{props.categories}</button>

            </div>
        </>
    )
}
export default Categories;