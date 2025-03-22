import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const FloatingBlocks = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, { toValue: -10, duration: 1000, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 10, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.blocksContainer}>
      {[1, 2, 3].map((item) => (
        <Animated.View key={item} style={[styles.block, { transform: [{ translateY }] }]}>
          <Text style={styles.blockText}>Blok {item}</Text>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  blocksContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: SCREEN_WIDTH * 0.9,
    marginTop: 20,
  },
  block: {
    width: 100,
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  blockText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FloatingBlocks;
