import React from "react";
import { useDispatch } from "react-redux";
import { addBonBon, bonBonSelection } from "../../../store/actions/bonBons";
import styled from "styled-components";
import Backdrop from "../../UI/Backdrop/Backdrop";

const BonBonSelection = () => {
  const allbonbons = [
    {
      name: "PERSIA",
      description:
        "Amaretto almond marzipan paired with a Persian spiced dark chocolate ganache",
      img: "persia",
    },
    {
      name: "SALTED BANANA CARAMEL",
      description: "salted caramel blended with banana",
      img: "salted-banana-caramel",
    },
    {
      name: "PISTACHIO BERGAMOT",
      description: "caramel infused with French lavender",
      img: "pistachio-bergamot",
    },
    {
      name: "BLOOD ORANGE",
      description: "rich, buttery caramel blended with blood orange juice",
      img: "blood-orange",
    },
    {
      name: "EXTRA DARK",
      description: "85% bittersweet dark chocolate ganache",
      img: "extra-dark",
    },
    {
      name: "FLEUR DE SEL CARAMEL",
      description: "caramel infused with grey French sea salt",
      img: "fleur-de-sel-caramel",
    },
    {
      name: "LAVENDER CARAMEL",
      description: "caramel infused with French lavender",
      img: "lavendar-caramel",
    },
    {
      name: "ECUADOR",
      description: "dark chocolate ganache made with cacao from Ecuador",
      img: "ecuador",
    },
    {
      name: "SALTED HAZELNUT PRALINE",
      description:
        "caramelized hazelnut and sea salt blended with milk chocolate",
      img: "salted-hazelnut-praline",
    },
    {
      name: "RASPBERRY",
      description:
        "raspberry paté de fruit topped with dark chocolate raspberry ganache",
      img: "raspberry",
    },
    {
      name: "PASSION FRUIT CARAMEL",
      description: "caramel blended with tropical passion fruit",
      img: "passion-fruit-caramel",
    },
    {
      name: "VIOLET CASSIS",
      description:
        "violet infused ganache on top of a layer of cassis pate de fruit",
      img: "violet-cassis",
    },
    {
      name: "VENEZUELAN DARK",
      description: "dark chocolate ganache made with 70% cacao from Venezuela",
      img: "venezuelan-dark",
    },
    {
      name: "ROSEMARY",
      description:
        "caramel infused with fresh rosemary in a dark chocolate shell",
      img: "rosemary",
    },
    {
      name: "VENEZUELAN SPICE",
      description: "dark chocolate ganache infused with a chile spice blend",
      img: "venezuelan-spice",
    },
    {
      name: "VANILLA BEAN",
      description: "caramel infused with Madagascar vanilla beans",
      img: "vanilla-bean",
    },
    {
      name: "CHAMPAGNE",
      description: "milk chocolate ganache blended with French champagne",
      img: "champagne",
    },
    {
      name: "COFFEE CARAMEL",
      description: "caramel infused with freshly roasted and ground coffee",
      img: "coffee-caramel",
    },
    {
      name: "BUTTERSCOTCH BOURBON",
      description: "brown sugar caramel infused with Kentucky bourbon",
      img: "butterscotch-bourbon",
    },
    {
      name: "KALAMANSI-LIME",
      description:
        "milk chocolate ganache infused with fresh lime juice and fragrant kalamansi",
      img: "kalamansi-lime",
    },
    {
      name: "STRAWBERRY BALSAMIC",
      description:
        "caramel made with fresh strawberries and aged balsamic vinegar",
      img: "strawberry-balsamic",
    },
    {
      name: "CINNAMON DULCE DE LECHE",
      description: "dulce de leche caramel spiced with cinnamon",
      img: "cinnamon-dulce-de-leche",
    },
    {
      name: "COCONUT CARAMEL",
      description: "coconut milk caramel with toasted coconut",
      img: "coconut-caramel",
    },
    {
      name: "FRESH LEMON",
      description:
        "fresh lemon marmalade and lemon infused white chocolate ganache",
      img: "fresh-lemon",
    },
  ];

  const dispatch = useDispatch();

  const addBonBonDisaptch = (flavor) => {
    dispatch(addBonBon(flavor));
    dispatch(bonBonSelection(false));
  };
  return (
    <MainBonBonContainer>
      <Backdrop show={true} clicked={() => dispatch(bonBonSelection(false))} />
      <BonBonContainer>
        <BonBonHeader>
          <h2>
            BONBON <span className="flavors">FLAVORS</span>
          </h2>
          <button
            className="exitBtn"
            onClick={() => dispatch(bonBonSelection(false))}
          >
            X
          </button>
        </BonBonHeader>
        <BonBonBody>
          {allbonbons.map((bonbon) => {
            return (
              <NewBonBonBtn onClick={() => addBonBonDisaptch(bonbon.img)}>
                <img alt="" src={require(`../../../assets/bonbons/${bonbon.img}.jpg`)}/>
                <p>{bonbon.name}</p>
              </NewBonBonBtn>
            );
          })}
        </BonBonBody>
      </BonBonContainer>
    </MainBonBonContainer>
  );
};

const NewBonBonBtn = styled.button`
flex: 1;
box-sizing: border-box;
background: #fff;
border: 0;
margin: 1rem 0.75rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
&:hover{
  box-shadow:
7px 7px 20px 0px #0002,
4px 4px 5px 0px #0001;
}
p {
  color: #333;
}`
;

const MainBonBonContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
`;
const BonBonContainer = styled.div`
  z-index: 100;
  background: #fff;
  padding: 1rem;
  max-width: 750px;
  display: block;
  position: relative;
`;
const BonBonHeader = styled.div`
  position: sticky;
  top: 0;
  display: block;
  background: #fff;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 3rem;
    margin: 0;
    color: #333;
  }
  .flavors{
    font-size: 1rem;
  margin-bottom: 0;
  color: gray;
}
button {
  border: none;
  background: #fff;
}
`;

const BonBonBody = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
max-height: 80vh;
background: #fff;
overflow-y: auto;
&::-webkit-scrollbar {
  -webkit-appearance: none;
}
&::-webkit-scrollbar:vertical {
  width: 11px;
}
&::-webkit-scrollbar:horizontal {
  height: 11px;
}
&::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid #fff; /* should match background, can't be transparent */
/*     background-color: rgba(0, 0, 0, .5); */
background-color: #3c2f29;
}
`;

export default BonBonSelection;
