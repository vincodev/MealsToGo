import React, { useContext, useState } from 'react';
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../../src/services/restaurants/restaurants.context";
import { FavouritesContext } from '../../../../src/services/favourites/favourites.context';
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from '../components/restaurant-info.card.component';
import { FavouritesBar } from '../../../../src/components/favourites/favourites-bar.component';

import { RestaurantList } from "../components/restaurant-list.styles";






const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, restaurants } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);
    return (
        <SafeArea>

            {isLoading && (
                <LoadingContainer>
                    <Loading
                        size={50}
                        animating={true}
                        color={MD2Colors.blue300}
                    />
                </LoadingContainer>
            )}

            <Search
                isFavouritesToggle={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled &&
                <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("RestaurantDetail", {
                                    restaurant: item,
                                })
                            }
                        >
                            <Spacer position="bottom" size="large">
                                <FadeInView>
                                    <RestaurantInfoCard restaurant={item} />
                                </FadeInView>
                            </Spacer>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
};