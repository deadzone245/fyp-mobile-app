import React, { createRef, useRef, useState } from "react";
import ActionSheet from "react-native-actions-sheet";
import { StyleSheet, TextInput, Picker, FlatList } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { Formik } from "formik";
import {
  Container,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading,
  View,
  Footer,
  FooterTab,
  Form,
  Input,
  Label,
  Item,
  TouchableOpacity,
} from "native-base";
import Task from "../components/Task";
import { color } from "react-native-reanimated";

const indexCounter = 15;

const TaskForm = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [selectedValueDomain, setSelectedValueDomain] = useState("Home");
  const [selectedValueRole, setSelectedValueRole] = useState("Personal");
  /* const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setFieldValue("date", date);
  }; */

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Formik
      initialValues={{
        index: "",
        title: "",
        description: "",
        domain: selectedValueDomain,
        Role: selectedValueRole,
        date: JSON.stringify(date),
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
        <View>
          <TextInput
            placeholder="Task title"
            onChangeText={handleChange("title")}
            onBlur={handleBlur("title")}
            value={values.title}
          />
          <TextInput
            placeholder="Task description"
            onChangeText={handleChange("description")}
            onBlur={handleBlur("description")}
            value={values.description}
          />
          <Item picker style={{ flexDirection: "row" }}>
            <Text>Domain: </Text>
            <Picker
              selectedValue={selectedValueDomain}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedValueDomain(itemValue);
                //console.log(itemValue);
                setFieldValue("Domain", itemValue);
              }}
            >
              <Picker.Item label="Home" value="Home" />
              <Picker.Item label="Work" value="Work" />
            </Picker>
            <Text>Role: </Text>
            <Picker
              selectedValue={selectedValueRole}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedValueRole(itemValue);
                //console.log(itemValue);
                setFieldValue("Role", itemValue);
              }}
            >
              <Picker.Item label="Personal" value="Personal" />
              <Picker.Item label="Developer" value="Developer" />
            </Picker>
          </Item>
          <Item>
            <View style={{ flexDirection: "row" }}>
              <Button style={{ marginLeft: -15 }} transparent>
                <Icon name="pricetag-outline" />
              </Button>
              <Button transparent>
                <Icon onPress={showDatepicker} name="calendar" />
                <Text>{format(date, "E dd, yyyy")}</Text>
              </Button>

              <Button transparent>
                <Icon onPress={showTimepicker} name="alarm" />
                <Text>{format(date, "h:mma")}</Text>
              </Button>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || date;
                    setShow(Platform.OS === "ios");
                    setDate(currentDate);
                    setFieldValue("date", JSON.stringify(date));
                  }}
                />
              )}
            </View>
          </Item>
          <Button primary onPress={handleSubmit} title="Submit">
            <Text>Submit</Text>
          </Button>
        </View>
      )}
    </Formik>
  );
};

const TabOne = () => {
  const refRBSheet = useRef();
  const [selectedRole, setSelectedRole] = useState();
  const [selectedDomain, setSelectedDomain] = useState();
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([
    { title: "StateTask1", index: "1" },
    { title: "StateTask2", index: "2" },
    { title: "StateTask3", index: "3" },
    { title: "StateTask4", index: "4" },
    { title: "StateTask5", index: "5" },
    { title: "StateTask6", index: "6" },
    { title: "StateTask7", index: "7" },
    { title: "StateTask8", index: "8" },
    { title: "StateTask9", index: "9" },
    { title: "StateTask10", index: "10" },
    { title: "StateTask11", index: "11" },
    { title: "StateTask12", index: "12" },
    { title: "StateTask13", index: "13" },
    { title: "StateTask14", index: "14" },
    { title: "StateTask15", index: "15" },
  ]);

  const hadleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  return (
    <Container>
      <Content padder>
        <FlatList
          data={taskItems}
          renderItem={({ item }) => (
            <Task title={item.title} index={item.index} />
          )}
          keyExtractor={(item) => item.index}
        />
        {/*         <Task index={1} title="Pick up keys from office " />
        <Task index={2} title="Task 2" />
        <Task index={3} title="Task 3" />
        <Task index={4} title="Task 4" />
        <Task index={5} title="Task 5" />
        <Task index={7} title="Task 7" />
        <Task index={8} title="Task 8" />
        <Task index={9} title="Task 9" />
        <Task index={10} title="Task 10" />
        <Task index={11} title="Task 11" />
        <Task index={12} title="Task 12" />
        <Task index={13} title="Task 13" />
        <Task index={14} title="Task 14" />
        <Task index={15} title="Task 15" />
        <Task index={16} title="Task 16" />
        <Task index={17} title="Task 17" />
        <Task index={18} title="Task 18" /> */}
      </Content>

      <Footer style={{ backgroundColor: "#fff" }}>
        <FooterTab>
          <Button
            iconLeft
            full
            info
            style={{ flexDirection: "row", justifyContent: "center" }}
            onPress={() => refRBSheet.current.open()}
          >
            <Icon name="add-outline" style={{ color: "white" }} />
            <Text style={{ color: "white" }}>Add Task</Text>
          </Button>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={300}
            customStyles={{
              wrapper: {
                backgroundColor: "#00000055",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <TaskForm />
            {/* <View>
              <Form>
                <Item regular>
                  <Input placeholder="Task" />
                </Item>
                <Item regular>
                  <Input placeholder="Description" />
                </Item>
                <Item picker style={{ flexDirection: "row" }}>
                  <Text>Domain: </Text>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                  <Text>Role: </Text>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </Item>
                <Item>
                  <View style={{ flexDirection: "row" }}>
                    <Button style={{ marginLeft: -15 }} transparent>
                      <Icon name="pricetag-outline" />
                    </Button>
                    <Button transparent>
                      <Icon onPress={showDatepicker} name="calendar" />
                      <Text>{format(date, "E dd, yyyy")}</Text>
                    </Button>

                    <Button transparent>
                      <Icon onPress={showTimepicker} name="alarm" />
                      <Text>{format(date, "h:mma")}</Text>
                    </Button>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                  </View>
                </Item>
              </Form>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  marginRight: 20,
                }}
              >
                <Button success transparent>
                  <Text>Save</Text>
                </Button>
              </View>
            </View> */}
          </RBSheet>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default TabOne;
