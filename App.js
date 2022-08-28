import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Modal,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./Styles";

const Rheea = "https://www.linkedin.com/in/rheea-maistry24/";
const Ankiti = "https://www.linkedin.com/in/ankiti/";
const Laila = "https://www.linkedin.com/in/laila-elhossini-6a71441b6/";
const Sohee = "https://www.linkedin.com/in/sohee-yoon-7a3bb7245/";

export default function App() {
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
    return (
      <Pressable style={styles.buttonINS} onPress={handlePress}>
        <Text style={{ font: 12, color: "blue" }}>{children}</Text>
      </Pressable>
    );
    //<Button style= {{flex: 1, alignItems: 'center', fontsize: 12}} title={children} onPress={handlePress} />;
  };

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);
  const [about, setAbout] = useState(false);
  const [instruction, setInstruction] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Modal1 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PET</Text> is one of the
                most commonly used plastics in our world today. This is because
                it's lightweight,cheap, and easy to recycle.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Plastic
                water bottles, carpet, and soft drinks.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse any food or material from your plastic and dispose them
                off in the nearest recycling bin. Plastic bottle caps should be
                discarded in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible1(!modalVisible1)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal2 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>HDPE</Text> is a strong
                plastic used in many different applications in our everyday
                life. {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Juice
                bottles, household cleaner bottles, and shopping bags.{"\n"}{" "}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse your plastic and dispose them off in the nearest recycling
                bin. Grocery bags or other light plastic should be discarded at
                a store’s drop-off recycling center.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal3 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PVC</Text> is a tough and
                cheap plastic that cannot be recycled easily.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Window
                frames, plumbing pipes, and wire jacketing.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Dispose your plastic in the trash as PVC can rarely be recycled.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal4 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible4}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible4(!modalVisible4);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>LDPE</Text> is a flexible
                plastic commonly used in food applications.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Squeezable
                bottles, tote bags, and sandwich bags.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse your plastic and dispose them off in the nearest recycling
                bin. Soft plastic (e.g., sandwich bags) can be discarded at a
                store’s drop-off recycling center.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible4(!modalVisible4)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal5 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible5}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible5(!modalVisible5);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PP</Text> is a
                thermoplastic which means it has a high melting point, therefore
                it is often used for food containers.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Yogurt
                containers, Tupperware, and medicine bottles.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse any food or material from your plastic and dispose them
                off in the nearest recycling bin. Plastic bottle caps should be
                discarded in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible5(!modalVisible5)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal6 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible6}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible6(!modalVisible6);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PS</Text> or more commonly
                known as Styrofoam is commonly used for packaging.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Styrofoam
                cups, aspirin bottles, and coolers.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                To prevent the Styrofoam from breaking into smaller pieces,
                follow these instructions: {"\n"}- Place your plastic in a bag.{" "}
                {"\n"}- Squeeze the air out. {"\n"}- Tie the bag. {"\n"}
                Then, dispose of the plastic in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible6(!modalVisible6)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal7 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible7}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible7(!modalVisible7);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>OTHER</Text> is for
                plastics that do not fall under the previous six categories.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> DVDs,
                bullet-proof materials, and sunglasses.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Cannot be recycled, therefore discarded in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible7(!modalVisible7)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Instruction Modal */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={instruction}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setInstruction(!instruction);
          }}
        >
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              //marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 30,
                marginBottom: 350,
                padding: 20,
                borderRadius: 20,
                flex: 1,
              }}
            >
              <Button
                style={{ width: 20, alignText: "right" }}
                title="x"
                onPress={() => setInstruction(!instruction)}
              />
              <Text style={{ fontSize: 30 }}>How to use</Text>
              <Text style={{ flex: 1, paddingTop: 20 }}>
                Recycle-It helps you recycle smarter and help the environment in
                3 easy steps:{" "}
              </Text>
              <Text style={{ flex: 1 }}>
                1. Look for the recycling loop on your plastic item. Usually
                this is at the bottom and/or back of the product{" "}
              </Text>
              <Text style={{ flex: 1 }}>
                2. Check the number inside the recycling loop{" "}
              </Text>
              <Text style={{ flex: 1 }}>
                3. Tap the label in the app that matches your plasstic label.
                Learn about how to dispose of your plastic, and Recyle-It!
              </Text>
            </View>
          </View>
        </Modal>

        {/* About Modal */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={about}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setAbout(!about);
          }}
        >
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 30,
                marginBottom: 100,
                padding: 20,
                borderRadius: 20,
                flex: 1,
              }}
            >
              <Button
                style={{ width: 20, alignText: "right" }}
                title="x"
                onPress={() => setAbout(!about)}
              />
              <Text style={{ fontSize: 30 }}>About Us</Text>
              <Text style={{ flex: 1, paddingTop: 20 }}>
                Recycle-It is an app created by Sus Lab, a team of invovative
                women.{" "}
              </Text>
              <Text style={{ flex: 1.5 }}>
                We were inpired by the continuous struggle of many people to
                distinguish between what trash is recyclable and what is not.
              </Text>
              <Text style={{ flex: 1, fontWeight: "bold" }}>
                Recycle but Recycle-It confidently
              </Text>
              <Text style={{ flex: 1, fontSize: 16 }}>Contact</Text>

              <Text style={{ flex: 1, fontWeight: "bold" }}>Rheea Maistry</Text>
              <OpenURLButton
                style={{ flex: 1, alignItems: "center" }}
                url={Rheea}
              >
                https://www.linkedin.com/in/rheea-maistry24/
              </OpenURLButton>
              <Text style={{ flex: 1 }}>maistryrheea27@gmail.com</Text>

              <Text style={{ flex: 1, fontWeight: "bold" }}>
                Ankiti Aggarwal
              </Text>
              <OpenURLButton
                style={{ flex: 1, alignItems: "center" }}
                url={Ankiti}
              >
                https://www.linkedin.com/in/ankiti/
              </OpenURLButton>
              <Text style={{ flex: 1 }}>a56aggar@uwaterloo.ca</Text>

              <Text style={{ flex: 1, fontWeight: "bold" }}>
                Laila Elhossini
              </Text>
              <OpenURLButton
                style={{ flex: 1, alignItems: "center" }}
                url={Laila}
              >
                https://www.linkedin.com/in/laila-elhossini-6a71441b6/
              </OpenURLButton>
              <Text style={{ flex: 1 }}>lailaelhossini@gmail.com</Text>

              <Text style={{ flex: 1, fontWeight: "bold" }}>Sohee Yoon</Text>
              <OpenURLButton
                style={{ flex: 1, alignItems: "center" }}
                url={Sohee}
              >
                https://www.linkedin.com/in/sohee-yoon-7a3bb7245/
              </OpenURLButton>
              <Text style={{ flex: 1 }}>soheeyoon04@gmail.com</Text>
            </View>
          </View>
        </Modal>

        <View style={styles.containerINS}>
          <View style={styles.boxOne}>
            <FontAwesome.Button
              style={{
                alignItems: "center",
                paddingVertical: 5,
                paddingLeft: 10,
                paddingRight: 5,
              }}
              name="bars"
              backgroundColor="#3b5998"
              onPress={() => {
                setAbout(true);
              }}
            ></FontAwesome.Button>
          </View>

          <Text style={styles.boxThree}>RECYCLE-IT</Text>

          <View style={styles.boxFour}>
            <FontAwesome.Button
              style={{
                alignItems: "right",
                justifyContent: "center",
                paddingVertical: 5,
                paddingLeft: 10,
                paddingRight: 5,
              }}
              name="question"
              backgroundColor="#3b5998"
              onPress={() => {
                {
                  setInstruction(true);
                }
              }}
            ></FontAwesome.Button>
          </View>
        </View>

        <View>
          {/* Icon1 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon1]}
            onPress={() => setModalVisible1(true)}
          >
            <Image
              source={require("./assets/sign.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon3 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon2]}
            onPress={() => setModalVisible3(true)}
          >
            <Image
              source={require("./assets/sign3.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon5 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon3]}
            onPress={() => setModalVisible5(true)}
          >
            <Image
              source={require("./assets/sign5.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon7 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon4]}
            onPress={() => setModalVisible7(true)}
          >
            <Image
              source={require("./assets/sign7.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {/* Icon2 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon5]}
            onPress={() => setModalVisible2(true)}
          >
            <Image
              source={require("./assets/sign2.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon4 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon6]}
            onPress={() => setModalVisible4(true)}
          >
            <Image
              source={require("./assets/sign4.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon6 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon7]}
            onPress={() => setModalVisible6(true)}
          >
            <Image
              source={require("./assets/sign6.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}
