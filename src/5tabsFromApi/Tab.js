import React, { useContext, useEffect, useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { userContext } from "../context/UserComponent";
const url = 'https://course-api.com/react-tabs-project'
function Tab() {
    /****some practice on context and useContext hook  */
    const context = useContext(userContext);
    console.log(context.name);
    //think recursively
    let user = {
        name: "hari",
        address: {
            personal: {
                city: "hyd",
                pincode: "5989"
            },
            occupation: {
                city: "hyd",
                pincode: "5989"
            }
        }

    }
    let finalObj = {};
    let magic = (obj, parent) => {
        for (let key in obj) {

            if (typeof (obj[key]) === "object") {
                magic(obj[key], parent + " _ " + key);
                // `${parent}_${obj[key]}`;
            } else {

                finalObj[parent + " _ " + key] = obj[key];
            }
        }
    }
    const use = magic(user, "user");
    console.log(use);
    // till here think recursively
    function rangeOfNumbers(startNum, endNum) {
        console.log(startNum, endNum);
        if (endNum < startNum) {
            return [];
        } else {
            const numbers = rangeOfNumbers(startNum, endNum - 1);
            console.log(numbers, endNum);
            // console.log(numbers);
            numbers.push(endNum);
            return numbers;
        }
    }
    rangeOfNumbers(1, 5);

    function fact(n) {
        // if (n < 0) {
        //     return;
        // } else {
        //     // fact(n - 1);
        //     const preceding = n - 1;
        //     console.log(preceding, n * fact(n - 1))
        //     return n * fact(preceding);
        // }
        if (n === 1) {
            return n;
        }
        const preceding = n - 1;
        console.log(preceding, n * fact(n - 1))
        return n * fact(preceding);
    }
    fact(6);
    console.log(fact(6));
    // const cart = ["kurta", "lungi", "shirt"];
    // createOrder(cart).then(function (orderId) {
    //     console.log(orderId);
    //     // return orderId;
    // }).then(function (orderId) {
    //     return proceedTopay(orderId)
    // }).then(function (orderInfo) {
    //     console.log(orderInfo);
    // }).then(function (order) {
    //     return showOrderSum(order)
    // }).then(function (order) {
    //     console.log(order);
    // }).then(orderId => {
    //     return updateWallet(orderId)
    // }).then(orderId => console.log(orderId))
    //     .
    //     catch(function (e) {
    //         return console.log(e.message);
    //     });
    // function createOrder(cart) {
    //     const pr = new Promise(function (res, rej) {
    //         if (!validateCart(cart)) {
    //             const err = new Error("cart not validated")
    //             rej(err);
    //         }
    //         const orderId = "4788787"

    //         if (orderId) {
    //             res(orderId);
    //         }
    //     });
    //     console.log(pr);
    //     return pr;
    // }
    // function proceedTopay(orderId) {
    //     const pr2 = new Promise(function (res, rej) {
    //         res("successsfull")
    //     });
    //     console.log(pr2);
    //     return pr2;
    // }
    // function showOrderSum(order) {
    //     return new Promise(function (res, rej) {
    //         res("orders");
    //     })
    // }
    // function updateWallet(orderId) {
    //     return new Promise(function (res, rej) {
    //         res("Wallet updated based on order id")
    //     })
    // }
    // function validateCart(cart) {
    //     return true;
    // }
    /********to load data manually from map method */
    const [tabData, setTabData] = useState([]);
    const [value, setValue] = useState(0);
    const [load, setLoad] = useState(true);
    const Tabfn = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTabData(data);
        setLoad(false);
    }
    console.log(tabData);
    useEffect(() => {
        Tabfn();
    }, []);
    if (load) {
        return (
            <>
                <div>Loading...</div>
            </>
        )
    };
    if (tabData.length === 0) {
        return (

            < div >
                <button onClick={() => Tabfn()}>Tab</button>
            </div >
        )
    }
    const { duties, title, company } = tabData[value];
    console.log(duties);
    return (
        <>
            <div>
                <section className="title">
                    <h2>Experience</h2>
                    <br />
                </section>
            </div>
            <div className="job">
                <div className="job-title">
                    {
                        tabData.map((i, index) => {
                            console.log(i, index)
                            return (
                                <>
                                    <button className={`info-btn ${index === value && 'active'}`} key={i.id} onClick={() => setValue(index)}>{i.company}</button>
                                </>
                            )
                        })
                    }
                </div>
                <div className="job-desc">
                    <article>
                        <h2>{title}</h2>
                        {
                            duties.map((i, index) => {
                                console.log(i);
                                return (
                                    <>

                                        <div key={index}>
                                            <p>
                                                <FaAngleDoubleRight className="job-info" />{i}
                                            </p>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </article>
                </div>
            </div >
            {/* {
                tabData.map((item, index) => {
                    const { id, title, order, dates, duties, company } = item;
                    console.log(index);
                    return (
                        <>

                            <div className="company-names" key={id}>
                                <h1>{company}</h1>
                            </div>

                            <section className="job-container" key={index}>
                                <div>
                                    <p>{title}</p>
                                    <p>{dates}</p>

                                </div>
                                <div className="duties">
                                    <FaAngleDoubleRight />{duties}
                                </div>
                            </section>
                        </>
                    )
                })
            } */}

        </>
    )
}
export default Tab;