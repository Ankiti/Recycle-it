import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
  },
  box: {
    height: 125,
    width: 125,
    marginVertical: 10,
    marginHorizontal: 30,
  },

  icon1: {
    //backgroundColor: "powderblue",
    marginTop: 110,
  },

  icon2: {
    height: 150,
    width: 150,
  },

  icon3: {
    height: 158,
    width: 158,
  },

  icon4: {
    alignSelf: "center",
  },

  icon5: {
    marginTop: 110,
    height: 130,
    width: 130,
  },

  icon6: {
    height: 135,
    width: 135,
  },

  icon7: {
    height: 155,
    width: 155,
  },

  button: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "powderblue",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "semibold",
  },

  modalButton: {
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "steelblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  containerINS: {
    //paddingTop: 35,
    //flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },

  buttonINS: {
    //flex: 1,
    alignItems: "left",
    fontsize: 12,
  },

  boxOne: {
    // flex: 3,
    //padding: ,
    marginTop: 25,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 40,
  },

  boxThree: {
    //flex: 18,
    //padding: 7,
    alignSelf: "flex-start",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Cochin",
    color: "#00008B",
    height: 50,
    width: "100%",
    marginTop: 19,
  },

  boxFour: {
    //flex: 3,
    //padding: 10,
    marginTop: 15,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 40,
  },

  instructions: {
    fontsize: 30,
    flex: 1,
    padding: 10,
    alignItems: "left",
  },
});
