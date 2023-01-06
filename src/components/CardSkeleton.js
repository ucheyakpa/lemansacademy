import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton" key={i}>
        <div className="left-col">
          <Skeleton height={100} width={100} />
        </div>
        <div className="right-col">
          <Skeleton count={3} style={{ marginBottom: "0.5em" }} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
