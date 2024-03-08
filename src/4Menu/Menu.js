import React from "react";
const Menu = ({ items }) => {
    console.log(items);
    var y = 20;
    function bar() {
        var y = 200;
        function baz() {
            console.log(y);
        }
        baz();
    }
    bar();
    return (
        <>
            <section>
                <div>
                    {
                        items.map((item) => {
                            const { id, title, img, desc, price, category } = item;
                            return (
                                <>
                                    <div key={id}>
                                        <img src={img} alt=""></img>
                                        <p>{title} <span>{price}</span></p>
                                        <p>{desc}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Menu;