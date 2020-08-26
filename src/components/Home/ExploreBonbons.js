import React from "react";
import styled from "styled-components";
import data from "../../assets/data/bonbon";

const ExploreBonbons = props => {
  let homeWidth = window.innerWidth;

  function showTooltip(event, d) {
    if ((homeWidth > 700 && props.showHome)) {
        const tooltip = document.getElementById("tooltip");
        let w = window.innerWidth;
        let h = window.innerHeight;
        tooltip.style.display = "inline-block";
        tooltip.innerHTML = `<h4>${d.name}</h4><p>${d.description}</p>`;
        (event.pageX < w / 2) ? 
          tooltip.style.left = event.pageX + 20 + "px" :
          tooltip.style.left = event.pageX - tooltip.offsetWidth - 20 + "px";
        (event.pageY < h / 2) ?
        tooltip.style.top = event.pageY + 20 + "px":
        tooltip.style.top = event.pageY - tooltip.offsetHeight - 20 + "px";
    }
  }

  function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }

  return(
    <React.Fragment>
    <Body id="thebonbons">
        {data.map(bonbon => {
          return (
            <div>
              <img
                onMouseMove={(e) => showTooltip(e, bonbon)}
                onMouseLeave={() => hideTooltip()}
                alt="test"
                src={require(`../../assets/bonbons/png/${bonbon.img}.png`)}
              />
              <div className="bonbon-text">
                <p className="bonbon-name">{bonbon.name}</p>
                <p>{bonbon.description}</p>
              </div>
            </div>
          );
        })}
      </Body>
      <Tooltip id="tooltip"></Tooltip>
    </React.Fragment>
  )
}

const Tooltip = styled.div`
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  display: none;
  font-size: 0.75rem;
  max-width: 200px;
  padding: 7px 9px;
  position: absolute;
  text-align: left;
  z-index: 600;
  h4 {
    margin: 0.4rem 0;
    border-bottom: 1px solid #ccc;
  }
`;
const Body = styled.div`
@media(min-width: 800px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  transform: translateY(60px);
  overflow: hidden;
  > * {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 1fr;
    text-align: center;
    .bonbon-text {
      display: none;
    }
    img {
      width: 100%;
      max-width: fit-content;
    }
  }
}
@media(max-width: 800px) {
  display: block;
  max-width: 500px;
  margin: 0 auto;
  > * {
    display: flex;
    align-items: center;
    width 95%;
    margin: 0 auto;
    color: #efefef;
    padding: 1rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #555;
    .bonbon-name {
      font-weight: bold;
    }
    .bonbon-text {
      box-sizing: border-box;
    }
  }
  > *:last-child {
    border-bottom: 0;
  }
  > *:nth-child(odd) {
    .bonbon-text {
      padding-left: 1rem;
    }
  }
  > *:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    .bonbon-text {
    padding-right: 1rem;
    }
  }
}
`;

export default ExploreBonbons;