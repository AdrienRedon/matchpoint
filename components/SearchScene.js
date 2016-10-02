import React, { Component, PropTypes } from 'react';
import {Image, TextInput, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Header from './Header';
import MyAppText from './MyAppText';
export default class SearchScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      class: "searchInput"
    }
  }

  getClass() {
    if(this.state.class == "searchInput") {
      return styles.searchInput;
    } else if (this.state.class == "searchInputFocus") {
      return styles.searchInputFocus;
    }
  }

  onBlur() {
    this.setState({
        class: "searchInput"
    })
  }
  onFocus() {
    this.setState({
        class: "searchInputFocus"
    })
  }

  searchClub(value) {
    this.setState({list: [
       {id: '11623', name: 'U.S. NANTUATIENNE', picture: '', sport: 'Football'},
        {id: '183754', name: 'FOOTBALL CLUB COTIERE-LUENAZ', picture: '', sport: 'Football'}
    ]});
  }

  render() {
    if(this.state.list.length == 0) {
      contents = <Text style={styles.instructions}>Veuillez entrer le nom de votre club.</Text>;
    } else {
      contents = this.state.list.map((club, i) => {
        return (
          <TouchableHighlight key={i} onPress={() => this.props.onForward(club.id)}>
            <View style={styles.listItem}>
              <Image source={require('../assets/ic_team_own.png')} style={styles.listItemImg}>
              </Image>
              <View style={styles.listItemInfo}>
                <MyAppText style={styles.listItemName}>{club.name}</MyAppText>
                <MyAppText style={styles.listItemSport}>{club.sport}</MyAppText>
              </View>
              <Image style={styles.listItemChevron} source={require('../assets/ic_chevron_r.png')}>
              </Image>
            </View>
          </TouchableHighlight>
        );
     });
    }
    
    return (
      <View style={styles.container}>
        <Header/>
        <Image source={require('../assets/img_home.png')} style={styles.subHeader}>
          <View style={styles.overlay}>
            <TextInput style={this.getClass()}
                       placeholder="Rechercher un club…"
                       placeholderTextColor="rgba(255, 255, 255, 0.5)"
                       onSubmitEditing={(value) => this.searchClub(value)} 
                       onFocus={ () => this.onFocus() }
                       onBlur={ () => this.onBlur() }/>
          </View>
        </Image>
        {contents}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1,
  },
  subHeader: {
    height: 140,
    alignSelf: "center",
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: 415,
  },
  overlay: {
    height: 90,
    backgroundColor: "rgba(26, 39, 53, 0.9)",
    justifyContent: "center"
  },
  searchInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#979797",
    backgroundColor: "rgba(255, 255, 255, 0)",
    height: 40,
    width: 310,
    paddingLeft: 15,
    color: "rgba(255, 255, 255, 1)",
    alignSelf: "center",
  },
  searchInputFocus: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0)",
    height: 40,
    width: 310,
    paddingLeft: 15,
    color: "rgba(255, 255, 255, 1)",
    alignSelf: "center",
  },
  listItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
    backgroundColor: "white",
  },
  listItemInfo: {
    flex: 1,
    paddingLeft: 15
  },
  listItemImg: {
    height: 30,
    width: 28
  },
  listItemChevron: {
    height: 10,
    width: 10,
    alignSelf: "center"
  },
  listItemName: {
    color: "#E63421"
  },
  listItemSport: {
    color: "#3C414B"
  },
  instructions: {
    color: "#777",
    textAlign: "center",
    marginTop: 30
  }
});