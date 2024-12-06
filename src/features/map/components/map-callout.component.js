import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component"

export const MapCalloutComponent = ({ restaurant }) => {

    return (
        <CompactRestaurantInfo isMap restaurant={restaurant}

        />
    );

}
