import React, { createRef, useRef, useState ,useEffect} from "react";
import ActionSheet from "react-native-actions-sheet";
import { StyleSheet, TextInput, Picker, FlatList,ActivityIndicator } from "react-native";
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
import Task from "../../components/Task";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/core";

const indexCounter = 15;

const TaskForm = () => {
  const [date, setDate] = useState(new Date());
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

const TaskListHeader = () => {
  const navigation = useNavigation();
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>All Tasks List</Title>
      </Body>
      <Right />
    </Header>
  );
};

const TaskList = () => {
  const refRBSheet = useRef();
  const [selectedRole, setSelectedRole] = useState();
  const [selectedDomain, setSelectedDomain] = useState();
  const [task, setTask] = useState();
  const [loading, setLoading] = useState(true);
  const [taskItems, setTaskItems] = useState([]);
  const navigation = useNavigation();
  const hadleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  useEffect(() => {
    setLoading(true);
    fetch('http://18.139.228.56:8000/TaskJson/')

      .then(response => response.json())
      .then(json => {
        setTaskItems(json.body);
        setLoading(false);
        console.log(json.body);
      })
  }
    , []);

  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  return (
    <Container>
      <Content padder>
        <FlatList
          data={taskItems}
          renderItem={({ item }) => <Task task={item.fields} />}
          keyExtractor={(task) => task.pk}
        />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default TaskList;
