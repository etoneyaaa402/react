import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
    "products": [
        {
            id: 1,
            name: "Fancy French Cheese",
            price: 0.9,
            inStock: 99,
            description: "There is immense diversity within each variety of cheese, leading some to estimate between 1,000 and 1,600 distinct types of French cheese. French cheeses are broadly grouped into eight categories, 'les huit familles de fromage'.",
            img: "https://www.fodors.com/wp-content/uploads/2019/05/HERO_FrenchCheesesNeverHeardOf_Heroshutterstock520248970.jpg",
            isNew: true,
            discount: "20",
        },
        {
            id: 2,
            name: "Cheese",
            price: 4.9,
            inStock: 3,
            description: "Some cheeses are classified, protected, and regulated under French law. The majority are classified as Appellation d'origine contrôlée (AOC), the highest level of protection. Some are also protected under the less stringent but still legally regulated designation Label Régional (LR). A few French cheeses are protected under the European Union's Protected Geographic Indication designation (PGI).",
            img: "https://www.cheese.com/media/img/cheese/emmentaler_istock.jpg",
            isNew: false,
            discount: "0",
        },
        {
            id: 3,
            name: "Butter",
            price: 99,
            inStock: 2,
            description: "Butter is a dairy product made from the fat and protein components of churned cream. It is a semi-solid emulsion at room temperature, consisting of approximately 80% butterfat. It is used at room temperature as a spread, melted as a condiment, and used as a fat in baking, sauce-making, pan frying, and other cooking procedures.",
            img: "https://e0.edimdoma.ru/data/posts/0001/8459/18459-ed4_wide.jpg?1631181988",
            isNew: false,
            discount: "50",
        },
        {
            id: 4,
            name: "Heavy Cream",
            price: 3.9,
            inStock: 0,
            description: "Heavy cream is a dairy product composed of the higher-fat layer skimmed from the top of milk before homogenization. In un-homogenized milk, the fat, which is less dense, eventually rises to the top. In the industrial production of cream, this process is accelerated by using centrifuges called 'separators'. ",
            img: "https://www.wikihow.com/images/thumb/1/14/Make-Heavy-Cream-Step-12-Version-5.jpg/v4-1200px-Make-Heavy-Cream-Step-12-Version-5.jpg",
            isNew: false,
            discount: "0",
        },
        {
            id: 5,
            name: "Sour Cream",
            price: 1.9,
            inStock: 32,
            description: "Sour cream (in North American English, Australian English and New Zealand English) or soured cream (British English) is a dairy product obtained by fermenting regular cream with certain kinds of lactic acid bacteria.[1] The bacterial culture, which is introduced either deliberately or naturally, sours and thickens the cream.",
            img: "https://www.budgetbytes.com/wp-content/uploads/2022/08/Sour-Cream-chips-above.jpg",
            isNew: false,
            discount: "0",
        },
        {
            id: 6,
            name: "Milk",
            price: 2.9,
            inStock: 86,
            description: "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food. Immune factors and immune-modulating components in milk contribute to milk immunity. ",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Milk_001.JPG",
            isNew: false,
            discount: "10",
        },
        {
            id: 7,
            name: "Youghurt",
            price: 2.4,
            inStock: 1,
            description: "Yogurt is a food produced by bacterial fermentation of milk. The bacteria used to make yogurt are known as yogurt cultures. Fermentation of sugars in the milk by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tart flavor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_-SRcFHSCXZ5g6QJdpBoHq0rK0hceSrLfFsiKpR70f8MMt9gx0e6Bv11Mu51zdb5ARQ&usqp=CAU",
            isNew: true,
            discount: "0",
        },
    ],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
