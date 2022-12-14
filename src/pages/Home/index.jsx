import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
    const [productName, setProductName] = useState();
    const [products, setProducts] = useState([]);

    function handleAddProduct() {
        const newProduct = {
            name: productName,
        };

        setProducts((prevState) => [...prevState, newProduct]);
    }

    return (
        <div className="container">
            <header>
                <h1>
                    LISTA DE COMPRAS <br></br>Claudio & Larissa
                </h1>
                <div>
                    <strong>Com ❤️ por 0xJinbe</strong>
                    <img
                        src="https://github.com/claudio-germano.png"
                        alt="pfp"
                    />
                </div>
            </header>
            <input
                type="text"
                placeholder="Digite o produto..."
                onChange={(e) => setProductName(e.target.value)}
            />
            <button onClick={handleAddProduct} type="button">
                Adicionar
            </button>

            {products.map((product) => (
                <Card key={product.name} name={product.name} />
            ))}
        </div>
    );
}
