import { StyleSheet, Text, View } from "react-native";
import React, {useContext} from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import { UserReversedGeoCode } from "../context/UserReversedGeoCode";

const Home = () => {
  const {address, setAddress} = useContext(UserReversedGeoCode);


  
  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
