import React from 'react'
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Button,
} from 'react-native'

import Animated, { Easing, interpolate } from 'react-native-reanimated'
const { Value, timing } = Animated

// Calculate window size
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

let data = [{
  "id": 1,
  "first_name": "Tobey",
  "last_name": "Branson",
  "email": "tbranson0@abc.net.au"
}, {
  "id": 2,
  "first_name": "Korney",
  "last_name": "Popping",
  "email": "kpopping1@miitbeian.gov.cn"
}, {
  "id": 3,
  "first_name": "Rorie",
  "last_name": "Wincer",
  "email": "rwincer2@gnu.org"
}, {
  "id": 4,
  "first_name": "Portie",
  "last_name": "Goodbody",
  "email": "pgoodbody3@bloglines.com"
}, {
  "id": 5,
  "first_name": "Gamaliel",
  "last_name": "Twigger",
  "email": "gtwigger4@state.tx.us"
}, {
  "id": 6,
  "first_name": "Mil",
  "last_name": "Alcott",
  "email": "malcott5@tamu.edu"
}, {
  "id": 7,
  "first_name": "Hilly",
  "last_name": "Scroyton",
  "email": "hscroyton6@wisc.edu"
}, {
  "id": 8,
  "first_name": "Mollee",
  "last_name": "Baroux",
  "email": "mbaroux7@aboutads.info"
}, {
  "id": 9,
  "first_name": "Meggi",
  "last_name": "Haukey",
  "email": "mhaukey8@mac.com"
}, {
  "id": 10,
  "first_name": "Wang",
  "last_name": "Tanzig",
  "email": "wtanzig9@taobao.com"
}];

// Declare component 
class FBSearchBar extends React.Component {

  constructor(props) {
    super(props)

    // state
    this.state = {
      isFocused: false,
      allUsers: data,
      userFiltured: data,
    }

    // animation values
    this._input_box_translate_x = new Value(width)
    this._back_button_opacity = new Value(0)
    this._content_translate_y = new Value(height)
    this._content_opacity = new Value(0)
  }

  _onFocus = () => {
    // update state
    this.setState({ isFocused: true })
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }

    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_y, content_translate_y_config).start()
    timing(this._content_opacity, content_opacity_config).start()

    // force focus
    this.refs.input.focus()

  }

  _onBlur = () => {
    // update state
    this.setState({ isFocused: false })
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease)
    }
    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease)
    }
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }

    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_y, content_translate_y_config).start()
    timing(this._content_opacity, content_opacity_config).start()

    // force blur
    this.refs.input.blur();

  }

  _searchUser(textToSearch) {
    this.setState({
      userFiltured: this.state.allUsers.filter(i =>
        i.first_name.toLowerCase().includes(textToSearch.toLowerCase()),
      ),
    });
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.header_safe_area}>
          <View style={styles.header}>
            <View style={styles.header_inner}>
              <View>
                <Image
                  source={require('../assets/images/Facebook-Logo.png')}
                  style={{ width: 152, height: 30 }}
                />
              </View>
              <TouchableHighlight
                activeOpacity={1}
                underlayColor={"#ccd0d5"}
                onPress={this._onFocus}
                style={styles.search_icon_box}
              >
                <Image
                  source={require('../assets/images/search.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableHighlight>
              <Animated.View
                style={[styles.input_box, { transform: [{ translateX: this._input_box_translate_x }] }]}
              >
                <Animated.View style={{ opacity: this._back_button_opacity }}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={"#ccd0d5"}
                    onPress={this._onBlur}
                    style={styles.back_icon_box}
                  >
                    <Text>Back</Text>
                  </TouchableHighlight>
                </Animated.View>
                <TextInput
                  ref="input"
                  placeholder="Search Facebook"
                  clearButtonMode="always"
                  // value={this.state.keyword}
                  onChangeText={(text => {
                    this._searchUser(text);
                  })}
                  style={styles.input}
                />
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>

        <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{ translateY: this._content_translate_y }] }]}>
          <SafeAreaView style={styles.content_safe_area}>

            <View style={styles.content_inner}>
              <View style={styles.separator} />
              <ScrollView>
                {this.state.userFiltured.map((item, index) => {
                  return (
                    <View key={index}>
                      <View style={styles.search_item} >
                        <Text>
                          {item.first_name}
                        </Text>
                      </View>
                    </View>
                  )
                })}
              </ScrollView>
            </View>

          </SafeAreaView>
        </Animated.View>
      </>
    )
  }
}

export default FBSearchBar

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000
  },
  header: {
    height: 50,
    paddingHorizontal: 16
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  search_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 32
  },
  back_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999
  },
  content_safe_area: {
    flex: 1,
    backgroundColor: 'white'
  },
  content_inner: {
    flex: 1,
    paddingTop: 100
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb'
  },
  image_placeholder_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%'
  },
  image_placeholder: {
    width: 150,
    height: 113,
    alignSelf: 'center'
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16
  },
  item_icon: {
    marginRight: 15
  }
})

