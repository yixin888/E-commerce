import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
          <div className="home__container">
              <img 
              className="home__image"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3094785994,316333941&fm=26&gp=0.jpg"
              alt=""
              />
            
            <div className="home__row">
                <Product 
                id="1111"
                title='Shoes' 
                price={88.99} 
                image="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1763114173,1763660675&fm=26&gp=0.jpg"
                rating = {5}
                />
                <Product 
                id="1112"
                title='Bag' 
                price={188.88} 
                image="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=162248026,1234688294&fm=26&gp=0.jpg"
                rating = {4}
                />

                <Product 
                id="1113"
                title=' Fashion shoes'
                price={199.68} 
                image="https://m.media-amazon.com/images/I/71hUzL-xQgL._AC_UL320_.jpg"
                rating = {4}
                />
                
                <Product 
                id="1114"
                title=' ALTOSY Genuine Leather Backpack Purse for Women Convertible Fashion Shoulder Bag Medium'
                price={192.18} 
                image="https://m.media-amazon.com/images/I/81z1lhzz8xL._AC_UL320_.jpg"
                rating = {3}
                />

                <Product 
                id="1113"
                title=' Classic Women Sunglasses'
                price={58.68} 
                image="https://m.media-amazon.com/images/I/616GED8ZkBL._AC_UL320_.jpg"
                rating = {4}
                />
            </div>

            <div className="home__row">
                <Product 
                id="2221"
                title='Fashion Cloth' 
                price={288.88} 
                image="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1479665639,2326879784&fm=26&gp=0.jpg"
                rating = {5}
                />
                <Product 
                id="2222"
                title="Cosplay: Women's Cute Cosplay Costumes "
                price={388.88} 
                image="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3375687085,2898149712&fm=26&gp=0.jpg"
                rating = {4}
                />
                <Product 
                id="2223"
                title="Pajamas: Womens Sleepwear "
                price={188.88} 
                rating = {4}
                image="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216808364,88005251&fm=26&gp=0.jpg"
                />

                <Product 
                id="2223"
                title=" Womens Wide Brim Straw Panama Hat"
                price={68.98} 
                rating = {3}
                image="https://m.media-amazon.com/images/I/81wTKaFiZVS._AC_UL320_.jpg"
                />

                <Product 
                id="2223"
                title="Women Backpack Purse Pu Leather"
                price={108.99} 
                rating = {5}
                image="https://m.media-amazon.com/images/I/71rUMOM+GGL._AC_UL320_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="3331"
                title="Swimming Suit: Womens Two Piece Sexy SwimSuit"
                price={98.88} 
                image="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915269371,2796202552&fm=26&gp=0.jpg"
                rating = {4}
                />

<Product 
                id="3332"
                title="Swimming Suit: Womens Two Piece Sexy SwimSuit"
                price={98.88} 
                image="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915269371,2796202552&fm=26&gp=0.jpg"
                rating = {4}
                />

<Product 
                id="3333"
                title="60/63 Pairs Fashion Earrings Set for Women and Girls"
                price={29.99} 
                image="https://m.media-amazon.com/images/I/81o36-r+lpL._AC_UL320_.jpg"
                rating = {3}
                />

<Product 
                id="3334"
                title="Women Chunky Heel Knee High Winter Boots"
                price={108.88} 
                image="https://m.media-amazon.com/images/I/61HFUSvlNEL._AC_UL320_.jpg"
                rating = {4}
                />

<Product 
                id="3335"
                title="Women Averil Fashion Boot"
                price={208.88} 
                image="https://m.media-amazon.com/images/I/81N1ZceuQrL._AC_UL320_.jpg"
                rating = {4}
                />


            </div>

          </div>

        </div>
        
    );
}

export default Home;
