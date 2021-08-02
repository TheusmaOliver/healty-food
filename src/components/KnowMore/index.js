import React from "react";
import Services from "../../assets/img/bloco_services.svg";
import "./KnowMore.css";
function KnowMore() {
  return (
    <div className="knowmore">
      <img src={Services} alt="Services" />
      <div className="about">
        <h2>The best services ready To serve you</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button>
            Know More
        </button>
      </div>
    </div>
  );
}

export default KnowMore;
