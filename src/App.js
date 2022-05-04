import React from 'react';
import Button from "./components/Button";
import handy_bag from "./assets/bag_1.png";
import stylish_bag from "./assets/bag_2.png";
import simple_bag from "./assets/bag_3.png";
import trendy_bag from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";
import './App.css';
import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button title="to the collection"/>
                <Button title="shop all bags"/>
                <Button title="pre-orders"/>
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={handy_bag}
                    title="The handy bag"
                    price="400"
                />
                <Product
                    label="Best seller"
                    image={stylish_bag}
                    title="The stylish bag"
                    price="250"
                />
                <Product
                    label="New collection"
                    image={simple_bag}
                    title="The simple bag"
                    price="300"
                />
                <Product
                    label="New collection"
                    image={trendy_bag}
                    title="The simple bag"
                    price="150"
                />
            </main>
            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum et illum inventore optio quae
                        quis saepe sed. Et, repellat!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, repellendus.</p>
                </Tile>
                <Tile
                    img={brand}
                    imgDescription="Het merk"
                />
                <Tile img={our_story}
                      imgDescription="Foto van onszelf"/>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet atque blanditiis
                        consequuntur doloremque dolorum, enim exercitationem facere fuga ipsum iste laborum mollitia
                        necessitatibus nesciunt nulla numquam obcaecati odit officiis optio perferendis placeat
                        provident quam quas quis quos rem sed vel, vero voluptatem voluptatibus? Ab asperiores eaque et
                        hic, id incidunt iste magni, odio, perspiciatis provident quia quod tenetur totam!</p>
                </Tile>
            </footer>
        </>
    )
}

export default App;



