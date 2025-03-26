import React, { } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter";
import FuscaImg from "./assets/fusca.jpg"

const carros = [
  {
    id: "1",
    nome: "VW - Fusca",
    ano: "1978",
    cor: "Preto",
    imagem: FuscaImg,
  },
  {
    id: "2",
    nome: "VW - Gol",
    ano: "2010",
    cor: "Vermelho",
    imagem: "https://cdn.motor1.com/images/mgl/YAAopq/s3/volkswagen-gol-1.0-2023.webp",
  },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Objeto</Text>
      
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.carName}>{item.nome}</Text>
              <Text style={styles.carDetails}>Ano: {item.ano}</Text>
              <Text style={styles.carDetails}>Cor: {item.cor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 22,
    fontFamily: "Inter_300Light",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "auto",
    height: 150,
    resizeMode: "contain"
  },
  info: {
    padding: 10,
  },
  carName: {
    fontSize: 18,
    fontFamily: "Inter_300Light",
    fontWeight: "bold",
    color: "#333",
  },
  carDetails: {
    fontSize: 14,
    fontFamily: "Inter_300Light",
    color: "#666",
  },
});
